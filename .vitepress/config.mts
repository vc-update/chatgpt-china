import { defineConfig } from 'vitepress'
import { statSync } from 'node:fs'
import { resolve } from 'node:path'

export default defineConfig({
  lang: 'zh-CN',
  title: "ChatGPT国内使用教程 | ChatGPT官网打不开解决方法 | ChatGPT中文版入口【2026】",
  description: "2026年最新ChatGPT国内使用教程，解决ChatGPT官网打不开、注册失败、账号登录和国内访问问题。提供ChatGPT官网国内怎么打开、ChatGPT中文版入口、免翻墙网页版方案与GPT-5.4最新资讯，帮你快速上手ChatGPT。",


  // Sitemap：按层级分配 priority，lastmod 用文件 mtime，避免"伪新鲜"降权
  sitemap: {
    hostname: 'https://www.chatgpt-china.chat',
    transformItems: (items) => {
      const SRC_ROOT = resolve(__dirname, '..')
      return items.map(item => {
        const url = item.url || ''
        // 优先级分级
        let priority = 0.6
        let changefreq: 'daily' | 'weekly' | 'monthly' = 'weekly'
        if (url === '' || url === '/' || url === 'index.html') {
          priority = 1.0
          changefreq = 'weekly'
        } else if (/^(chatgpt|guide)\/?$/.test(url) || /^(chatgpt|guide)\/index\.html$/.test(url)) {
          priority = 0.8
          changefreq = 'weekly'
        } else if (url === 'disclaimer.html') {
          priority = 0.3
          changefreq = 'monthly'
        } else {
          priority = 0.7
          changefreq = 'weekly'
        }
        // lastmod 用源 md 文件的 mtime（没有则跳过，让 vitepress 用 git/默认值）
        let lastmod: string | undefined
        try {
          const mdPath = resolve(SRC_ROOT, url.replace(/\.html$/, '.md').replace(/\/$/, '/index.md'))
          lastmod = statSync(mdPath).mtime.toISOString()
        } catch {
          lastmod = undefined
        }
        return { ...item, changefreq, priority, ...(lastmod ? { lastmod } : {}) }
      })
    }
  },
  // 显示最后更新时间，搜索引擎喜欢新鲜内容
  lastUpdated: true,

  head: [
    ['meta', { name: 'msvalidate.01', content: '283F4ED132291BB65C882E27214A15B8' }],
    ['meta', { name: 'keywords', content: 'ChatGPT国内使用,ChatGPT官网打不开,ChatGPT官网国内怎么打开,ChatGPT国内入口,ChatGPT中文版,ChatGPT网页版,ChatGPT怎么用,ChatGPT注册教程,ChatGPT账号,GPT-5.4,ChatGPT免翻墙,ChatGPT最新动态,OpenAI最新消息,ChatGPT国内能用吗,ChatGPT教程,ChatGPT使用方法' }],
    ['meta', { name: 'author', content: 'ChatGPT中文版' }],
    ['meta', { name: 'robots', content: 'index,follow' }],
    ['meta', { name: 'referrer', content: 'no-referrer-when-downgrade' }],
    ['meta', { property: 'og:title', content: 'ChatGPT国内使用教程 | ChatGPT怎么用 | GPT-5.4最新资讯【2026】' }],
    ['meta', { property: 'og:description', content: '2026年最新ChatGPT国内使用教程，解决打不开/注册失败/账号问题。GPT-5.4功能解析、免翻墙方案与AI最新资讯。' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: 'https://www.chatgpt-china.chat' }],
    ['meta', { property: 'og:image', content: 'https://www.chatgpt-china.chat/og-image.png' }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }],
    ['meta', { property: 'og:site_name', content: 'ChatGPT中文版' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'ChatGPT国内使用教程 | ChatGPT怎么用 | 2026最新GPT-5.4资讯' }],
    ['meta', { name: 'twitter:description', content: '2026年ChatGPT国内使用教程，解决打不开/注册/账号问题，GPT-5.4功能解析与免翻墙方案。' }],
    ['meta', { name: 'twitter:image', content: 'https://www.chatgpt-china.chat/og-image.png' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['link', { rel: 'stylesheet', href: '/styles/custom.css' }],
    [
      'script',
      { type: 'application/ld+json' },
      `{
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "ChatGPT中文版",
        "url": "https://www.chatgpt-china.chat",
        "description": "ChatGPT中文版官网入口，支持GPT-5.4、Claude 4.6等最新模型，国内免翻墙直接使用",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://www.chatgpt-china.chat/?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }`
    ],
    [
      'script',
      { type: 'application/ld+json' },
      `{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "ChatGPT中文版怎么用？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "访问ChatGPT中文版镜像站（如 snakegpt.vip 或 gptcat.cc），无需翻墙，支持GPT-5.4、Claude 4.6等最新模型，注册即可免费使用。"
            }
          },
          {
            "@type": "Question",
            "name": "ChatGPT官网在国内能访问吗？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "ChatGPT官网（chat.openai.com）在国内无法直接访问，需要使用VPN或通过国内镜像站点访问。推荐使用稳定的中文镜像站，无需翻墙即可体验完整功能。"
            }
          },
          {
            "@type": "Question",
            "name": "ChatGPT镜像站安全吗？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "正规的ChatGPT镜像站通过API对接OpenAI官方接口，数据传输加密，安全性有保障。建议选择运营时间长、用户口碑好的镜像站，如SnakeGPT（运营超1年）。"
            }
          },
          {
            "@type": "Question",
            "name": "GPT-5.4和GPT-4o有什么区别？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "GPT-5.4是OpenAI最新旗舰模型，支持深度思考(Thinking)模式，推理能力比GPT-4o提升约40%，支持更长上下文窗口和多模态输入。GPT-4o则更适合日常对话和快速响应场景。"
            }
          }
        ]
      }`
    ],
    [
      'script',
      {},
      `var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?2e3f5c9f50c34190ae43b4c3dd61195e";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();`
    ]
  ],


  
  base: '/',

  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '使用教程', link: '/guide/getting-started' }, 
      { text: 'ChatGPT专栏', link: '/chatgpt/' },
      { text: '免责声明', link: '/disclaimer' }
    ],

    sidebar: {
      
      // 1. 【教程库】侧边栏 (保持原样)
      '/guide/': [
        {
          text: '📘 新手必读',
          items: [
            { text: '快速开始', link: '/guide/getting-started' },
            { text: 'ChatGPT 国内使用指南', link: '/guide/chatgpt-guide' },
            { text: '注册与防封号教程', link: '/guide/chatgpt-login-guide-2025' },
            { text: '免费使用攻略 (2025)', link: '/guide/chatgpt-guide-free-2025' },
            { text: '免费使用攻略 (2026)', link: '/guide/chatgpt-free-2026' },
            { text: '什么是 ChatGPT', link: '/guide/chatgpt' },
            { text: 'Grok官网入口', link: '/guide/grok4.1' },
            { text: 'Gemini使用指南', link: '/guide/gemini-guide' },
            { text: 'Claude 使用指南', link: '/guide/claude-guide' },
          ]
        },
        {
          text: '🛠️ 资源与入口',
          items: [
            { text: '官网入口大全', link: '/guide/chatgpt-official-site' },
            { text: 'chatgpt下载', link: '/guide/chatgpt-download' },
            { text: '镜像网站列表', link: '/guide/chatgpt-mirrors' },
            { text: '国内直连指南', link: '/guide/chatgpt-chinese-mirrors' },
            { text: '备用镜像源', link: '/guide/chatgpt-mirror' },
            { text: 'ChatGPT-CN 简介', link: '/guide/chatgpt-cn' },
            { text: 'ChatGPT中文版指南', link: '/guide/chatgpt-chinese-ultimate-guide-2025' },
            { text: '2026最新ChatGPT入口', link: '/guide/chatgpt-guide-2026-gpt5-gemini3' },
            { text: 'ChatGPT国内怎么用？官网入口、中文版教程一次讲清（2026最新）', link: '/guide/chatgpt-china-how-to-use-2026' },
            { text: 'ChatGPT官网打不开怎么办？国内访问方法与替代入口（2026最新）', link: '/guide/chatgpt-official-site-not-working-2026' },
            { text: 'Gemini官网入口', link: '/guide/gemini-chinese-3-pro' },
          ]
        },
        {
          text: '🚀 进阶指南',
          items: [
            { text: '中文版完全指南', link: '/guide/chatgpt-chinese' },
            { text: '2025 最新中文指南', link: '/guide/chatgpt-chinese-guide' },
            { text: 'GPT-5.2 中文入口', link: '/guide/chatgpt-chinese-5.2-guide' },
            { text: '论文润色的prompt', link: '/guide/chatgpt-paper-polishing-prompts.md' },
            { text: 'ChatGPT 国内使用指南（2026最新）｜中国用户如何稳定使用 ChatGPT', link: '/guide/chatgpt-use-in-china-guide-2026' },
            { text: 'ChatGPT 国内入口推荐（2026最新）｜官网、镜像与使用方式详解', link: '/guide/chatgpt-china-entry-2026' },
            { text: 'grok官网指南', link: '/guide/grok4.1-guide' },
          ]
        },
        {
          text: '🤖 模型深度评测',
          items: [
            { text: 'GPT-5.2 重磅来袭', link: '/guide/gpt-5-2' },
            { text: 'GPT-5.4 Thinking vs Gemini 3.1 Pro：2026 年两大高阶推理模型怎么选？', link: '/guide/chatgpt5.4-VS-gemini3.1pro' },
            { text: 'GPT-5.2 功能详解', link: '/guide/chatgpt-5.2' },
            { text: 'Gemini 3 Pro', link: '/guide/gemini-3-pro' },
            { text: 'Gemini 中文指南', link: '/guide/gemini-cn-guide' },
            { text: 'Grok 中文版', link: '/guide/grok' },
            { text: '全模型横向对比', link: '/guide/chatgpt-gemini-grok-guide-2025' },
          ]
        }
      ],

      // 2. 【ChatGPT专栏】侧边栏 - 按主题重组，去重后保留 59 篇
      '/chatgpt/': [
        {
          text: '🔥 核心入口',
          collapsed: false,
          items: [
            { text: 'ChatGPT官网 2026年05月最新指南', link: '/chatgpt/chatgpt-guanwang-2026-05-zuixin-zhinan' },
            { text: 'ChatGPT官网中文版：2026年05月最新入口与使用方法', link: '/chatgpt/chatgpt-guanwang-zhongwenban-2026-05' },
            { text: 'ChatGPT官网是什么？2026最新官网入口与登录方法', link: '/chatgpt/chatgpt-guanwang-shi-shenme-2026' },
            { text: 'ChatGPT官方网址入口（官网登录入口）国内免翻墙完整方案', link: '/chatgpt/chatgpt-guanfang-wangzhi-rukou-denglu-mianfanqiang-2026' },
            { text: 'ChatGPT官网入口大全（GPT-5.4国内使用完全攻略）', link: '/chatgpt/chatgpt-gpt5-guonei-wanzheng-gonglue-2026' },
            { text: 'ChatGPT 官方详解', link: '/chatgpt/chatgpt-official' },
            { text: 'ChatGPT官网打不开怎么办？国内访问解决方案大全', link: '/chatgpt/chatgpt-official-site-access-solutions-april-2026' },
          ]
        },
        {
          text: '📝 注册教程',
          collapsed: false,
          items: [
            { text: 'ChatGPT怎么注册？2026年5月最新保姆级教程', link: '/chatgpt/chatgpt-how-to-register-2026-05' },
            { text: 'ChatGPT账号注册2026年05月最新完整指南', link: '/chatgpt/chatgpt-account-registration-2026-05-505' },
            { text: 'ChatGPT国内怎么注册？2026最新注册使用全流程', link: '/chatgpt/chatgpt-guonei-zhuce-jiaocheng-mianfanqiang-april-2026' },
            { text: 'ChatGPT注册使用全攻略（含官网入口与免翻墙方案）', link: '/chatgpt/chatgpt-registration-and-usage-complete-tutorial-2026' },
          ]
        },
        {
          text: '🇨🇳 国内使用 & 中文版',
          collapsed: false,
          items: [
            { text: 'ChatGPT国内使用完整指南（2026年5月最新）', link: '/chatgpt/chatgpt-guonei-shiyong-complete-guide-2026-05' },
            { text: 'ChatGPT国内能用吗？2026年4月亲测5种方法', link: '/chatgpt/chatgpt-guonei-neng-yong-ma-5zhong-fangfa-2026' },
            { text: 'ChatGPT中文版怎么用？2026年4月国内免翻墙终极指南', link: '/chatgpt/chatgpt-zhongwen-ban-2026-zhinan-mianfei-guonei-shiyong' },
            { text: 'ChatGPT中文版 国内访问指南', link: '/chatgpt/chatgpt-chinese-version' },
            { text: 'ChatGPT中文指南', link: '/chatgpt/chatgpt-chinese-guide' },
            { text: 'ChatGPT中文版官网入口｜GPT-5.4国内免翻墙完整教程', link: '/chatgpt/chatgpt-chinese-version-gpt5-no-vpn-complete-guide-2026' },
            { text: 'ChatGPT中文版怎么用？GPT-5.4 Thinking 国内全攻略', link: '/chatgpt/chatgpt-chinese-gpt5.4-thinking-guide-2026' },
            { text: 'ChatGPT中文版和官网有什么区别？2026年4月全面对比', link: '/chatgpt/chatgpt-chinese-vs-official-comparison-april-2026' },
            { text: 'ChatGPT镜像网站哪个好用？2026年4月实测排名', link: '/chatgpt/chatgpt-mirror-sites-ranking-april-2026' },
          ]
        },
        {
          text: '🖥️ 使用教程',
          collapsed: false,
          items: [
            { text: '如何使用 ChatGPT', link: '/chatgpt/how-to-use-chatgpt' },
            { text: 'ChatGPT 使用指南', link: '/chatgpt/chatgpt-guide' },
            { text: '新手入门指南', link: '/chatgpt/chatgpt-guide-for-beginners' },
            { text: 'ChatGPT 网页版使用指南（2026）', link: '/chatgpt/chatgpt-web-version-guide-2026' },
            { text: 'ChatGPT 免费指南', link: '/chatgpt/chatgpt-free-guide' },
            { text: 'ChatGPT 下载安装教程（电脑+手机全平台）', link: '/chatgpt/chatgpt-download-install-guide-april-2026' },
            { text: '常见问题解决方案', link: '/chatgpt/chatgpt-faq-solutions' },
            { text: '什么是 ChatGPT', link: '/chatgpt/what-is-chatgpt' },
            { text: 'ChatGPT 2026 最新版', link: '/chatgpt/chatgpt-2026' },
            { text: 'ChatGPT 5.2（2026版）', link: '/chatgpt/chatgpt-5.2-2026' },
          ]
        },
        {
          text: '🤖 GPT-5 系列模型',
          collapsed: false,
          items: [
            { text: 'GPT-5.4 国内使用指南（2026最新）', link: '/chatgpt/gpt5.4-china-guide-2026' },
            { text: 'GPT-5.4怎么用？GPT-5.4 Thinking 完整教程', link: '/chatgpt/gpt5-4-how-to-use-thinking-guide-april-2026' },
            { text: 'GPT-5.5 重磅发布：OpenAI 在重新定义"AI助手"', link: '/chatgpt/gpt5-5-deep-analysis-april-2026' },
            { text: 'GPT-5 中文使用指南', link: '/chatgpt/gpt5-chatgpt-guide' },
            { text: 'GPT-5 新闻资讯', link: '/chatgpt/gpt5-news' },
            { text: 'ChatGPT 免费版 vs Plus（GPT-5.4 深度对比）', link: '/chatgpt/chatgpt-free-vs-paid-gpt54-comparison-april-2026' },
            { text: '为什么我更看好 GPT-5.4：一个真正的 AI 工程搭子', link: '/chatgpt/gpt54_vs_claudecode_vs_deepseek_summary' },
          ]
        },
        {
          text: '🆚 模型对比 & 横评',
          collapsed: false,
          items: [
            { text: '2026年AI大模型排行榜：GPT-5.4/Claude/Gemini/Grok 横评', link: '/chatgpt/ai-damoxing-paihangbang-gpt-claude-gemini-grok-duibi-april-2026' },
            { text: 'ChatGPT vs Claude 对比', link: '/chatgpt/chatgpt-vs-claude' },
            { text: 'AI编程助手 2026 横评：Cursor / Windsurf / Copilot / Claude Code', link: '/chatgpt/ai-coding-agent-comparison-2026' },
            { text: '多模态AI技术原理与未来发展', link: '/chatgpt/multimodal-ai-technical-principles-future-development-2026' },
          ]
        },
        {
          text: '🧠 Claude / Gemini / Grok / DeepSeek',
          collapsed: false,
          items: [
            { text: 'Claude 4.6 国内使用指南（免费体验）', link: '/chatgpt/claude-4-6-opus-china-guide-april-2026' },
            { text: 'Claude 4.6 国内怎么用？免翻墙完整教程', link: '/chatgpt/claude-4-6-guonei-mianfanqiang-shiyong-jiaocheng-2026' },
            { text: 'Claude Opus 4.7 深度解析', link: '/chatgpt/claude-opus-4-7-depth-analysis-2026' },
            { text: 'Gemini 3.1 Pro 中文版国内免翻墙教程', link: '/chatgpt/gemini-3-1-pro-zhongwen-ban-guonei-jiaocheng-april-2026' },
            { text: 'Grok 中文版怎么用？Grok 4.2 完整教程', link: '/chatgpt/grok-zhongwen-ban-guonei-shiyong-zhinan-april-2026' },
            { text: 'Grok 虚拟员工：马斯克的下一步', link: '/chatgpt/grok-computer-virtual-assistant-2026' },
            { text: 'DeepSeek V3 国内免费使用教程 vs ChatGPT', link: '/chatgpt/deepseek-v3-guonei-mianfei-jiaocheng-vs-chatgpt-2026' },
            { text: 'DeepSeek V3.2 重磅发布', link: '/chatgpt/deepseek-v3.2-jieshao-2026' },
          ]
        },
        {
          text: '💡 提示词 & 应用',
          collapsed: false,
          items: [
            { text: 'AI 提示词大全 2026：80个万能 Prompt 模板', link: '/chatgpt/ai-tishici-daquan-chatgpt-claude-prompt-moban-2026' },
            { text: '一篇讲透提示词怎么写', link: '/chatgpt/chatgpt_prompt_blog' },
            { text: 'AI 办公实战博客', link: '/chatgpt/ai_office_practical_blog' },
            { text: 'ChatGPT 写论文靠谱吗？AI 辅助写作完整指南', link: '/chatgpt/chatgpt-xie-lunwen-ai-fuzhuxiezuo-zhinan-april-2026' },
            { text: 'ChatGPT 怎么赚钱？10个AI副业变现方法', link: '/chatgpt/chatgpt-fuye-zhuanqian-ai-bianxian-zhinan-2026' },
            { text: '2026年用AI做副业的现实打法', link: '/chatgpt/ai-side-hustle-guide-2026' },
            { text: 'AI 设计工具：Claude Design 与创意工作流', link: '/chatgpt/ai-design-tools-claude-design-analysis-2026' },
          ]
        },
        {
          text: '📰 行业资讯',
          collapsed: false,
          items: [
            { text: 'Google 豪掷 400 亿美元投资 Anthropic', link: '/chatgpt/google-invest-anthropic-40b-analysis-2026' },
            { text: 'AI 编码代理 9 秒删生产库——PocketOS 惨案', link: '/chatgpt/ai-coding-agent-deletes-production-database-2026' },
            { text: 'OpenAI 牵手 AWS：Bedrock Managed Agents', link: '/chatgpt/openai-aws-bedrock-managed-agents-2026' },
          ]
        }
      ],

      // 3. 兜底配置
      '/': [
        {
          text: '全站导航',
          items: [
            { text: '进入教程库', link: '/guide/getting-started' },
            { text: '查看专栏', link: '/chatgpt/' }
          ]
        }
      ]
    },


  },

  // 动态注入 per-page canonical + Article Schema + OG tags
  transformPageData(pageData) {
    const SITE_HOST = 'https://www.chatgpt-china.chat'
    const SITE_NAME = 'ChatGPT中文版'
    const fm = pageData.frontmatter || {}
    pageData.frontmatter.head = pageData.frontmatter.head || []

    // 动态 canonical URL（修复全站指向首页的致命 bug）
    const cleanPath = pageData.relativePath
      .replace(/\.md$/, '')
      .replace(/\/index$/, '')
    const canonicalUrl = cleanPath ? `${SITE_HOST}/${cleanPath}` : SITE_HOST
    pageData.frontmatter.head.push(
      ['link', { rel: 'canonical', href: canonicalUrl }]
    )

    // 动态 OG tags（覆盖全局静态值）
    const pageTitle = fm.title || pageData.title || SITE_NAME
    const pageDesc = fm.description || pageData.description || ''
    pageData.frontmatter.head.push(
      ['meta', { property: 'og:title', content: pageTitle }],
      ['meta', { property: 'og:description', content: pageDesc }],
      ['meta', { property: 'og:url', content: canonicalUrl }]
    )

    // 为非首页注入 Article Schema
    if (pageData.relativePath !== 'index.md') {
      const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: pageTitle,
        description: pageDesc,
        datePublished: fm.date
          ? new Date(fm.date).toISOString()
          : new Date('2026-01-01').toISOString(),
        dateModified: fm.lastUpdated
          ? new Date(fm.lastUpdated).toISOString()
          : new Date().toISOString(),
        author: {
          '@type': 'Organization',
          name: SITE_NAME,
          url: SITE_HOST
        },
        publisher: {
          '@type': 'Organization',
          name: SITE_NAME,
          url: SITE_HOST
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': canonicalUrl
        },
        inLanguage: 'zh-CN'
      }
      pageData.frontmatter.head.push([
        'script',
        { type: 'application/ld+json' },
        JSON.stringify(articleSchema)
      ])
    }
  }
})