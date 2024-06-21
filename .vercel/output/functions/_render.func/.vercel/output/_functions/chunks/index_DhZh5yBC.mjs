import { m as createComponent, n as renderTemplate, p as maybeRenderHead, _ as __astro_tag_component__, F as Fragment, l as createVNode } from './astro/server_D9ztAZ7o.mjs';
import { $ as $$Image } from './_astro_assets_CQWyE-M6.mjs';
import { $ as $$FormattedDate } from './FormattedDate_BnvzjPGi.mjs';
import 'kleur/colors';
import 'clsx';

const $$Component = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<button onclick="alert(\`You clicked the button!\`)" class="p-2 border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10 transition-colors duration-300 ease-in-out">
Relative Button
</button>`;
}, "C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/content/blog/06-mdx-syntax/component.astro", void 0);

const frontmatter = {
  "title": "MDX syntax guide",
  "description": "Get started writing mdx in markdown.",
  "date": "Mar 16 2024"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "example-1",
    "text": "Example 1"
  }, {
    "depth": 3,
    "slug": "example-2",
    "text": "Example 2"
  }, {
    "depth": 3,
    "slug": "more-links",
    "text": "More Links"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h3: "h3",
    hr: "hr",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["MDX is largely an extension of markdown with the ability to import ", createVNode(_components.code, {
        children: ".astro"
      }), ",\r\n", createVNode(_components.code, {
        children: ".jsx"
      }), ", ", createVNode(_components.code, {
        children: ".tsx"
      }), " and other framework components you have integrated."]
    }), "\n", createVNode(_components.p, {
      children: "This unlocks a lot of possibilities for creating interactive content."
    }), "\n", createVNode(_components.p, {
      children: "This guide will cover the basics of mdx syntax and how to use it, as well as a few examples."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h3, {
      id: "example-1",
      children: "Example 1"
    }), "\n", createVNode(_components.p, {
      children: ["Importing a component from the ", createVNode(_components.code, {
        children: "/components"
      }), " directory."]
    }), "\n", createVNode(_components.p, {
      children: "This component will accept a javascript date object and format it as a string."
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "astro",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: 'import DateComp from "../../../components/FormattedDate.astro";'
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "DateComp"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " date"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "={"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "new"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " Date"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "()} />"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", "\n", createVNode($$FormattedDate, {
      date: /* @__PURE__ */new Date()
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h3, {
      id: "example-2",
      children: "Example 2"
    }), "\n", createVNode(_components.p, {
      children: "Importing a component from a relative path to your content."
    }), "\n", createVNode(_components.p, {
      children: "This component will display an alert when you click the button."
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "astro",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: 'import RelativeComponent from "./component.astro";'
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "RelativeComponent"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " />"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", "\n", createVNode($$Component, {}), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.p, {
      children: "Nano is an extremely lightweight theme, with no frameworks, so there aren\u2019t\r\nany examples of react, vue, solid etc. You can integrate these frameworks using\r\nthe guide below, and also use those components in your mdx files."
    }), "\n", createVNode(_components.p, {
      children: ["Don\u2019t forget to\r\nuse the ", createVNode(_components.code, {
        children: "client"
      }), " directive to make them interactive."]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "astro",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "ReactComponent"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " client:load"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " />"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h3, {
      id: "more-links",
      children: "More Links"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://mdxjs.com/docs/what-is-mdx",
          children: "MDX Syntax Documentation"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://docs.astro.build/en/guides/integrations-guide",
          children: "Astro Framework Integrations"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://docs.astro.build/en/guides/markdown-content/#markdown-and-mdx-pages",
          children: "Astro Usage Documentation"
        })
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Note:"
        }), " ", createVNode(_components.a, {
          href: "https://docs.astro.build/en/reference/directives-reference/#client-directives",
          children: "Client Directives"
        }), " are still required to create interactive components. Otherwise, all components in your MDX will render as static HTML (no JavaScript) by default."]
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  const {
    wrapper: MDXLayout
  } = props.components || {};
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
__astro_tag_component__(getHeadings, "astro:jsx");
__astro_tag_component__(MDXContent, "astro:jsx");
const url = "src/content/blog/06-mdx-syntax/index.mdx";
const file = "C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/content/blog/06-mdx-syntax/index.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/content/blog/06-mdx-syntax/index.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
