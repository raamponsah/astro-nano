import 'cookie';
import { bold, red, yellow, dim, blue } from 'kleur/colors';
import './astro/server_D9ztAZ7o.mjs';
import 'clsx';
import 'html-escaper';
import { compile } from 'path-to-regexp';

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, label, message, newLine = true) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message,
    newLine
  };
  if (!isLogLevelEnabled(logLevel, level)) {
    return;
  }
  dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message, newLine = true) {
  return log(opts, "info", label, message, newLine);
}
function warn(opts, label, message, newLine = true) {
  return log(opts, "warn", label, message, newLine);
}
function error(opts, label, message, newLine = true) {
  return log(opts, "error", label, message, newLine);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else {
    prefix.push(timestamp);
  }
  if (label) {
    prefix.push(`[${label}]`);
  }
  if (level === "error") {
    return red(prefix.join(" "));
  }
  if (level === "warn") {
    return yellow(prefix.join(" "));
  }
  if (prefix.length === 1) {
    return dim(prefix[0]);
  }
  return dim(prefix[0]) + " " + blue(prefix.splice(1).join(" "));
}
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}
class Logger {
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message, newLine = true) {
    info(this.options, label, message, newLine);
  }
  warn(label, message, newLine = true) {
    warn(this.options, label, message, newLine);
  }
  error(label, message, newLine = true) {
    error(this.options, label, message, newLine);
  }
  debug(label, ...messages) {
    debug(label, ...messages);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
}
class AstroIntegrationLogger {
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info(this.options, this.label, message);
  }
  warn(message) {
    warn(this.options, this.label, message);
  }
  error(message) {
    error(this.options, this.label, message);
  }
  debug(message) {
    debug(this.label, message);
  }
}

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Le9csk2C.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/_slug_.gfn4TnUh.css"}],"routeData":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Le9csk2C.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/_slug_.gfn4TnUh.css"}],"routeData":{"route":"/blog/[...slug]","isIndex":false,"type":"page","pattern":"^\\/blog(?:\\/(.*?))?\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"...slug","dynamic":true,"spread":true}]],"params":["...slug"],"component":"src/pages/blog/[...slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Le9csk2C.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/_slug_.gfn4TnUh.css"}],"routeData":{"route":"/projects","isIndex":true,"type":"page","pattern":"^\\/projects\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/index.astro","pathname":"/projects","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Le9csk2C.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/_slug_.gfn4TnUh.css"}],"routeData":{"route":"/projects/[...slug]","isIndex":false,"type":"page","pattern":"^\\/projects(?:\\/(.*?))?\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}],[{"content":"...slug","dynamic":true,"spread":true}]],"params":["...slug"],"component":"src/pages/projects/[...slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Le9csk2C.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/_slug_.gfn4TnUh.css"}],"routeData":{"route":"/research","isIndex":true,"type":"page","pattern":"^\\/research\\/?$","segments":[[{"content":"research","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/research/index.astro","pathname":"/research","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[],"routeData":{"route":"/robots.txt","isIndex":false,"type":"endpoint","pattern":"^\\/robots\\.txt\\/?$","segments":[[{"content":"robots.txt","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/robots.txt.ts","pathname":"/robots.txt","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.ts","pathname":"/rss.xml","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Le9csk2C.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/_slug_.gfn4TnUh.css"}],"routeData":{"route":"/work","isIndex":true,"type":"page","pattern":"^\\/work\\/?$","segments":[[{"content":"work","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/work/index.astro","pathname":"/work","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Le9csk2C.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/_slug_.gfn4TnUh.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://raphaelamponsah.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/pages/blog/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/pages/blog/index.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/pages/projects/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/pages/projects/index.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/pages/research/index.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/pages/work/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/projects/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/projects/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/research/index@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/pages/rss.xml.ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/work/index@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/blog/[...slug]@_@astro":"pages/blog/_---slug_.astro.mjs","\u0000@astro-page:src/pages/projects/index@_@astro":"pages/projects.astro.mjs","\u0000@astro-page:src/pages/projects/[...slug]@_@astro":"pages/projects/_---slug_.astro.mjs","\u0000@astro-page:src/pages/research/index@_@astro":"pages/research.astro.mjs","\u0000@astro-page:src/pages/robots.txt@_@ts":"pages/robots.txt.astro.mjs","\u0000@astro-page:src/pages/rss.xml@_@ts":"pages/rss.xml.astro.mjs","\u0000@astro-page:src/pages/work/index@_@astro":"pages/work.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/generic_cv_uUg2L.mjs","/src/pages/blog/index.astro":"chunks/index_CbTg8kdb.mjs","/src/pages/blog/[...slug].astro":"chunks/_...slug__Df9oDsmA.mjs","/src/pages/projects/index.astro":"chunks/index_whVhGNOY.mjs","/src/pages/projects/[...slug].astro":"chunks/_...slug__DMxfMohD.mjs","/src/pages/research/index.astro":"chunks/index_CilMuh8d.mjs","/src/pages/robots.txt.ts":"chunks/robots.txt_Clc2fQmJ.mjs","/src/pages/rss.xml.ts":"chunks/rss.xml_C4ggKWf0.mjs","/src/pages/work/index.astro":"chunks/index_B5_fTQ2X.mjs","/src/pages/index.astro":"chunks/index_Del4QcN6.mjs","C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/content/blog/01-getting-started/index.md?astroContentCollectionEntry=true":"chunks/index_BQpYIn5z.mjs","C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/content/blog/02-blog-collection/index.md?astroContentCollectionEntry=true":"chunks/index_nZ6SHMBC.mjs","C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/content/blog/03-projects-collection/index.md?astroContentCollectionEntry=true":"chunks/index_CLmVvrNq.mjs","C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/content/blog/04-work-collection/index.md?astroContentCollectionEntry=true":"chunks/index_DywtGTPL.mjs","C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/content/blog/05-markdown-syntax/index.md?astroContentCollectionEntry=true":"chunks/index_D7rvjx-2.mjs","C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/content/blog/06-mdx-syntax/index.mdx?astroContentCollectionEntry=true":"chunks/index_Cn6E7m17.mjs","C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/content/blog/07-year-sorting-example/index.md?astroContentCollectionEntry=true":"chunks/index_Dfg5dM4p.mjs","C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/content/blog/08-draft-example/index.md?astroContentCollectionEntry=true":"chunks/index_BF5aRN-f.mjs","C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/content/projects/project-1/index.md?astroContentCollectionEntry=true":"chunks/index_B4Z9LMvL.mjs","C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/content/projects/project-2/index.md?astroContentCollectionEntry=true":"chunks/index_CfargdLT.mjs","C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/content/projects/project-3/index.md?astroContentCollectionEntry=true":"chunks/index_DBfafAvK.mjs","C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/content/projects/project-4/index.md?astroContentCollectionEntry=true":"chunks/index_CWUbFVL3.mjs","C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/content/research/rethinkin-ai-in-education.md?astroContentCollectionEntry=true":"chunks/rethinkin-ai-in-education_DYRQHFda.mjs","C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/content/research/social-media.md?astroContentCollectionEntry=true":"chunks/social-media_BNfl0cBS.mjs","C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/content/work/community.md?astroContentCollectionEntry=true":"chunks/community_C16jkc7L.mjs","C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/content/work/freelance.md?astroContentCollectionEntry=true":"chunks/freelance_Dur0NFl-.mjs","C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/content/work/gimpa.md?astroContentCollectionEntry=true":"chunks/gimpa_BK7K98Dn.mjs","C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/content/work/skyfusion.md?astroContentCollectionEntry=true":"chunks/skyfusion_BKsLzg5L.mjs","C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/content/work/sompa.md?astroContentCollectionEntry=true":"chunks/sompa_kR-lzUXb.mjs","C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/content/blog/01-getting-started/index.md?astroPropagatedAssets":"chunks/index_B1JmhNzW.mjs","C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/content/blog/02-blog-collection/index.md?astroPropagatedAssets":"chunks/index_DebA4bPa.mjs","C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/content/blog/03-projects-collection/index.md?astroPropagatedAssets":"chunks/index_BpZaY0yU.mjs","C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/content/blog/04-work-collection/index.md?astroPropagatedAssets":"chunks/index_Ber---xf.mjs","C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/content/blog/05-markdown-syntax/index.md?astroPropagatedAssets":"chunks/index_CcFGPzcy.mjs","C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/content/blog/06-mdx-syntax/index.mdx?astroPropagatedAssets":"chunks/index_CowTykRL.mjs","C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/content/blog/07-year-sorting-example/index.md?astroPropagatedAssets":"chunks/index_C5SwX19q.mjs","C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/content/blog/08-draft-example/index.md?astroPropagatedAssets":"chunks/index_BTE9NVRA.mjs","C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/content/projects/project-1/index.md?astroPropagatedAssets":"chunks/index_BpSzz4CG.mjs","C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/content/projects/project-2/index.md?astroPropagatedAssets":"chunks/index_CWJ-z2cq.mjs","C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/content/projects/project-3/index.md?astroPropagatedAssets":"chunks/index_Cb0yZ8vY.mjs","C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/content/projects/project-4/index.md?astroPropagatedAssets":"chunks/index_ByuNkBgj.mjs","C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/content/research/rethinkin-ai-in-education.md?astroPropagatedAssets":"chunks/rethinkin-ai-in-education_ChBvPNOR.mjs","C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/content/research/social-media.md?astroPropagatedAssets":"chunks/social-media_BR6xKJ8h.mjs","C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/content/work/community.md?astroPropagatedAssets":"chunks/community_BN6O2cCk.mjs","C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/content/work/freelance.md?astroPropagatedAssets":"chunks/freelance_4H4gbaU9.mjs","C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/content/work/gimpa.md?astroPropagatedAssets":"chunks/gimpa_CkDQnQ1M.mjs","C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/content/work/skyfusion.md?astroPropagatedAssets":"chunks/skyfusion_CLG5SJ_V.mjs","C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/content/work/sompa.md?astroPropagatedAssets":"chunks/sompa_BhmgD7JQ.mjs","C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/content/blog/01-getting-started/index.md":"chunks/index_CrARLBBH.mjs","C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/content/blog/02-blog-collection/index.md":"chunks/index_qOWyno0T.mjs","C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/content/blog/03-projects-collection/index.md":"chunks/index_BJpXlNQj.mjs","C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/content/blog/04-work-collection/index.md":"chunks/index_CvfWhpdV.mjs","C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/content/blog/05-markdown-syntax/index.md":"chunks/index_Bj2r3GbI.mjs","C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/content/blog/06-mdx-syntax/index.mdx":"chunks/index_DhZh5yBC.mjs","C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/content/blog/07-year-sorting-example/index.md":"chunks/index_DFy1SUga.mjs","C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/content/blog/08-draft-example/index.md":"chunks/index_pMwff4pg.mjs","C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/content/projects/project-1/index.md":"chunks/index_DrTag7T3.mjs","C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/content/projects/project-2/index.md":"chunks/index_BdenLzYH.mjs","C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/content/projects/project-3/index.md":"chunks/index_B40dRS4X.mjs","C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/content/projects/project-4/index.md":"chunks/index_BWdrq9wY.mjs","C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/content/research/rethinkin-ai-in-education.md":"chunks/rethinkin-ai-in-education_CaZ40mLf.mjs","C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/content/research/social-media.md":"chunks/social-media_zEVGlS_B.mjs","C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/content/work/community.md":"chunks/community_CBqvD4Kr.mjs","C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/content/work/freelance.md":"chunks/freelance_CcgV44GN.mjs","C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/content/work/gimpa.md":"chunks/gimpa_BmZJu_Us.mjs","C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/content/work/skyfusion.md":"chunks/skyfusion_BMVHuvgX.mjs","C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/content/work/sompa.md":"chunks/sompa_D6DwHIWb.mjs","\u0000@astrojs-manifest":"manifest_BSTyjxG2.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.Le9csk2C.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/inter-latin-400-normal.BT1H-PT_.woff2","/_astro/inter-latin-600-normal.B2Ssfs8e.woff2","/_astro/lora-cyrillic-ext-400-normal.CXkJfJTd.woff2","/_astro/lora-math-400-normal.QoQvadwx.woff2","/_astro/lora-symbols-400-normal.DmcY0X7a.woff2","/_astro/lora-cyrillic-400-normal.DXyCOuTk.woff2","/_astro/lora-vietnamese-400-normal.vaWCr7o2.woff2","/_astro/lora-latin-ext-400-normal.Zaohh3s8.woff2","/_astro/lora-latin-400-normal.CvHVDnm4.woff2","/_astro/inter-latin-400-normal.Cdi8t5Mu.woff","/_astro/lora-latin-600-normal.DUWh3m6k.woff2","/_astro/inter-latin-600-normal.Dbvh0wvx.woff","/_astro/lora-cyrillic-600-normal.GE5bhziV.woff2","/_astro/lora-cyrillic-ext-600-normal.C7TDeNoj.woff2","/_astro/lora-math-600-normal.CU8J3siK.woff2","/_astro/lora-vietnamese-600-normal.BVdSWJ2U.woff2","/_astro/lora-symbols-600-normal.DaMEG5Dn.woff2","/_astro/lora-latin-ext-600-normal.D_NIiHfu.woff2","/_astro/lora-cyrillic-ext-400-normal.CFh4TfQj.woff","/_astro/lora-symbols-400-normal.BQXsqyo4.woff","/_astro/lora-math-400-normal.Gsx8lQXW.woff","/_astro/lora-cyrillic-400-normal.D1XS6rs-.woff","/_astro/lora-vietnamese-400-normal.DhDIvpTE.woff","/_astro/lora-latin-400-normal.BGMs03OI.woff","/_astro/lora-latin-ext-400-normal.C_gIiBKz.woff","/_astro/lora-cyrillic-600-normal.D9Zbnu3d.woff","/_astro/lora-math-600-normal.Bpm_vvix.woff","/_astro/lora-cyrillic-ext-600-normal.DJ36qKL9.woff","/_astro/lora-vietnamese-600-normal.BNxtpOks.woff","/_astro/lora-symbols-600-normal.BBvEw2tW.woff","/_astro/lora-latin-ext-600-normal.CIEFHufk.woff","/_astro/lora-latin-600-normal.31JvEFhQ.woff","/_astro/spongebob.DNKR31Tf.webp","/_astro/_slug_.gfn4TnUh.css","/ad1.gif","/astro-nano.png","/astro-sphere.jpg","/confapp.png","/deploy_netlify.svg","/deploy_vercel.svg","/favicon-dark.svg","/favicon-light.svg","/helping-student.jpg","/IMG_4942.jpg","/laughing.jpg","/learning-laughing.jpg","/lighthouse.png","/me-in-class.jpg","/me.jpg","/online-app.png","/patrick.webp","/teaching-student.jpg","/teaching.jpg","/web.png","/youth-learning.jpg","/fonts/atkinson-bold.woff","/fonts/atkinson-regular.woff","/fonts/MonaSans-Light.woff2","/fonts/MonaSans-Regular.woff2","/fonts/MonaSans-SemiBold.woff2","/_astro/hoisted.Le9csk2C.js"],"buildFormat":"directory","checkOrigin":false,"rewritingEnabled":false,"experimentalEnvGetSecretEnabled":false});

export { AstroIntegrationLogger as A, Logger as L, getEventPrefix as g, levels as l, manifest as m };
