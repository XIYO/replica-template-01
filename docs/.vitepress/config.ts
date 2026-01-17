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
        text: 'IT 트렌드',
        items: [
          { text: 'AI 혁명', link: '/trends/ai-revolution' },
          { text: '클라우드 네이티브', link: '/trends/cloud-native' },
          { text: '로우코드/노코드', link: '/trends/low-code' }
        ]
      },
      {
        text: '개발 이야기',
        items: [
          { text: '모던 프론트엔드', link: '/development/modern-frontend' },
          { text: '백엔드 트렌드', link: '/development/backend-trends' },
          { text: 'DevOps 문화', link: '/development/devops-culture' }
        ]
      }
    ]
  }
})
