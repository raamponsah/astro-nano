import { m as createComponent, n as renderTemplate, p as maybeRenderHead, z as unescapeHTML } from './astro/server_D9ztAZ7o.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><img src=\"/learning-laughing.jpg\" alt=\"Youth Coding Classes\"></p>\n<p>I organize and conduct annual community coding classes for youth, aimed at empowering young individuals with essential programming skills. These classes are designed to inspire and educate the next generation of tech professionals, providing them with hands-on experience and mentorship.</p>\n<h2 id=\"-impact\">🚀 Impact</h2>\n<ul>\n<li>Over 200 young participants trained since inception</li>\n<li>Participants have gone on to pursue careers in technology and related fields</li>\n<li>Fostered a community of young programmers who continue to learn and grow together</li>\n</ul>\n<h2 id=\"-features\">📋 Features</h2>\n<ul>\n<li>✅ Free and accessible to all participants</li>\n<li>✅ Hands-on coding sessions</li>\n<li>✅ Mentorship from experienced professionals</li>\n<li>✅ Exposure to real-world projects</li>\n<li>✅ Focus on practical skills and problem-solving</li>\n</ul>\n<h2 id=\"️-community-feedback\">🏛️ Community Feedback</h2>\n<p><img src=\"/laughing.jpg\" alt=\"Community\">\r\nParticipants have praised the program for its practical approach and the opportunity to learn from industry professionals. The classes have been a stepping stone for many into the world of technology.</p>";

				const frontmatter = {"title":"Youth Coding Classes","description":"Annual free coding classes for youth.","date":"Jan 13 2023","demoURL":"","repoURL":""};
				const file = "C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/content/projects/project-1/index.md";
				const url = undefined;
				function rawContent() {
					return "\r\n![Youth Coding Classes](/learning-laughing.jpg)\r\n\r\nI organize and conduct annual community coding classes for youth, aimed at empowering young individuals with essential programming skills. These classes are designed to inspire and educate the next generation of tech professionals, providing them with hands-on experience and mentorship.\r\n\r\n## 🚀 Impact\r\n\r\n- Over 200 young participants trained since inception\r\n- Participants have gone on to pursue careers in technology and related fields\r\n- Fostered a community of young programmers who continue to learn and grow together\r\n\r\n## 📋 Features\r\n\r\n- ✅ Free and accessible to all participants\r\n- ✅ Hands-on coding sessions\r\n- ✅ Mentorship from experienced professionals\r\n- ✅ Exposure to real-world projects\r\n- ✅ Focus on practical skills and problem-solving\r\n\r\n## 🏛️ Community Feedback\r\n\r\n![Community](/laughing.jpg)\r\nParticipants have praised the program for its practical approach and the opportunity to learn from industry professionals. The classes have been a stepping stone for many into the world of technology.\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"-impact","text":"🚀 Impact"},{"depth":2,"slug":"-features","text":"📋 Features"},{"depth":2,"slug":"️-community-feedback","text":"🏛️ Community Feedback"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
