import { defineConfig } from 'vitepress'
import { readFileSync } from 'fs'

const siteConfig = JSON.parse(readFileSync('./site.config.json', 'utf-8'))
const siteUrl = `https://${siteConfig.subdomain}.xiyo.dev`

export default defineConfig({
  title: siteConfig.title,
  description: siteConfig.description,
  lang: siteConfig.locale,
  lastUpdated: siteConfig.lastUpdated,

  sitemap: {
    hostname: siteUrl
  },

  head: [
    ['style', {}, `
      :root {
        --vp-c-brand-1: ${siteConfig.accentColor};
        --vp-c-brand-2: ${siteConfig.accentColor}dd;
        --vp-c-brand-3: ${siteConfig.accentColor}bb;
      }
    `]
  ],

  themeConfig: {
    socialLinks: [
      { icon: 'github', link: `https://github.com/${siteConfig.githubRepo}` }
    ],

    sidebar: [
      {
        text: '가이드',
        items: [
          { text: '시작하기', link: '/guides/getting-started' }
        ]
      },
      {
        text: '레퍼런스',
        items: [
          { text: 'API', link: '/reference/api' }
        ]
      }
    ]
  }
})
