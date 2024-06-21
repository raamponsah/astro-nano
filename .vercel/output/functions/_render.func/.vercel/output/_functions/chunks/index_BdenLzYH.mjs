import { m as createComponent, n as renderTemplate, p as maybeRenderHead, z as unescapeHTML } from './astro/server_D9ztAZ7o.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><img src=\"/confapp.png\" alt=\"Conference Management App\"></p>\n<p>Developed an application to streamline the management and organization of conferences and events. The app includes features for registration, scheduling, speaker management, and attendee engagement.</p>\n<h2 id=\"-features\">📋 Features</h2>\n<ul>\n<li>✅ User-friendly interface</li>\n<li>✅ Real-time updates and notifications</li>\n<li>✅ Comprehensive event scheduling</li>\n<li>✅ Speaker and attendee management</li>\n<li>✅ Integrated feedback system</li>\n<li>✅ Secure and scalable</li>\n</ul>\n<h2 id=\"️-impact\">🏛️ Impact</h2>\n<p>The app has been used to manage several large-scale conferences, improving efficiency and enhancing the experience for both organizers and attendees.</p>\n<hr>";

				const frontmatter = {"title":"Conference Management App","description":"App for managing and organizing conferences and events.","date":"Feb 01 2022","demoURL":"https://www.gcpharmpublishing.com/","repoURL":"https://www.gcpharmpublishing.com/"};
				const file = "C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/content/projects/project-2/index.md";
				const url = undefined;
				function rawContent() {
					return "\r\n![Conference Management App](/confapp.png)\r\n\r\nDeveloped an application to streamline the management and organization of conferences and events. The app includes features for registration, scheduling, speaker management, and attendee engagement.\r\n\r\n## 📋 Features\r\n\r\n- ✅ User-friendly interface\r\n- ✅ Real-time updates and notifications\r\n- ✅ Comprehensive event scheduling\r\n- ✅ Speaker and attendee management\r\n- ✅ Integrated feedback system\r\n- ✅ Secure and scalable\r\n\r\n## 🏛️ Impact\r\n\r\nThe app has been used to manage several large-scale conferences, improving efficiency and enhancing the experience for both organizers and attendees.\r\n\r\n---";
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
