import { q as createAstro, m as createComponent, n as renderTemplate, s as addAttribute, o as renderComponent, p as maybeRenderHead, t as renderSlot, u as spreadAttributes, v as renderHead } from './astro/server_D9ztAZ7o.mjs';
import 'kleur/colors';
/* empty css                          */
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { S as SITE } from './consts_DwQO56bl.mjs';

const inter400 = "/_astro/inter-latin-400-normal.BT1H-PT_.woff2";

const inter600 = "/_astro/inter-latin-600-normal.B2Ssfs8e.woff2";

const lora400 = "/_astro/lora-latin-400-normal.CvHVDnm4.woff2";

const lora600 = "/_astro/lora-latin-600-normal.DUWh3m6k.woff2";

const $$Astro$3 = createAstro("https://raphaelamponsah.com");
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/GATEWAY/DeveloperConsole/astro-nano/node_modules/astro/components/ViewTransitions.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro("https://raphaelamponsah.com");
const $$Head = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Head;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const { title, description, image = "/nano.png" } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon-dark.svg" media="(prefers-color-scheme: dark)"><link rel="icon" type="image/svg+xml" href="/favicon-light.svg" media="(prefers-color-scheme: light)"><link rel="icon" type="image/x-icon" href="/favicon-light.svg"><meta name="generator"', '><!-- Font preloads --><link rel="preload"', ' as="font" type="font/woff2" crossorigin><link rel="preload"', ' as="font" type="font/woff2" crossorigin><link rel="preload"', ' as="font" type="font/woff2" crossorigin><link rel="preload"', ' as="font" type="font/woff2" crossorigin><!-- Canonical URL --><link rel="canonical"', "><!-- Primary Meta Tags --><title>", '</title><meta name="title"', '><meta name="description"', '><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image"', ">", '<script>\n  function init() {\n    preloadTheme();\n    onScroll();\n    animate();\n\n    const backToTop = document.getElementById("back-to-top");\n    backToTop?.addEventListener("click", (event) => scrollToTop(event));\n\n    const backToPrev = document.getElementById("back-to-prev");\n    backToPrev?.addEventListener("click", () => window.history.back());\n\n    const lightThemeButton = document.getElementById("light-theme-button");\n    lightThemeButton?.addEventListener("click", () => {\n      localStorage.setItem("theme", "light");\n      toggleTheme(false);\n    });\n\n    const darkThemeButton = document.getElementById("dark-theme-button");\n    darkThemeButton?.addEventListener("click", () => {\n      localStorage.setItem("theme", "dark");\n      toggleTheme(true);\n    });\n\n    const systemThemeButton = document.getElementById("system-theme-button");\n    systemThemeButton?.addEventListener("click", () => {\n      localStorage.setItem("theme", "system");\n      toggleTheme(window.matchMedia("(prefers-color-scheme: dark)").matches);\n    });\n\n    window.matchMedia("(prefers-color-scheme: dark)")\n      .addEventListener("change", event => {\n        if (localStorage.theme === "system") {\n          toggleTheme(event.matches);\n        }\n      }\n    );\n\n    document.addEventListener("scroll", onScroll);\n  }\n\n  function animate() {\n    const animateElements = document.querySelectorAll(".animate");\n\n    animateElements.forEach((element, index) => {\n      setTimeout(() => {\n        element.classList.add("show");\n      }, index * 150);\n    });\n  }\n\n  function onScroll() {\n    if (window.scrollY > 0) {\n      document.documentElement.classList.add("scrolled");\n    } else {\n      document.documentElement.classList.remove("scrolled");\n    }\n  }\n\n  function scrollToTop(event) {\n    event.preventDefault();\n    window.scrollTo({\n      top: 0,\n      behavior: "smooth"\n    });\n  }\n\nfunction toggleTheme(dark) {\n    const css = document.createElement("style");\n\n    css.appendChild(\n      document.createTextNode(\n        `* {\n             -webkit-transition: none !important;\n             -moz-transition: none !important;\n             -o-transition: none !important;\n             -ms-transition: none !important;\n             transition: none !important;\n          }\n        `,\n      )\n    );\n\n    document.head.appendChild(css);\n\n    if (dark) {\n      document.documentElement.classList.add("dark");\n    } else {\n      document.documentElement.classList.remove("dark");\n    }\n\n  window.getComputedStyle(css).opacity;\n    document.head.removeChild(css);\n  }\n\n  function preloadTheme() {\n    const userTheme = localStorage.theme;\n\n    if (userTheme === "light" || userTheme === "dark") {\n      toggleTheme(userTheme === "dark");\n    } else {\n      toggleTheme(window.matchMedia("(prefers-color-scheme: dark)").matches);\n    }\n  }\n\n  document.addEventListener("DOMContentLoaded", () => init());\n  document.addEventListener("astro:after-swap", () => init());\n  preloadTheme();\n<\/script>'], ['<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon-dark.svg" media="(prefers-color-scheme: dark)"><link rel="icon" type="image/svg+xml" href="/favicon-light.svg" media="(prefers-color-scheme: light)"><link rel="icon" type="image/x-icon" href="/favicon-light.svg"><meta name="generator"', '><!-- Font preloads --><link rel="preload"', ' as="font" type="font/woff2" crossorigin><link rel="preload"', ' as="font" type="font/woff2" crossorigin><link rel="preload"', ' as="font" type="font/woff2" crossorigin><link rel="preload"', ' as="font" type="font/woff2" crossorigin><!-- Canonical URL --><link rel="canonical"', "><!-- Primary Meta Tags --><title>", '</title><meta name="title"', '><meta name="description"', '><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image"', ">", '<script>\n  function init() {\n    preloadTheme();\n    onScroll();\n    animate();\n\n    const backToTop = document.getElementById("back-to-top");\n    backToTop?.addEventListener("click", (event) => scrollToTop(event));\n\n    const backToPrev = document.getElementById("back-to-prev");\n    backToPrev?.addEventListener("click", () => window.history.back());\n\n    const lightThemeButton = document.getElementById("light-theme-button");\n    lightThemeButton?.addEventListener("click", () => {\n      localStorage.setItem("theme", "light");\n      toggleTheme(false);\n    });\n\n    const darkThemeButton = document.getElementById("dark-theme-button");\n    darkThemeButton?.addEventListener("click", () => {\n      localStorage.setItem("theme", "dark");\n      toggleTheme(true);\n    });\n\n    const systemThemeButton = document.getElementById("system-theme-button");\n    systemThemeButton?.addEventListener("click", () => {\n      localStorage.setItem("theme", "system");\n      toggleTheme(window.matchMedia("(prefers-color-scheme: dark)").matches);\n    });\n\n    window.matchMedia("(prefers-color-scheme: dark)")\n      .addEventListener("change", event => {\n        if (localStorage.theme === "system") {\n          toggleTheme(event.matches);\n        }\n      }\n    );\n\n    document.addEventListener("scroll", onScroll);\n  }\n\n  function animate() {\n    const animateElements = document.querySelectorAll(".animate");\n\n    animateElements.forEach((element, index) => {\n      setTimeout(() => {\n        element.classList.add("show");\n      }, index * 150);\n    });\n  }\n\n  function onScroll() {\n    if (window.scrollY > 0) {\n      document.documentElement.classList.add("scrolled");\n    } else {\n      document.documentElement.classList.remove("scrolled");\n    }\n  }\n\n  function scrollToTop(event) {\n    event.preventDefault();\n    window.scrollTo({\n      top: 0,\n      behavior: "smooth"\n    });\n  }\n\nfunction toggleTheme(dark) {\n    const css = document.createElement("style");\n\n    css.appendChild(\n      document.createTextNode(\n        \\`* {\n             -webkit-transition: none !important;\n             -moz-transition: none !important;\n             -o-transition: none !important;\n             -ms-transition: none !important;\n             transition: none !important;\n          }\n        \\`,\n      )\n    );\n\n    document.head.appendChild(css);\n\n    if (dark) {\n      document.documentElement.classList.add("dark");\n    } else {\n      document.documentElement.classList.remove("dark");\n    }\n\n  window.getComputedStyle(css).opacity;\n    document.head.removeChild(css);\n  }\n\n  function preloadTheme() {\n    const userTheme = localStorage.theme;\n\n    if (userTheme === "light" || userTheme === "dark") {\n      toggleTheme(userTheme === "dark");\n    } else {\n      toggleTheme(window.matchMedia("(prefers-color-scheme: dark)").matches);\n    }\n  }\n\n  document.addEventListener("DOMContentLoaded", () => init());\n  document.addEventListener("astro:after-swap", () => init());\n  preloadTheme();\n<\/script>'])), addAttribute(Astro2.generator, "content"), addAttribute(inter400, "href"), addAttribute(inter600, "href"), addAttribute(lora400, "href"), addAttribute(lora600, "href"), addAttribute(canonicalURL, "href"), title, addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(Astro2.url, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(image, Astro2.url), "content"), addAttribute(Astro2.url, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(image, Astro2.url), "content"), renderComponent($$result, "ViewTransitions", $$ViewTransitions, {}));
}, "C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/components/Head.astro", void 0);

