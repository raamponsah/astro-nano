/* empty css                          */
import { m as createComponent, n as renderTemplate, o as renderComponent, p as maybeRenderHead } from './astro/server_D9ztAZ7o.mjs';
import 'kleur/colors';
import { g as getCollection, S as SITE, a as SOCIALS, H as HOME } from './consts_DwQO56bl.mjs';
import { $ as $$Container, b as $$Link, d as dateRange, a as $$PageLayout } from './PageLayout_DqHW9gxe.mjs';
import { $ as $$ArrowCard } from './ArrowCard_BPhz5wmW.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  (await getCollection("blog")).filter((post) => !post.data.draft).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf()).slice(0, SITE.NUM_POSTS_ON_HOMEPAGE);
  const projects = (await getCollection("projects")).filter((project) => !project.data.draft).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf()).slice(0, SITE.NUM_PROJECTS_ON_HOMEPAGE);
  const allwork = (await getCollection("work")).sort((a, b) => new Date(b.data.dateStart).valueOf() - new Date(a.data.dateStart).valueOf()).slice(0, SITE.NUM_WORKS_ON_HOMEPAGE);
  const work = await Promise.all(
    allwork.map(async (item) => {
      const { Content } = await item.render();
      return { ...item, Content };
    })
  );
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": HOME.TITLE, "description": HOME.DESCRIPTION }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<img src="/me.jpg" class="mb-10 rounded"> <h4 class="animate font-semibold text-black dark:text-white">
Hi, I'm Ralph <span class="text-xl">👋🏻</span> </h4> <div class="space-y-16"> <section> <article class="space-y-4"> <p class="animate">
I am Raphael Amponsah, an accomplished Information Systems Expert and Senior Software Engineer specializing in AI and software engineering. With over 13 years of experience, I deliver cutting-edge solutions for corporate clients, excelling in IT infrastructure development, application support, and security optimization.
</p> <p class="animate">
I bring a wealth of knowledge and technical expertise, including proficiency in Python, JavaScript, Docker, Kubernetes, and enterprise AI development. My work is driven by a passion for innovation and effective collaboration, consistently achieving project goals and enhancing organizational performance.
</p> <p class="animate">
My professional journey includes roles such as Lecturer at GIMPA, where I develop AI research and mentor future IT professionals, and Software Engineer at Skyfusion, where I create robust, cloud-based applications. Explore my portfolio and learn more about my projects and publications on my personal website.
</p> <p class="animate">
Visit
${renderComponent($$result3, "Link", $$Link, { "href": "https://raphaelamponsah.com/projects", "aria-label": "Raphael Amponsah's Portfolio", "external": true }, { "default": ($$result4) => renderTemplate`
Raphael Amponsah's Portfolio
` })}
to view my work, read my ${renderComponent($$result3, "Link", $$Link, { "href": "https://raphaelamponsah.com/blog" }, { "default": ($$result4) => renderTemplate`latest articles` })}, or connect with me for potential collaborations. You can also check out my GitHub profile for code samples and project repositories.
</p> </article> </section> <!-- <img src="/ad1.gif" class="block py-2" /> --> <!-- <section class="animate space-y-6">
        <div class="flex flex-wrap gap-y-2 items-center justify-between">
          <h5 class="font-semibold text-black dark:text-white">
            Latest posts
          </h5>
          <Link href="/blog">
            See all posts
          </Link>
        </div>
        <ul class="flex flex-col gap-4">
          {blog.map(post => (
            <li>
              <ArrowCard entry={post} />
            </li>
          ))}
        </ul>
      </section> --> <section class="animate space-y-6"> <div class="flex flex-wrap gap-y-2 items-center justify-between"> <h5 class="font-semibold text-black dark:text-white">
Work Experience
</h5> ${renderComponent($$result3, "Link", $$Link, { "href": "/work" }, { "default": ($$result4) => renderTemplate`
See all work
` })} </div> <ul class="flex flex-col space-y-4"> ${work.map((entry) => renderTemplate`<li> <div class="text-sm opacity-75"> ${dateRange(entry.data.dateStart, entry.data.dateEnd)} </div> <div class="font-semibold text-black dark:text-white"> ${entry.data.company} </div> <div class="text-sm opacity-75"> ${entry.data.role} </div> <article> ${renderComponent($$result3, "entry.Content", entry.Content, {})} </article> </li>`)} </ul> </section> <section class="animate space-y-6"> <div class="flex flex-wrap gap-y-2 items-center justify-between"> <h5 class="font-semibold text-black dark:text-white">
Recent projects
</h5> ${renderComponent($$result3, "Link", $$Link, { "href": "/projects" }, { "default": ($$result4) => renderTemplate`
See all projects
` })} </div> <ul class="flex flex-col gap-4"> ${projects.map((project) => renderTemplate`<li> ${renderComponent($$result3, "ArrowCard", $$ArrowCard, { "entry": project })} </li>`)} </ul> </section> <section class="animate space-y-4"> <h5 class="font-semibold text-black dark:text-white">
Let's Connect
</h5> <article> <p>
If you want to get in touch with me about something or just to say hi,
            reach out on social media or send me an email.
</p> </article> <ul class="flex flex-wrap gap-2"> ${SOCIALS.map((SOCIAL) => renderTemplate`<li class="flex gap-x-2 text-nowrap"> ${renderComponent($$result3, "Link", $$Link, { "href": SOCIAL.HREF, "external": true, "aria-label": `${SITE.NAME} on ${SOCIAL.NAME}` }, { "default": ($$result4) => renderTemplate`${SOCIAL.NAME}` })} ${"/"} </li>`)} <li class="line-clamp-1"> ${renderComponent($$result3, "Link", $$Link, { "href": `mailto:${SITE.EMAIL}`, "aria-label": `Email ${SITE.NAME}` }, { "default": ($$result4) => renderTemplate`${SITE.EMAIL}` })} </li> </ul> </section> </div> ` })} ` })}`;
}, "C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/pages/index.astro", void 0);

const $$file = "C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
