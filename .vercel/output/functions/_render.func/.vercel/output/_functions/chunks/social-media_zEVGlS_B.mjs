import { m as createComponent, n as renderTemplate, p as maybeRenderHead, z as unescapeHTML } from './astro/server_D9ztAZ7o.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>2023\r\n<a href=\"https://scholar.google.com/citations?view_op=view_citation&#x26;hl=en&#x26;user=3kKieCkAAAAJ&#x26;citation_for_view=3kKieCkAAAAJ:LkGwnXOMwfcC\"><strong>Digital Transformation of SMEs through social media</strong>\r\n<em>GE Otoo, R Amponsah, E Afful-Dadzie, EA Kolog, ACIST 2023</em></a></p>\n<p>2023\r\n<a href=\"https://scholar.google.com/citations?view_op=view_citation&#x26;hl=en&#x26;user=3kKieCkAAAAJ&#x26;citation_for_view=3kKieCkAAAAJ:_FxGoFyzp5QC\"><strong>Social Media &#x26; Privacy: Understanding Privacy in The Age of Content Creator Culture</strong>\r\n<em>R Tagoe, R Amponsah, EA Kolog, E Afful-Dadzie, ACIST 2023\r\nManagement and Information Technology in the Digital Era 29, 27-46</em></a></p>\n<p>2021\r\n<a href=\"https://scholar.google.com/citations?view_op=view_citation&#x26;hl=en&#x26;user=3kKieCkAAAAJ&#x26;citation_for_view=3kKieCkAAAAJ:zYLM7Y9cAGgC\"><strong>A semiotic study of lingua-culture of digital paralanguages.</strong>\r\n<em>R Amponsah, R Boateng, EA Kolog, AMCIS</em></a></p>\n<hr>\n<p><a href=\"https://scholar.google.com/citations?user=3kKieCkAAAAJ&#x26;hl=en\"><strong>Kindly visit my Google Scholar Profile for more</strong></a></p>";

				const frontmatter = {"company":"Social Media and Digital Transformation","role":"Social Media research "};
				const file = "C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/content/research/social-media.md";
				const url = undefined;
				function rawContent() {
					return "\r\n2023\r\n[**Digital Transformation of SMEs through social media**\r\n_GE Otoo, R Amponsah, E Afful-Dadzie, EA Kolog, ACIST 2023_](https://scholar.google.com/citations?view_op=view_citation&hl=en&user=3kKieCkAAAAJ&citation_for_view=3kKieCkAAAAJ:LkGwnXOMwfcC)\r\n\r\n2023\r\n[**Social Media & Privacy: Understanding Privacy in The Age of Content Creator Culture**\r\n_R Tagoe, R Amponsah, EA Kolog, E Afful-Dadzie, ACIST 2023\r\nManagement and Information Technology in the Digital Era 29, 27-46_](https://scholar.google.com/citations?view_op=view_citation&hl=en&user=3kKieCkAAAAJ&citation_for_view=3kKieCkAAAAJ:_FxGoFyzp5QC)\r\n\r\n\r\n2021\r\n[**A semiotic study of lingua-culture of digital paralanguages.**\r\n_R Amponsah, R Boateng, EA Kolog, AMCIS_](https://scholar.google.com/citations?view_op=view_citation&hl=en&user=3kKieCkAAAAJ&citation_for_view=3kKieCkAAAAJ:zYLM7Y9cAGgC)\r\n\r\n---\r\n[**Kindly visit my Google Scholar Profile for more**](https://scholar.google.com/citations?user=3kKieCkAAAAJ&hl=en)";
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
