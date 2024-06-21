import pLimit from 'p-limit';
import { A as AstroError, U as UnknownContentCollectionError, x as prependForwardSlash } from './astro/assets-service_Bxr6wzEG.mjs';
import { m as createComponent, w as renderUniqueStylesheet, x as renderScriptElement, y as createHeadAndContent, n as renderTemplate, o as renderComponent, z as unescapeHTML } from './astro/server_D9ztAZ7o.mjs';
import 'kleur/colors';

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://raphaelamponsah.com", "ASSETS_PREFIX": undefined}, { Path: process.env.Path })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/01-getting-started/index.md": () => import('./index_BQpYIn5z.mjs'),"/src/content/blog/02-blog-collection/index.md": () => import('./index_nZ6SHMBC.mjs'),"/src/content/blog/03-projects-collection/index.md": () => import('./index_CLmVvrNq.mjs'),"/src/content/blog/04-work-collection/index.md": () => import('./index_DywtGTPL.mjs'),"/src/content/blog/05-markdown-syntax/index.md": () => import('./index_D7rvjx-2.mjs'),"/src/content/blog/06-mdx-syntax/index.mdx": () => import('./index_Cn6E7m17.mjs'),"/src/content/blog/07-year-sorting-example/index.md": () => import('./index_Dfg5dM4p.mjs'),"/src/content/blog/08-draft-example/index.md": () => import('./index_BF5aRN-f.mjs'),"/src/content/projects/project-1/index.md": () => import('./index_B4Z9LMvL.mjs'),"/src/content/projects/project-2/index.md": () => import('./index_CfargdLT.mjs'),"/src/content/projects/project-3/index.md": () => import('./index_DBfafAvK.mjs'),"/src/content/projects/project-4/index.md": () => import('./index_CWUbFVL3.mjs'),"/src/content/research/rethinkin-ai-in-education.md": () => import('./rethinkin-ai-in-education_DYRQHFda.mjs'),"/src/content/research/social-media.md": () => import('./social-media_BNfl0cBS.mjs'),"/src/content/work/community.md": () => import('./community_C16jkc7L.mjs'),"/src/content/work/freelance.md": () => import('./freelance_Dur0NFl-.mjs'),"/src/content/work/gimpa.md": () => import('./gimpa_BK7K98Dn.mjs'),"/src/content/work/skyfusion.md": () => import('./skyfusion_BKsLzg5L.mjs'),"/src/content/work/sompa.md": () => import('./sompa_kR-lzUXb.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"research":{"type":"content","entries":{"rethinkin-ai-in-education":"/src/content/research/rethinkin-ai-in-education.md","social-media":"/src/content/research/social-media.md"}},"work":{"type":"content","entries":{"community":"/src/content/work/community.md","freelance":"/src/content/work/freelance.md","gimpa":"/src/content/work/gimpa.md","skyfusion":"/src/content/work/skyfusion.md","sompa":"/src/content/work/sompa.md"}},"blog":{"type":"content","entries":{"01-getting-started":"/src/content/blog/01-getting-started/index.md","03-projects-collection":"/src/content/blog/03-projects-collection/index.md","02-blog-collection":"/src/content/blog/02-blog-collection/index.md","04-work-collection":"/src/content/blog/04-work-collection/index.md","05-markdown-syntax":"/src/content/blog/05-markdown-syntax/index.md","06-mdx-syntax":"/src/content/blog/06-mdx-syntax/index.mdx","07-year-sorting-example":"/src/content/blog/07-year-sorting-example/index.md","08-draft-example":"/src/content/blog/08-draft-example/index.md"}},"projects":{"type":"content","entries":{"project-1":"/src/content/projects/project-1/index.md","project-3":"/src/content/projects/project-3/index.md","project-4":"/src/content/projects/project-4/index.md","project-2":"/src/content/projects/project-2/index.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/01-getting-started/index.md": () => import('./index_B1JmhNzW.mjs'),"/src/content/blog/02-blog-collection/index.md": () => import('./index_DebA4bPa.mjs'),"/src/content/blog/03-projects-collection/index.md": () => import('./index_BpZaY0yU.mjs'),"/src/content/blog/04-work-collection/index.md": () => import('./index_Ber---xf.mjs'),"/src/content/blog/05-markdown-syntax/index.md": () => import('./index_CcFGPzcy.mjs'),"/src/content/blog/06-mdx-syntax/index.mdx": () => import('./index_CowTykRL.mjs'),"/src/content/blog/07-year-sorting-example/index.md": () => import('./index_C5SwX19q.mjs'),"/src/content/blog/08-draft-example/index.md": () => import('./index_BTE9NVRA.mjs'),"/src/content/projects/project-1/index.md": () => import('./index_BpSzz4CG.mjs'),"/src/content/projects/project-2/index.md": () => import('./index_CWJ-z2cq.mjs'),"/src/content/projects/project-3/index.md": () => import('./index_Cb0yZ8vY.mjs'),"/src/content/projects/project-4/index.md": () => import('./index_ByuNkBgj.mjs'),"/src/content/research/rethinkin-ai-in-education.md": () => import('./rethinkin-ai-in-education_ChBvPNOR.mjs'),"/src/content/research/social-media.md": () => import('./social-media_BR6xKJ8h.mjs'),"/src/content/work/community.md": () => import('./community_BN6O2cCk.mjs'),"/src/content/work/freelance.md": () => import('./freelance_4H4gbaU9.mjs'),"/src/content/work/gimpa.md": () => import('./gimpa_CkDQnQ1M.mjs'),"/src/content/work/skyfusion.md": () => import('./skyfusion_CLG5SJ_V.mjs'),"/src/content/work/sompa.md": () => import('./sompa_BhmgD7JQ.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
});

const SITE = {
  NAME: "Raphael Amponsah",
  EMAIL: "raphaelkofiamponsah@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 3,
  NUM_PROJECTS_ON_HOMEPAGE: 3
};
const HOME = {
  TITLE: "Home",
  DESCRIPTION: "Welcome to the portfolio and blog of Raphael Amponsah, an experienced IT professional and educator."
};
const BLOG = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about, including AI, software engineering, and IT infrastructure."
};
const WORK = {
  TITLE: "Work",
  DESCRIPTION: "Explore my professional journey, including roles in academia and industry."
};
const RESEARCH = {
  TITLE: "Research",
  DESCRIPTION: "Explore research I have worked on in, Data Science and AI, including roles in academia and industry."
};
const PROJECTS = {
  TITLE: "Projects",
  DESCRIPTION: "A showcase of my projects, complete with links to repositories and demos."
};
const SOCIALS = [
  {
    NAME: "twitter",
    HREF: "https://twitter.com/vypecode"
  },
  {
    NAME: "github",
    HREF: "https://github.com/raamponsah"
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/raphaelamponsah"
  }
];

export { BLOG as B, HOME as H, PROJECTS as P, RESEARCH as R, SITE as S, WORK as W, SOCIALS as a, getCollection as g };
