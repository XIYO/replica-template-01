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
                "text": "개요",
                "items": [
                      {
                            "text": "인공지능이란 무엇인가?",
                            "link": "/overview/what-is-ai"
                      },
                      {
                            "text": "인공지능의 사회적 영향",
                            "link": "/overview/ai-impact"
                      },
                      {
                            "text": "인공지능의 미래 동향",
                            "link": "/overview/future-trends"
                      }
                ]
          },
          {
                "text": "응용 분야",
                "items": [
                      {
                            "text": "인공지능과 헬스케어",
                            "link": "/applications/ai-healthcare"
                      },
                      {
                            "text": "인공지능과 금융",
                            "link": "/applications/ai-finance"
                      },
                      {
                            "text": "인공지능과 제조업",
                            "link": "/applications/ai-manufacturing"
                      }
                ]
          }
    ]
  }
})
