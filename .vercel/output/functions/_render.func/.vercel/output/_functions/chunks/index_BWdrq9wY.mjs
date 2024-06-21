import { m as createComponent, n as renderTemplate, p as maybeRenderHead, z as unescapeHTML } from './astro/server_D9ztAZ7o.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><img src=\"/web.png\" alt=\"Educational Website\"></p>\n<p>Created a comprehensive WordPress website for an educational institution, featuring an intuitive user interface, easy navigation, and seamless integration with the institution’s existing systems.</p>\n<h2 id=\"-features\">📋 Features</h2>\n<ul>\n<li>✅ Responsive design</li>\n<li>✅ User-friendly interface</li>\n<li>✅ Integration with learning management systems</li>\n<li>✅ Secure and scalable</li>\n<li>✅ Customizable content management</li>\n</ul>\n<h2 id=\"️-impact\">🏛️ Impact</h2>\n<p>The website has enhanced the institution’s online presence, making it easier for students, parents, and staff to access important information and resources.</p>";

				const frontmatter = {"title":"Website Development for Educational Institution","description":"Developed a responsive and user-friendly website for an educational institution.","date":"Mar 01 2022","demoURL":"https://gcpharm.edu.gh/","repoURL":"https://gcpharm.edu.gh/"};
				const file = "C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/content/projects/project-4/index.md";
				const url = undefined;
				function rawContent() {
					return "\r\n![Educational Website](/web.png)\r\n\r\nCreated a comprehensive WordPress website for an educational institution, featuring an intuitive user interface, easy navigation, and seamless integration with the institution's existing systems.\r\n\r\n## 📋 Features\r\n\r\n- ✅ Responsive design\r\n- ✅ User-friendly interface\r\n- ✅ Integration with learning management systems\r\n- ✅ Secure and scalable\r\n- ✅ Customizable content management\r\n\r\n## 🏛️ Impact\r\n\r\nThe website has enhanced the institution's online presence, making it easier for students, parents, and staff to access important information and resources.\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"-features","text":"📋 Features"},{"depth":2,"slug":"️-impact","text":"🏛️ Impact"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
