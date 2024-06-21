const id = "04-work-collection/index.md";
						const collection = "blog";
						const slug = "04-work-collection";
						const body = "\r\nThe `work` collections is found in `src/content/work`.\r\n\r\nWorking with the `work` collection:\r\n\r\n```\r\n📁 /src/content/work\r\n└── 📄 apple.md\r\n└── 📄 facebook.md\r\n└── 📄 google.md\r\n└── 📄 mcdonalds.md\r\n```\r\n\r\nIn the above example, four entries on the /work page will be generated.\r\n\r\n`apple`, `facebook`, `google`, `mcdonalds`\r\n\r\nAll content must be preceded by required metadata in the markdown file in `yaml` format, and be enclosed by triple dashes. --- ---\r\n\r\n```mdx\r\n---\r\ncompany: \"McDonalds\"\r\nrole: \"French Fryer\"\r\ndateStart: \"01/01/2020\"\r\ndateEnd: \"11/27/2022\"\r\n---\r\n```\r\n\r\nMetadata fields\r\n\r\n| Field       | Req | Type    | Remarks                                          |\r\n| :---------- | :-- | :------ | :----------------------------------------------- |\r\n| company     | Yes | string  | Company name.                                    |\r\n| role        | Yes | string  | Role at the company. Ex: Full stack developer.   |\r\n| dateStart   | Yes | string  | Date string that can be parsed to a date.        |\r\n| dateEnd     | Yes | string  | Date string that can be parsed to a date.        |\r\n\r\n\\* _Note: If you are still employed at company, for dateEnd you can enter Current, \r\nNow or Present instead of a date._\r\n\r\nAll that's left to do is write your content under the metadata.\r\n\r\n```mdx\r\n---\r\ntitle: \"My awesome project\"\r\ndescription: \"A description of my project.\"\r\ndate: \"Mar 22 2024\"\r\ndraft: false\r\n---\r\n\r\n### Woot\r\n\r\nThis is a paragraph about my role at this company.\r\n```\r\n\r\n🎉 Congrats, you are now a blogger, _and_ developer, _and_ employed.";
						const data = {title:"Work Collection",description:"How to add work experience.",date:new Date(1710806400000)};
						const _internal = {
							type: 'content',
							filePath: "C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/content/blog/04-work-collection/index.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
