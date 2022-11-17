import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import react from '@astrojs/react'
import image from '@astrojs/image'
import tailwind from '@astrojs/tailwind'
import addClasses from 'rehype-add-classes'

export default defineConfig({
  site: 'https://md.techtrafin.com',
  integrations: [sitemap(), react(), image(), tailwind()],
  markdown: {
    extendDefaultPlugins: true,
    rehypePlugins: [
      [
        addClasses,
        {
          h1: 'text-4xl font-bold font-montserrat',
          h2: 'text-2xl font-bold font-montserrat',
          h3: 'text-xl font-bold font-montserrat',
          h4: 'text-lg font-bold font-montserrat',
          h5: 'font-bold font-montserrat',
          h6: 'font-bold font-montserrat',
          img: 'border border-slate-300 dark:border-zinc-700 rounded-xl mb-6',
          p: 'mb-6',
          a: 'underline underline-offset-2 hover:text-orange-500 decoration-orange-500'
        }
      ]
    ]
  }
})
