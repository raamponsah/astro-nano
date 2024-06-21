import { m as createComponent, n as renderTemplate, p as maybeRenderHead, z as unescapeHTML } from './astro/server_D9ztAZ7o.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Managed IT operations and infrastructure, overseeing the deployment of IT equipment and systems. Ensured optimal performance and security of IT assets, and provided technical support to enhance organizational efficiency.</p>";

				const frontmatter = {"company":"Sompa Ghana","role":"IT Manager","dateStart":"01/15/2012","dateEnd":"02/28/2017"};
				const file = "C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/content/work/sompa.md";
				const url = undefined;
				function rawContent() {
					return "\r\nManaged IT operations and infrastructure, overseeing the deployment of IT equipment and systems. Ensured optimal performance and security of IT assets, and provided technical support to enhance organizational efficiency.\r\n";
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
