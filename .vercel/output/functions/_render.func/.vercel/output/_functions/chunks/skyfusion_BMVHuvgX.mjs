import { m as createComponent, n as renderTemplate, p as maybeRenderHead, z as unescapeHTML } from './astro/server_D9ztAZ7o.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Led the development of cloud-based applications and real-time polling systems. Collaborated with cross-functional teams to design and implement innovative software solutions, ensuring high performance and scalability.</p>";

				const frontmatter = {"company":"Skyfusion","role":"Senior Software Engineer","dateStart":"03/01/2017","dateEnd":"07/31/2020"};
				const file = "C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/content/work/skyfusion.md";
				const url = undefined;
				function rawContent() {
					return "\r\nLed the development of cloud-based applications and real-time polling systems. Collaborated with cross-functional teams to design and implement innovative software solutions, ensuring high performance and scalability.\r\n";
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
