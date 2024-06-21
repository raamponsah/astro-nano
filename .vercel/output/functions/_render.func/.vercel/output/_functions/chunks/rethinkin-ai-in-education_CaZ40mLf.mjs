import { m as createComponent, n as renderTemplate, p as maybeRenderHead, z as unescapeHTML } from './astro/server_D9ztAZ7o.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>2023\r\n<a href=\"https://scholar.google.com/citations?view_op=view_citation&#x26;hl=en&#x26;user=3kKieCkAAAAJ&#x26;citation_for_view=3kKieCkAAAAJ:Tyk-4Ss8FVUC\"><strong>COVID-19 pandemic: how can the lessons learnt contribute to the digital transformation of schools of tomorrow?</strong>\r\n<em>EA Kolog, SB Egala, R Amponsah, SNO Devine, E Sutinen\r\nInternational Journal of Technology Enhanced Learning 14 (2), 142-16</em></a></p>\n<p>2022\r\n<a href=\"https://scholar.google.com/citations?view_op=view_citation&#x26;hl=en&#x26;user=3kKieCkAAAAJ&#x26;citation_for_view=3kKieCkAAAAJ:eQOLeE2rZwMC\"><strong>Rethinking the implementation of artificial intelligence for a sustainable education in Africa: Challenges and solutions</strong>\r\n<em>EA Kolog, SNO Devine, SB Egala, R Amponsah, J Budu, T Farinloye\r\nManagement and Information Technology in the Digital Era 29, 27-46</em></a></p>\n<p>2022\r\n<a href=\"https://scholar.google.com/citations?view_op=view_citation&#x26;hl=en&#x26;user=3kKieCkAAAAJ&#x26;citation_for_view=3kKieCkAAAAJ:WF5omc3nYNoC\"><strong>Meta-Intelligence: Unintended Consequences of AI in Education</strong>\r\n<em>R Amponsah, E Afful-Dadzie, EA Kolog, R Boateng</em></a></p>";

				const frontmatter = {"company":"AI Research in Education","role":"AI research ","dateStart":"01/01/2015"};
				const file = "C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/content/research/rethinkin-ai-in-education.md";
				const url = undefined;
				function rawContent() {
					return "\r\n2023\r\n[**COVID-19 pandemic: how can the lessons learnt contribute to the digital transformation of schools of tomorrow?**\r\n_EA Kolog, SB Egala, R Amponsah, SNO Devine, E Sutinen\r\nInternational Journal of Technology Enhanced Learning 14 (2), 142-16_](https://scholar.google.com/citations?view_op=view_citation&hl=en&user=3kKieCkAAAAJ&citation_for_view=3kKieCkAAAAJ:Tyk-4Ss8FVUC)\r\n\r\n2022\r\n[**Rethinking the implementation of artificial intelligence for a sustainable education in Africa: Challenges and solutions**\r\n_EA Kolog, SNO Devine, SB Egala, R Amponsah, J Budu, T Farinloye\r\nManagement and Information Technology in the Digital Era 29, 27-46_](https://scholar.google.com/citations?view_op=view_citation&hl=en&user=3kKieCkAAAAJ&citation_for_view=3kKieCkAAAAJ:eQOLeE2rZwMC)\r\n\r\n\r\n2022\r\n[**Meta-Intelligence: Unintended Consequences of AI in Education**\r\n_R Amponsah, E Afful-Dadzie, EA Kolog, R Boateng_](https://scholar.google.com/citations?view_op=view_citation&hl=en&user=3kKieCkAAAAJ&citation_for_view=3kKieCkAAAAJ:WF5omc3nYNoC)\r\n\r\n\r\n";
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
