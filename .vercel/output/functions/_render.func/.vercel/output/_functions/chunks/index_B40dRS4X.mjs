import { m as createComponent, n as renderTemplate, p as maybeRenderHead, z as unescapeHTML } from './astro/server_D9ztAZ7o.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><img src=\"/online-app.png\" alt=\"Online Evaluation Platform\"></p>\n<p>Developed an online platform to conduct evaluations and assessments. This platform is designed to facilitate efficient and accurate evaluations with robust data analytics and reporting features.</p>\n<h2 id=\"-features\">📋 Features</h2>\n<ul>\n<li>✅ Secure and reliable</li>\n<li>✅ User-friendly interface</li>\n<li>✅ Real-time data processing</li>\n<li>✅ Detailed analytics and reporting</li>\n<li>✅ Customizable evaluation criteria</li>\n<li>✅ Integration with other systems</li>\n</ul>\n<h2 id=\"️-impact\">🏛️ Impact</h2>\n<p>The platform has been adopted by various educational institutions and organizations, improving the efficiency and accuracy of their evaluation processes.</p>";

				const frontmatter = {"title":"Online Evaluation Platform","description":"Platform for conducting online evaluations and assessments.","date":"Jun 01 2021","demoURL":"","repoURL":"https://github.com/raphaelamponsah/headway"};
				const file = "C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/content/projects/project-3/index.md";
				const url = undefined;
				function rawContent() {
					return "\r\n![Online Evaluation Platform](/online-app.png)\r\n\r\nDeveloped an online platform to conduct evaluations and assessments. This platform is designed to facilitate efficient and accurate evaluations with robust data analytics and reporting features.\r\n\r\n## 📋 Features\r\n\r\n- ✅ Secure and reliable\r\n- ✅ User-friendly interface\r\n- ✅ Real-time data processing\r\n- ✅ Detailed analytics and reporting\r\n- ✅ Customizable evaluation criteria\r\n- ✅ Integration with other systems\r\n\r\n## 🏛️ Impact\r\n\r\nThe platform has been adopted by various educational institutions and organizations, improving the efficiency and accuracy of their evaluation processes.";
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