const $$Container = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="mx-auto max-w-screen-sm px-5"> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/components/Container.astro", void 0);

function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function readingTime(html) {
  const textOnly = html.replace(/<[^>]+>/g, "");
  const wordCount = textOnly.split(/\s+/).length;
  const readingTimeMinutes = (wordCount / 200 + 1).toFixed();
  return `${readingTimeMinutes} min read`;
}
function dateRange(startDate, endDate) {
  const startMonth = startDate.toLocaleString("default", { month: "short" });
  const startYear = startDate.getFullYear().toString();
  let endMonth;
  let endYear;
  if (endDate) {
    if (typeof endDate === "string") {
      endMonth = "";
      endYear = endDate;
    } else {
      endMonth = endDate.toLocaleString("default", { month: "short" });
      endYear = endDate.getFullYear().toString();
    }
  }
  return `${startMonth}${startYear} - ${endMonth}${endYear}`;
}

const $$Astro$1 = createAstro("https://raphaelamponsah.com");
const $$Link = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Link;
  const { href, external, underline = true, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(external ? "_blank" : "_self", "target")}${addAttribute(cn("inline-block decoration-black/15 dark:decoration-white/30 hover:decoration-black/25 hover:dark:decoration-white/50 text-current hover:text-black hover:dark:text-white transition-colors duration-300 ease-in-out", underline && "underline underline-offset-2"), "class")}${spreadAttributes(rest)}> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/components/Link.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header> ${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` <div class="flex flex-wrap gap-y-2 justify-between"> ${renderComponent($$result2, "Link", $$Link, { "href": "/", "underline": false }, { "default": ($$result3) => renderTemplate` <div class="font-semibold"> ${SITE.NAME} </div> ` })} <nav class="flex gap-1"> <!-- <Link href="/blog">
          blog
        </Link> --> <!-- <span>
          {\`/\`}
        </span> --> ${renderComponent($$result2, "Link", $$Link, { "href": "/work" }, { "default": ($$result3) => renderTemplate`
work
` })} <span> ${`/`} </span> ${renderComponent($$result2, "Link", $$Link, { "href": "/projects" }, { "default": ($$result3) => renderTemplate`
projects
` })} ${`/`} ${renderComponent($$result2, "Link", $$Link, { "href": "/research" }, { "default": ($$result3) => renderTemplate`
research
` })} </nav> </div> ` })} </header>`;
}, "C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/components/Header.astro", void 0);

const $$BackToTop = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<button id="back-to-top" class="relative group w-fit flex pl-8 pr-3 py-1.5 flex-nowrap rounded border border-black/15 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/5 hover:text-black dark:hover:text-white transition-colors duration-300 ease-in-out"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="absolute top-1/2 left-2 -translate-y-1/2 size-4 stroke-2 fill-none stroke-current rotate-90"> <line x1="5" y1="12" x2="19" y2="12" class="translate-x-2 group-hover:translate-x-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></line> <polyline points="12 5 5 12 12 19" class="translate-x-1 group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></polyline> </svg> <div class="text-sm">
Back to top
</div> </button>`;
}, "C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/components/BackToTop.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="animate"> ${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` <div class="relative"> <div class="absolute right-0 -top-20"> ${renderComponent($$result2, "BackToTop", $$BackToTop, {})} </div> </div> <div class="flex justify-between items-center"> <div>
&copy; 2024 ${`|`} ${SITE.NAME} </div> <div class="flex flex-wrap gap-1 items-center"> <button id="light-theme-button" aria-label="Light theme" class="group size-8 flex items-center justify-center rounded-full"> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="group-hover:stroke-black group-hover:dark:stroke-white transition-colors duration-300 ease-in-out"> <circle cx="12" cy="12" r="5"></circle> <line x1="12" y1="1" x2="12" y2="3"></line> <line x1="12" y1="21" x2="12" y2="23"></line> <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line> <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line> <line x1="1" y1="12" x2="3" y2="12"></line> <line x1="21" y1="12" x2="23" y2="12"></line> <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line> <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line> </svg> </button> <button id="dark-theme-button" aria-label="Dark theme" class="group size-8 flex items-center justify-center rounded-full"> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="group-hover:stroke-black group-hover:dark:stroke-white transition-colors duration-300 ease-in-out"> <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path> </svg> </button> <button id="system-theme-button" aria-label="System theme" class="group size-8 flex items-center justify-center rounded-full"> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="group-hover:stroke-black group-hover:dark:stroke-white transition-colors duration-300 ease-in-out"> <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect> <line x1="8" y1="21" x2="16" y2="21"></line> <line x1="12" y1="17" x2="12" y2="21"></line> </svg> </button> </div> </div> ` })} </footer>`;
}, "C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/components/Footer.astro", void 0);

const $$Astro = createAstro("https://raphaelamponsah.com");
const $$PageLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PageLayout;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "Head", $$Head, { "title": `${title} | ${SITE.NAME}`, "description": description })}${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <main> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/layouts/PageLayout.astro", void 0);

export { $$Container as $, $$PageLayout as a, $$Link as b, dateRange as d, readingTime as r };
