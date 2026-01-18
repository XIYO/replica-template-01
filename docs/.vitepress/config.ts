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
                text: "개요",
                items: [
                      { text: "AI 에이전트란?", link: "/overview/what-is-ai-agent" },
                      { text: "AI 에이전트의 발전 역사", link: "/overview/evolution-history" },
                      { text: "현재 기술 수준", link: "/overview/current-state" }
                ]
          },
          {
                text: "핵심 기술",
                items: [
                      { text: "LLM 기반 에이전트", link: "/core-technologies/llm-based-agent" },
                      { text: "멀티모달 에이전트", link: "/core-technologies/multimodal-agent" },
                      { text: "자율 에이전트 아키텍처", link: "/core-technologies/autonomous-agent" }
                ]
          },
          {
                text: "미래 전망",
                items: [
                      { text: "기술 발전 방향", link: "/future-outlook/technology-trends" },
                      { text: "산업별 영향", link: "/future-outlook/industry-impact" },
                      { text: "윤리적 고려사항", link: "/future-outlook/ethical-considerations" }
                ]
          }
    ]
  }
})
