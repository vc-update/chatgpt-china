import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: "ChatGPT中文版 | ChatGPT官网入口 | ChatGPT镜像网站推荐【2026最新】",
  description: "ChatGPT中文版官网入口，支持GPT-5.4、Claude 4.6、Gemini 3.5 Pro等最新模型。提供国内可用ChatGPT镜像网站推荐、使用教程、模型对比评测，无需翻墙即可体验ChatGPT全部功能。",


  // 2. 关键 SEO 配置 (你漏掉的部分)
  // 自动生成 sitemap，Bing 爬虫全靠它来抓取你的页面
  sitemap: {
    hostname: 'https://www.chatgpt-china.chat',
    transformItems: (items) => {
      return items.map(item => ({
        ...item,
        changefreq: 'weekly',
        priority: 0.7,
        lastmod: new Date().toISOString()
      }))
    }
  },
  // 显示最后更新时间，搜索引擎喜欢新鲜内容
  lastUpdated: true,

  head: [
    ['meta', { name: 'msvalidate.01', content: '283F4ED132291BB65C882E27214A15B8' }],
    ['meta', { name: 'keywords', content: 'ChatGPT,ChatGPT中文版,ChatGPT官网,ChatGPT镜像网站,ChatGPT镜像站,GPT-5.4,ChatGPT国内使用,OpenAI,AI对话,人工智能,大语言模型,ChatGPT注册,ChatGPT教程,GPT-5' }],
    ['meta', { name: 'author', content: 'ChatGPT中文版' }],
    ['meta', { name: 'robots', content: 'index,follow' }],
    ['meta', { name: 'referrer', content: 'no-referrer-when-downgrade' }],
    ['meta', { property: 'og:title', content: 'ChatGPT中文版 | ChatGPT官网入口 | ChatGPT镜像网站推荐【2026最新】' }],
    ['meta', { property: 'og:description', content: 'ChatGPT中文版官网入口，支持GPT-5.4等最新模型。国内可用ChatGPT镜像网站推荐，无需翻墙即可体验ChatGPT全部功能。' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: 'https://www.chatgpt-china.chat' }],
    ['meta', { property: 'og:image', content: 'https://www.chatgpt-china.chat/og-image.png' }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }],
    ['meta', { property: 'og:site_name', content: 'ChatGPT中文版' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'ChatGPT中文版 | ChatGPT官网入口 | 2026最新使用指南' }],
    ['meta', { name: 'twitter:description', content: 'ChatGPT中文版官网入口，支持GPT-5.4等最新模型。国内免翻墙使用ChatGPT完整教程。' }],
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

      // 2. 【ChatGPT专栏】侧边栏 - 已更新为左侧文件夹内的所有文件
      '/chatgpt/': [
        {
          text: '🔥 核心聚焦',
          items: [
            { text: '专栏导读', link: '/chatgpt/' },
            { text: '为什么我更看好 GPT-5.4：它不只是会写代码，更像一个真正的 AI 工程搭子', link: '/chatgpt/gpt54_vs_claudecode_vs_deepseek_summary' },
            { text: 'ChatGPT中文版怎么用？2026年4月国内免翻墙终极指南（GPT-5.4+多模型对比）', link: '/chatgpt/chatgpt-zhongwen-ban-2026-zhinan-mianfei-guonei-shiyong' },
            { text: 'ChatGPT国内能用吗？2026年4月亲测5种方法（附最稳定方案推荐）', link: '/chatgpt/chatgpt-guonei-neng-yong-ma-5zhong-fangfa-2026' },
            { text: 'DeepSeek怎么用？DeepSeek V3国内免费使用教程与ChatGPT对比（2026年4月）', link: '/chatgpt/deepseek-v3-guonei-mianfei-jiaocheng-vs-chatgpt-2026' },
            { text: 'AI提示词大全2026：80个ChatGPT/Claude万能Prompt模板（工作学习全场景覆盖）', link: '/chatgpt/ai-tishici-daquan-chatgpt-claude-prompt-moban-2026' },
            { text: 'Claude 4.6国内怎么用？2026年4月免翻墙使用Claude全教程（附中文Prompt技巧）', link: '/chatgpt/claude-4-6-guonei-mianfanqiang-shiyong-jiaocheng-2026' },
            { text: 'ChatGPT怎么赚钱？2026年10个AI副业变现方法（月入3000-30000实操指南）', link: '/chatgpt/chatgpt-fuye-zhuanqian-ai-bianxian-zhinan-2026' },
            { text: 'ChatGPT国内怎么注册？2026最新注册使用全流程教程', link: '/chatgpt/chatgpt-guonei-zhuce-jiaocheng-mianfanqiang-april-2026' },
            { text: 'ChatGPT写论文靠谱吗？AI辅助论文写作完整指南', link: '/chatgpt/chatgpt-xie-lunwen-ai-fuzhuxiezuo-zhinan-april-2026' },
            { text: '2026年AI大模型排行榜：GPT-5.4/Claude/Gemini/Grok横评', link: '/chatgpt/ai-damoxing-paihangbang-gpt-claude-gemini-grok-duibi-april-2026' },
            { text: 'Gemini 3.1 Pro中文版国内免翻墙使用教程（2026年4月）', link: '/chatgpt/gemini-3-1-pro-zhongwen-ban-guonei-jiaocheng-april-2026' },
            { text: 'Grok中文版怎么用？国内免翻墙使用Grok 4.2完整教程', link: '/chatgpt/grok-zhongwen-ban-guonei-shiyong-zhinan-april-2026' },
            { text: 'ChatGPT官网入口（2026年4月最新）｜国内ChatGPT中文版使用指南', link: '/chatgpt/chatgpt-guanwang-rukou-zhongwen-ban-zhinan-april-2026' },
            { text: 'ChatGPT中文版访问指南（2026年4月更新）｜国内免翻墙使用GPT-5.4完整教程', link: '/chatgpt/chatgpt-zhongwen-ban-zhinan-guonei-mianfei-shiyong-2026' },
            { text: 'GPT-5.4怎么用？国内免翻墙使用GPT-5.4 Thinking完整教程（2026年4月）', link: '/chatgpt/gpt5-4-how-to-use-thinking-guide-april-2026' },
            { text: 'ChatGPT中文版和官网有什么区别？2026年4月全面对比', link: '/chatgpt/chatgpt-chinese-vs-official-comparison-april-2026' },
            { text: 'ChatGPT官网打不开怎么办？国内访问解决方案大全（2026年4月）', link: '/chatgpt/chatgpt-official-site-access-solutions-april-2026' },
            { text: 'ChatGPT镜像网站哪个好用？2026年4月实测排名推荐', link: '/chatgpt/chatgpt-mirror-sites-ranking-april-2026' },
            { text: 'ChatGPT下载安装教程：电脑+手机全平台安装方法（2026年4月）', link: '/chatgpt/chatgpt-download-install-guide-april-2026' },
            { text: 'ChatGPT免费版和付费版区别大吗？GPT-5.4免费vs Plus深度对比', link: '/chatgpt/chatgpt-free-vs-paid-gpt54-comparison-april-2026' },
            { text: 'ChatGPT官网入口大全与GPT-5.4深度实测：2026年4月国内免翻墙使用完整方案', link: '/chatgpt/chatgpt-official-entry-gpt5-4-deep-test-april-2026' },
            { text: 'ChatGPT中文版官网入口｜GPT-5.4国内免翻墙使用完整教程（2026年3月最新）', link: '/chatgpt/chatgpt-chinese-version-gpt5-no-vpn-complete-guide-2026' },
            { text: 'ChatGPT 中文版怎么用？GPT-5.4 Thinking 国内无需翻墙使用全攻略（2026年3月更新）', link: '/chatgpt/chatgpt-chinese-gpt5.4-thinking-guide-2026' },
            { text: 'ChatGPT官网入口：国内新手保姆级别使用指南', link: '/chatgpt/chatgpt-guanwang-newbie-bindao-guide' },
            { text: 'ChatGPT注册使用全攻略（2026年3月更新）｜官网入口、国内免翻墙方案一文搞定', link: '/chatgpt/chatgpt-registration-and-usage-complete-tutorial-2026' },
            { text: 'ChatGPT中文版：国内访问指南（支持GPT、Gemini、Claude、grok等模型，无需翻墙）', link: '/chatgpt/chatgpt-chinese-access-guide-multi-model-2026' },
            
            // --- 2026/GPT-5 相关 ---
            { text: '2026最新国内可用ChatGPT镜像网站合集', link: '/chatgpt/chatgpt-mirrors-ultimate-guide-2026' },
            { text: 'ChatGPT 5.2 (2026版)', link: '/chatgpt/chatgpt-5.2-2026' },
            { text: 'ChatGPT 2026 最新版', link: '/chatgpt/chatgpt-2026' },
            { text: '2026 使用教程', link: '/chatgpt/chatgpt-guide-2026' },
            { text: 'GPT-5 中文使用指南 (12月)', link: '/chatgpt/chatgpt-cn-gpt5-usage-guide-dec' },
            { text: 'GPT-5 指南', link: '/chatgpt/gpt5-chatgpt-guide' },
            { text: 'GPT-5 新闻资讯', link: '/chatgpt/gpt5-news' },
            { text: '如何使用 GPT-5.2', link: '/chatgpt/how-to-use-gpt5.2' },
            { text: 'GPT-5.4 国内使用指南（2026最新）', link: '/chatgpt/gpt5.4-china-guide-2026' },

            // --- 官方与官网指南 ---
            { text: 'ChatGPT 官方详解', link: '/chatgpt/chatgpt-official' },
            { text: 'ChatGPT 官方 2025', link: '/chatgpt/chatgpt-official-2025' },
            { text: 'ChatGPT 官方入口', link: '/chatgpt/chatgpt-official-entry' },
            { text: 'ChatGPT 官方指南', link: '/chatgpt/chatgpt-official-guide' },
            { text: 'ChatGPT 官网中文指南', link: '/chatgpt/chatgpt-official-site-chinese-guide' },
            { text: 'ChatGPT 官方网站', link: '/chatgpt/chatgpt-official-website' },
            { text: 'ChatGPT 中文版官网入口（2026年3月最新）国内使用指南', link: '/chatgpt/chatgpt-chinese-official-website-entry-and-usage-guide-2026' },

            // --- 中文版与国内使用 ---
            { text: 'ChatGPT 国内使用指南', link: '/chatgpt/chatgpt-china-guide' },
            { text: 'ChatGPT 中国版', link: '/chatgpt/chatgpt-china-version' },
            { text: 'ChatGPT 中文版', link: '/chatgpt/chatgpt-chinese-version' },
            { text: 'ChatGPT 中文指南', link: '/chatgpt/chatgpt-chinese-guide' },
            { text: 'ChatGPT 国内如何使用', link: '/chatgpt/how-to-use-gpt' },
            { text: 'ChatGPT 中文官方', link: '/chatgpt/chatgpt-chinese-official' },
            { text: 'ChatGPT 中文终极指南', link: '/chatgpt/chatgpt-cn-ultimate-guide' },
            { text: 'ChatGPT 中文访问推荐', link: '/chatgpt/chatgpt-chinese-access-recommendations' }, // 注意：请检查文件名是否带s
            { text: '国内可用站点', link: '/chatgpt/china-available-sites' },
            

            // --- 教程与资源 ---
            { text: '如何使用 ChatGPT', link: '/chatgpt/how-to-use-chatgpt' },
            { text: 'ChatGPT 使用指南', link: '/chatgpt/chatgpt-guide' },
            { text: '新手入门指南', link: '/chatgpt/chatgpt-guide-for-beginners' },
            { text: 'ChatGPT 免费指南', link: '/chatgpt/chatgpt-free-guide' },
            { text: '2025 免费中文版', link: '/chatgpt/chatgpt-chinese-free-2025' },
            { text: '镜像站合集', link: '/chatgpt/chatgpt-mirror-sites-collection' },
            { text: '镜像列表', link: '/chatgpt/mirrors' },
            { text: '常见问题解决方案', link: '/chatgpt/chatgpt-faq-solutions' },
            { text: 'ChatGPT 网页版使用指南（2026）', link: '/chatgpt/chatgpt-web-version-guide-2026' },
            { text: 'ChatGPT怎么用？国内使用完整教程（2026最新）', link: '/chatgpt/chatgpt-how-to-use-guide-2026' },
            
            // --- 其他 ---
            { text: '什么是 ChatGPT', link: '/chatgpt/what-is-chatgpt' },
            { text: 'ChatGPT 中文 GPT', link: '/chatgpt/chatgpt-chinese-gpt' },
            { text: 'ChatGPT vs Claude 对比', link: '/chatgpt/chatgpt-vs-claude' },
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