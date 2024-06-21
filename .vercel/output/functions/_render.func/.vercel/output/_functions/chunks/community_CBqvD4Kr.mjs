import { m as createComponent, n as renderTemplate, p as maybeRenderHead, z as unescapeHTML } from './astro/server_D9ztAZ7o.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Organize and conduct free annual coding classes for youth, aimed at empowering young individuals with essential programming skills. These classes are designed to inspire and educate the next generation of tech professionals, providing them with hands-on experience and mentorship.</p>";

				const frontmatter = {"company":"Community Service","role":"Organizer, Free Annual Coding Classes for Youth","dateStart":"01/01/2015","dateEnd":"Current"};
				const file = "C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/content/work/community.md";
				const url = undefined;
				function rawContent() {
					return "\r\nOrganize and conduct free annual coding classes for youth, aimed at empowering young individuals with essential programming skills. These classes are designed to inspire and educate the next generation of tech professionals, providing them with hands-on experience and mentorship.\r\n\r\n\r\n";
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
