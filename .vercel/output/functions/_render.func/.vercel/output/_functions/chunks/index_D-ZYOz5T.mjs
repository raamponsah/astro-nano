/* empty css                          */
import { m as createComponent, n as renderTemplate, o as renderComponent, p as maybeRenderHead } from './astro/server_D9ztAZ7o.mjs';
import 'kleur/colors';
import { g as getCollection, W as WORK } from './consts_DwQO56bl.mjs';
import { $ as $$Container, d as dateRange, a as $$PageLayout } from './PageLayout_DqHW9gxe.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const collection = (await getCollection("work")).sort((a, b) => new Date(b.data.dateStart).valueOf() - new Date(a.data.dateStart).valueOf());
  const work = await Promise.all(
    collection.map(async (item) => {
      const { Content } = await item.render();
      return { ...item, Content };
    })
  );
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": WORK.TITLE, "description": WORK.DESCRIPTION }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="space-y-10"> <div class="animate font-semibold text-black dark:text-white">
Work
</div> <ul class="flex flex-col space-y-4"> ${work.map((entry) => renderTemplate`<li class="animate"> <div class="text-sm opacity-75"> ${dateRange(entry.data.dateStart, entry.data.dateEnd)} </div> <div class="font-semibold text-black dark:text-white"> ${entry.data.company} </div> <div class="text-sm opacity-75"> ${entry.data.role} </div> <article> ${renderComponent($$result3, "entry.Content", entry.Content, {})} </article> </li>`)} </ul> <!-- 
      <ul class="animate flex flex-col gap-4">

      </ul> --> </div> ` })} ` })}`;
}, "C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/pages/work/index.astro", void 0);

const $$file = "C:/Users/GATEWAY/DeveloperConsole/astro-nano/src/pages/work/index.astro";
const $$url = "/work";

export { $$Index as default, $$file as file, $$url as url };
