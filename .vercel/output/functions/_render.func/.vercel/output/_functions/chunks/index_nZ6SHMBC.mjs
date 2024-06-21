const id = "02-blog-collection/index.md";
						const collection = "blog";
						const slug = "02-blog-collection";
						const body = "\r\nThe `blog` collections is found in `src/content/blog`.\r\n\r\nWorking with the `blog` collection:\r\n\r\n```\r\n📁 /src/content/blog\r\n└── 📁 post-1\r\n      └── 📄 index.md\r\n└── 📁 post-2\r\n      └── 📄 index.mdx\r\n```\r\n\r\nIn the above example, two static pages will be generated, based on the existence of a classic markdown `.md` file or a jsx compatible markdown `.mdx` file. The folder name represents the slug:\r\n\r\n- `https://example.com/blog/post-1`\r\n- `https://example.com/blog/post-2`\r\n\r\n\r\nAll content must be preceded by required metadata in the markdown file in `yaml` format, and be enclosed by triple dashes. --- ---\r\n\r\n```mdx\r\n---\r\ntitle: \"My cool new title\"\r\ndescription: \"A description of my content.\"\r\ndate: \"Mar 22 2024\"\r\ndraft: false\r\n---\r\n```\r\n\r\nMetadata fields\r\n\r\n| Field       | Req | Type    | Remarks                                          |\r\n| :---------- | :-- | :------ | :----------------------------------------------- |\r\n| title       | Yes | string  | Title of the content. Used in SEO and RSS.       |\r\n| description | Yes | string  | Description of the content. Used in SEO and RSS. |\r\n| date        | Yes | string  | Must be a valid date string (able to be parsed). |\r\n| draft       | No* | boolean | draft: true, content will not be published.      |\r\n\r\nAll that's left to do is write your content under the metadata.\r\n\r\n```mdx\r\n---\r\ntitle: \"My cool new title\"\r\ndescription: \"A description of my content.\"\r\ndate: \"Mar 22 2024\"\r\ndraft: false\r\n---\r\n\r\n### Woot\r\n\r\nThis is a paragraph.\r\n```\r\n\r\n🎉 Congrats, you are now a blogger.";
						const data = {title:"Blog Collection",description:"How to add posts to your blog.",date:new Date(1710979200000)};
						const _internal = {
							type: 'content',
							filePath: "C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/content/blog/02-blog-collection/index.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
