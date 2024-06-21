import { m as createComponent, n as renderTemplate, p as maybeRenderHead, z as unescapeHTML } from './astro/server_D9ztAZ7o.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Provided expert IT consulting services, including system integration, network solutions, and IT strategy development. Worked with various clients to optimize their IT environments and drive business growth.</p>";

				const frontmatter = {"company":"Freelance","role":"IT Consultant","dateStart":"09/01/2009","dateEnd":"12/31/2011"};
				const file = "C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/content/work/freelance.md";
				const url = undefined;
				function rawContent() {
					return "\r\nProvided expert IT consulting services, including system integration, network solutions, and IT strategy development. Worked with various clients to optimize their IT environments and drive business growth.";
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
