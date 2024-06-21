const id = "05-markdown-syntax/index.md";
						const collection = "blog";
						const slug = "05-markdown-syntax";
						const body = "\r\n---\r\n\r\n### Headings\r\n\r\nTo create headings, use hash symbols (#) followed by a space. The number of hash symbols indicates the heading level.\r\n\r\n```md\r\n# Heading 1\r\n## Heading 2\r\n### Heading 3\r\n#### Heading 4\r\n##### Heading 5\r\n###### Heading 6\r\n```\r\n\r\n<h1>Heading 1</h1>\r\n<h2>Heading 2</h2>\r\n<h3>Heading 3</h3>\r\n<h4>Heading 4</h4>\r\n<h5>Heading 5</h5>\r\n<h6>Heading 6</h6>\r\n\r\n---\r\n\r\n### Paragraphs\r\n\r\nSimply type non-indented text, surrounded by empty lines.\r\n\r\n```md\r\n<!-- empty line -->\r\nI really like using Markdown.\r\n<!-- empty line -->\r\nI think I'll use it to format all of my content from now on.\r\n<!-- empty line -->\r\n```\r\n\r\nI really like using Markdown.\r\n\r\nI think I'll use it to format all of my content from now on.\r\n\r\n---\r\n\r\n### Bold\r\n\r\nUse double `*` or `_` to denote bold text.\r\n\r\n```md\r\nit was the **best** of times, \r\nit was the __worst__ of times\r\n```\r\nIt was the **best** of times,<br/>\r\nit was the __worst__ of times\r\n\r\n---\r\n\r\n### Italic\r\n\r\nUse single `*` to denote italic text.\r\n\r\n```md\r\nit was the age of *wisdom*, \r\nit was the age of *foolishness*\r\n```\r\nit was the age of *wisdom*,<br/>\r\nit was the age of *foolishness*\r\n\r\n---\r\n\r\n### Bold and Italic\r\n\r\nUse `*`, `**` and `_` to combine effects.\r\n\r\n```md\r\nit was the season of ***light***, \r\nit was the season of *__darkness__*\r\n```\r\nit was the season of ***light***,<br/> \r\nit was the season of *__darkness__*\r\n\r\n---\r\n\r\n### Line breaks\r\n\r\nUse triple `---` to denote a line break.\r\n\r\n```md\r\n<!-- empty line -->\r\n---\r\n<!-- empty line -->\r\n```\r\n\r\n---\r\n\r\n### Links\r\n\r\nLinks can be added using the `[title](url)` pattern.\r\n\r\n```md\r\nNano was made with [Astro](https://astro.build)\r\n```\r\n\r\nNano was made with [Astro](https://astro.build)\r\n\r\n---\r\n\r\n### Quick link\r\n\r\nAdd an quick link using the `<url>` pattern.\r\n\r\n```md\r\n<http://www.example.com>\r\n```\r\n\r\n<http://www.example.com>\r\n\r\n---\r\n\r\n### Email link\r\n\r\nAdd an email link using the `<emailaddress>` pattern.\r\n\r\n```md\r\nEmail me at <markhorn.dev@gmail.com> using your mail app.\r\n```\r\n\r\nEmail me at <markhorn.dev@gmail.com> using your mail app.\r\n\r\n---\r\n\r\n### Ordered Lists\r\n\r\nAdd a number followed by a period for items. For sub items, indent.\r\n\r\n```md\r\n1. Item 1\r\n2. Item 2\r\n    1. Sub item 1\r\n    2. Sub item 2\r\n3. Item 3\r\n```\r\n\r\n1. Item 1\r\n2. Item 2\r\n    1. Sub item 1\r\n    2. Sub item 2\r\n3. Item 3\r\n\r\n---\r\n\r\n### Unordered List\r\n\r\nAdd a `-` or `+` for items. Don't mix. For sub items, indent.\r\n\r\n```md\r\n- Item 1\r\n- Item 2\r\n    - Sub item 1\r\n    - Sub item 2\r\n- Item 3\r\n```\r\n\r\n- Item 1\r\n- Item 2\r\n    - Sub item 1\r\n    - Sub item 2\r\n- Item 3\r\n\r\n---\r\n\r\n### Relative Image\r\n\r\nUse the `![title](./image.*)` pattern relative to the same folder as the markdown file. Notice the period.\r\n\r\n```md\r\n![Square Pants](./spongebob.webp)\r\n```\r\n\r\n![Square Pants](./spongebob.webp)\r\n\r\n---\r\n\r\n### Public Image\r\n\r\nUse the `![title](/image.*)` pattern relative to the public folder. No period.\r\n\r\n```md\r\n![Patrick Starfish](/patrick.webp)\r\n```\r\n\r\n![Patrick Starfish](/patrick.webp)\r\n\r\n---\r\n\r\n### External Image\r\n\r\nUse the `![title](url)` pattern.\r\n\r\n```md\r\n![Mr. Krabs](https://upload.wikimedia.org/wikipedia/en/thumb/f/f8/Mr._Krabs.svg/440px-Mr._Krabs.svg.png)\r\n```\r\n\r\n![Mr. Krabs](https://upload.wikimedia.org/wikipedia/en/thumb/f/f8/Mr._Krabs.svg/440px-Mr._Krabs.svg.png)\r\n\r\n---\r\n\r\n### Blockquotes\r\n\r\nTo add a blockquote add a `>` before a paragraph. For multi-line blockquotes,\r\nadd additional `>` for each line and include an empty spacer line.\r\n\r\n```md\r\n> it was the spring of hope, it was the winter of despair.\r\n>\r\n> Charles Dickens\r\n```\r\n\r\n> it was the spring of hope, it was the winter of despair.\r\n>\r\n> ~ Charles Dickens\r\n\r\n---\r\n\r\n### Strikethrough\r\n\r\nUse the tilde `~` symbol to strikethrough text.\r\n\r\n```md\r\n~The earth is round.~ The earth is flat.\r\n```\r\n\r\n~The earth is round.~ The earth is flat.\r\n\r\n---\r\n\r\n### Subscript\r\n\r\nUse the `<sub>` tag to denote subscript.\r\n\r\n```md\r\nH<sub>2</sub>O\r\n```\r\n\r\nH<sub>2</sub>O\r\n\r\n---\r\n\r\n### Superscript\r\n\r\nUse the `<sup>` tag to denote superscript.\r\n\r\n```md\r\nE=mc<sup>2</sup>\r\n```\r\n\r\nE=mc<sup>2</sup>\r\n\r\n---\r\n\r\n### Keyboard\r\n\r\nUse the `<kbd>` tag to denote keys on the keyboard.\r\n\r\n```md\r\n<kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>Delete</kbd>\r\n```\r\n\r\n<kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>Delete</kbd>\r\n\r\n---\r\n\r\n### Abbreviate\r\n\r\nUse the `<abbr>` tag to denote abbreviation.\r\n\r\n```md\r\n<abbr title=\"Graphics Interchange Format\">GIF</abbr>\r\n```\r\n\r\n<abbr title=\"Graphics Interchange Format\">GIF</abbr>\r\n\r\n---\r\n\r\n### Highlight\r\n\r\nUse the `<mark>` tag to denote highlighted text.\r\n\r\n```md\r\n<mark>Very important text</mark>\r\n```\r\n\r\n<mark>Very important text</mark>\r\n\r\n---\r\n\r\n### Task Lists\r\n\r\nCombine a list with 2 square brackets. `spc` incomplete `x` complete.\r\n\r\n```md\r\n- [x] Take out trash\r\n- [ ] Mow the lawn\r\n- [ ] Buy more bitcoin\r\n```\r\n\r\n- [x] Take out trash\r\n- [ ] Mow the lawn\r\n- [ ] Buy more bitcoin\r\n\r\n---\r\n\r\n### Tables\r\n\r\nUse `-` for header, `|` for columns, `:` for alignment.\r\n\r\n```md\r\n| Item    | Ct  |\r\n| :------ | --: |\r\n| Bread   | 1   |\r\n| Milk    | 1   |\r\n| Haribo  | 10  |\r\n```\r\n\r\n| Item    | Buy |\r\n| :------ | --: |\r\n| Bread   | 1   |\r\n| Milk    | 1   |\r\n| Haribo  | 10  |\r\n\r\n---\r\n\r\n### Footnotes\r\n\r\nAdd a caret and an id inside brackets `[^1]` to create a footnote.\r\n\r\n```md\r\nHere's a simple footnote, [^1] and here's a another one. [^2]\r\n[^1]: This is the first footnote.\r\n[^2]: This is the second footnote.\r\n```\r\n\r\nHere's a simple footnote, [^1] and here's a another one. [^2]\r\n[^1]: This is the first footnote.\r\n[^2]: This is the second footnote.\r\n\r\nSee the bottom of the page to view the footnotes.\r\n\r\n---\r\n\r\n### Code\r\n\r\nUse backticks ` to denote a word or phrase as code.\r\n\r\n```md\r\n`package.json`\r\n```\r\n\r\n`package.json`\r\n\r\n---\r\n\r\n### Code Blocks\r\n\r\nDenote a code block by enclosing a section of valid code in triple backticks. Syntax highlight the code by using the shorthand symbol for the language. Ex: js, javascript, python\r\n\r\n````\r\n```js\r\n  function hello() {\r\n    console.log(\"hello world\");\r\n  }\r\n```\r\n````\r\n\r\n```js\r\n  function hello() {\r\n    console.log(\"hello world\");\r\n  }\r\n```\r\n\r\n---\r\n\r\n### Conclusion\r\n\r\nPlease refer to markdownguide.org for best practices as well as advanced and extended syntax.\r\n\r\nhttps://www.markdownguide.org/basic-syntax\r\nhttps://www.markdownguide.org/extended-syntax/\r\n\r\n---\r\n\r\n\r\n\r\n";
						const data = {title:"Markdown syntax guide",description:"Get started writing content in markdown.",date:new Date(1710633600000)};
						const _internal = {
							type: 'content',
							filePath: "C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/content/blog/05-markdown-syntax/index.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
