const id = "01-getting-started/index.md";
						const collection = "blog";
						const slug = "01-getting-started";
						const body = "\r\nThe basic configuration of Nano is pretty simple.\r\n\r\nEdit `src/consts.ts`\r\n\r\nCustomize the base site\r\n\r\n```ts \r\n// src/consts.ts\r\n\r\nexport const SITE: Site = {\r\n  NAME: \"Astro Nano\",\r\n  EMAIL: \"markhorn.dev@gmail.com\",\r\n  NUM_POSTS_ON_HOMEPAGE: 3,\r\n  NUM_WORKS_ON_HOMEPAGE: 2,\r\n  NUM_PROJECTS_ON_HOMEPAGE: 3,\r\n};\r\n```\r\n\r\n| Field | Req | Description |\r\n| :---- | :-- | :-----------|\r\n| NAME | Yes | Displayed in header and footer. Used in SEO and RSS. |\r\n| EMAIL | Yes | Displayed in contact section. |\r\n| NUM_POSTS | Yes | Limit num of posts on home page. |\r\n| NUM_WORKS | Yes | Limit num of works on home page. |\r\n| NUM_PROJECTS | Yes | Limit num of projects on home page. |\r\n\r\nCustomize your page metadata\r\n\r\n```ts \r\n// src/consts.ts\r\n\r\nexport const HOME: Metadata = {\r\n  TITLE: \"Home\",\r\n  DESCRIPTION: \"Astro Nano is a minimal and lightweight blog and portfolio.\",\r\n};\r\n```\r\n\r\n| Field | Req | Description |\r\n| :---- | :-- | :-----------|\r\n| TITLE | Yes | Displayed in browser tab. Used in SEO and RSS. |\r\n| DESCRIPTION | Yes | Used in SEO and RSS. |\r\n\r\nCustomize your social media\r\n\r\n```ts \r\n// src/consts.ts\r\n\r\nexport const SOCIALS: Socials = [\r\n  { \r\n    NAME: \"twitter-x\",\r\n    HREF: \"https://twitter.com/markhorn_dev\",\r\n  },\r\n  { \r\n    NAME: \"github\",\r\n    HREF: \"https://github.com/markhorn-dev\"\r\n  },\r\n  { \r\n    NAME: \"linkedin\",\r\n    HREF: \"https://www.linkedin.com/in/markhorn-dev\",\r\n  }\r\n];\r\n```\r\n\r\n| Field | Req | Description |\r\n| :---- | :-- | :-----------|\r\n| NAME | Yes | Displayed in contact section as a link. |\r\n| HREF | Yes | External url to social media profile. |";
						const data = {title:"Getting started",description:"Hit the ground running.",date:new Date(1711065600000)};
						const _internal = {
							type: 'content',
							filePath: "C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/content/blog/01-getting-started/index.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
