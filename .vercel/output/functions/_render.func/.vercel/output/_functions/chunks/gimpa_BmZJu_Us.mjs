import { m as createComponent, n as renderTemplate, p as maybeRenderHead, z as unescapeHTML } from './astro/server_D9ztAZ7o.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Developed and delivered undergraduate and postgraduate courses in computer science, focusing on software engineering, artificial intelligence, and IT infrastructure. Mentored students in their academic and professional growth, and conducted research in AI applications.</p>";

				const frontmatter = {"company":"GIMPA","role":"Lecturer, Computer Science","dateStart":"08/01/2020","dateEnd":"Current"};
				const file = "C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/content/work/gimpa.md";
				const url = undefined;
				function rawContent() {
					return "\r\nDeveloped and delivered undergraduate and postgraduate courses in computer science, focusing on software engineering, artificial intelligence, and IT infrastructure. Mentored students in their academic and professional growth, and conducted research in AI applications.\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
