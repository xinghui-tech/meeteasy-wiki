import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

const companyZh = '星汇盛世（北京）科技有限公司'
const companyEn = 'Xinghui Shengshi (Beijing) Technology Co., Ltd.'

const footerZh = {
  message: `${companyZh} · 星汇小蜜书文档`,
  copyright: 'Copyright © 2026 星汇盛世（北京）科技有限公司',
}

const footerEn = {
  message: `${companyEn} · MeetEasy Docs`,
  copyright: 'Copyright © 2026 Xinghui Shengshi (Beijing) Technology Co., Ltd.',
}

const sharedFooterLinks = (lang: 'zh' | 'en') => {
  const prefix = lang === 'zh' ? '' : '/en'
  const labels =
    lang === 'zh'
      ? { privacy: '隐私政策', terms: '服务条款', about: '关于我们', contact: '联系我们' }
      : { privacy: 'Privacy', terms: 'Terms', about: 'About', contact: 'Contact' }
  return [
    { text: labels.privacy, link: `${prefix}/legal/privacy` },
    { text: labels.terms, link: `${prefix}/legal/terms` },
    { text: labels.about, link: `${prefix}/about/` },
    { text: labels.contact, link: `${prefix}/about/contact` },
  ]
}

function productSidebar(lang: 'zh' | 'en') {
  const p = lang === 'zh' ? '' : '/en'
  return lang === 'zh'
    ? [
        { text: '产品概览', link: `${p}/product/` },
        { text: '核心功能', link: `${p}/product/features` },
        { text: '应用矩阵', link: `${p}/product/applications` },
        { text: '架构原则', link: `${p}/product/principles` },
        { text: '技术栈概览', link: `${p}/product/tech-stack` },
      ]
    : [
        { text: 'Overview', link: `${p}/product/` },
        { text: 'Core Features', link: `${p}/product/features` },
        { text: 'Applications', link: `${p}/product/applications` },
        { text: 'Principles', link: `${p}/product/principles` },
        { text: 'Tech Stack', link: `${p}/product/tech-stack` },
      ]
}

function userManualSidebar(lang: 'zh' | 'en') {
  const p = lang === 'zh' ? '' : '/en'
  if (lang === 'zh') {
    return [
      {
        text: '平台运营 (Admin)',
        collapsed: false,
        items: [
          { text: '入门指南', link: `${p}/user-manual/admin/` },
          { text: '插件管理', link: `${p}/user-manual/admin/plugins` },
          { text: '系统设置', link: `${p}/user-manual/admin/settings` },
          { text: '模板与素材', link: `${p}/user-manual/admin/templates` },
        ],
      },
      {
        text: '会务组织者 (Console)',
        collapsed: false,
        items: [
          { text: '快速开始', link: `${p}/user-manual/console/quick-start` },
          { text: '议程管理', link: `${p}/user-manual/console/agenda` },
          { text: '报名配置', link: `${p}/user-manual/console/registration` },
          { text: '签到管理', link: `${p}/user-manual/console/check-in` },
          { text: '座位管理', link: `${p}/user-manual/console/seating` },
          { text: 'VisuSpace 微站', link: `${p}/user-manual/console/visuspace` },
          { text: 'AMIS 表单', link: `${p}/user-manual/console/forms` },
          { text: '数据分析', link: `${p}/user-manual/console/analytics` },
        ],
      },
      {
        text: '参会者 (MeetApp)',
        collapsed: false,
        items: [
          { text: '参会入门', link: `${p}/user-manual/meetapp/` },
          { text: '报名与表单', link: `${p}/user-manual/meetapp/registration` },
          { text: 'AI 助手', link: `${p}/user-manual/meetapp/ai-chat` },
          { text: '签到与座位', link: `${p}/user-manual/meetapp/check-in` },
        ],
      },
      {
        text: '微信小程序',
        collapsed: false,
        items: [
          { text: '小程序概述', link: `${p}/user-manual/wechat/` },
          { text: 'Login Ticket SSO', link: `${p}/user-manual/wechat/sso` },
        ],
      },
    ]
  }
  return [
    {
      text: 'Admin',
      collapsed: false,
      items: [
        { text: 'Getting Started', link: `${p}/user-manual/admin/` },
        { text: 'Plugins', link: `${p}/user-manual/admin/plugins` },
        { text: 'Settings', link: `${p}/user-manual/admin/settings` },
        { text: 'Templates', link: `${p}/user-manual/admin/templates` },
      ],
    },
    {
      text: 'Console',
      collapsed: false,
      items: [
        { text: 'Quick Start', link: `${p}/user-manual/console/quick-start` },
        { text: 'Agenda', link: `${p}/user-manual/console/agenda` },
        { text: 'Registration', link: `${p}/user-manual/console/registration` },
        { text: 'Check-in', link: `${p}/user-manual/console/check-in` },
        { text: 'Seating', link: `${p}/user-manual/console/seating` },
        { text: 'VisuSpace', link: `${p}/user-manual/console/visuspace` },
        { text: 'Forms', link: `${p}/user-manual/console/forms` },
        { text: 'Analytics', link: `${p}/user-manual/console/analytics` },
      ],
    },
    {
      text: 'MeetApp',
      collapsed: false,
      items: [
        { text: 'Getting Started', link: `${p}/user-manual/meetapp/` },
        { text: 'Registration', link: `${p}/user-manual/meetapp/registration` },
        { text: 'AI Chat', link: `${p}/user-manual/meetapp/ai-chat` },
        { text: 'Check-in', link: `${p}/user-manual/meetapp/check-in` },
      ],
    },
    {
      text: 'WeChat Mini Programs',
      collapsed: false,
      items: [
        { text: 'Overview', link: `${p}/user-manual/wechat/` },
        { text: 'Login Ticket SSO', link: `${p}/user-manual/wechat/sso` },
      ],
    },
  ]
}

function developerSidebar(lang: 'zh' | 'en') {
  const p = lang === 'zh' ? '' : '/en'
  return lang === 'zh'
    ? [
        { text: '系统架构', link: `${p}/developer/architecture` },
        {
          text: '后端开发',
          collapsed: false,
          items: [
            { text: '概览', link: `${p}/developer/backend/` },
            { text: '本地开发', link: `${p}/developer/backend/setup` },
          ],
        },
        {
          text: '前端开发',
          collapsed: false,
          items: [
            { text: '概览', link: `${p}/developer/frontend/` },
            { text: '开发命令', link: `${p}/developer/frontend/dev-commands` },
          ],
        },
        { text: '插件开发', link: `${p}/developer/plugins` },
        { text: 'VisuSpace DSL', link: `${p}/developer/visuspace-dsl` },
        { text: '部署运维', link: `${p}/developer/deployment` },
        { text: '分析与异步', link: `${p}/developer/analytics-async` },
      ]
    : [
        { text: 'Architecture', link: `${p}/developer/architecture` },
        {
          text: 'Backend',
          collapsed: false,
          items: [
            { text: 'Overview', link: `${p}/developer/backend/` },
            { text: 'Local Setup', link: `${p}/developer/backend/setup` },
          ],
        },
        {
          text: 'Frontend',
          collapsed: false,
          items: [
            { text: 'Overview', link: `${p}/developer/frontend/` },
            { text: 'Dev Commands', link: `${p}/developer/frontend/dev-commands` },
          ],
        },
        { text: 'Plugins', link: `${p}/developer/plugins` },
        { text: 'VisuSpace DSL', link: `${p}/developer/visuspace-dsl` },
        { text: 'Deployment', link: `${p}/developer/deployment` },
        { text: 'Analytics & Async', link: `${p}/developer/analytics-async` },
      ]
}

function legalSidebar(lang: 'zh' | 'en') {
  const p = lang === 'zh' ? '' : '/en'
  return lang === 'zh'
    ? [
        { text: '法律法规索引', link: `${p}/legal/` },
        { text: '隐私政策', link: `${p}/legal/privacy` },
        { text: '服务条款', link: `${p}/legal/terms` },
        { text: '用户协议', link: `${p}/legal/user-agreement` },
        { text: '数据安全', link: `${p}/legal/data-security` },
      ]
    : [
        { text: 'Legal Index', link: `${p}/legal/` },
        { text: 'Privacy Policy', link: `${p}/legal/privacy` },
        { text: 'Terms of Service', link: `${p}/legal/terms` },
        { text: 'User Agreement', link: `${p}/legal/user-agreement` },
        { text: 'Data Security', link: `${p}/legal/data-security` },
      ]
}

function aboutSidebar(lang: 'zh' | 'en') {
  const p = lang === 'zh' ? '' : '/en'
  return lang === 'zh'
    ? [
        { text: '公司介绍', link: `${p}/about/` },
        { text: '使命愿景', link: `${p}/about/mission` },
        { text: '团队介绍', link: `${p}/about/team` },
        { text: '联系我们', link: `${p}/about/contact` },
      ]
    : [
        { text: 'Company', link: `${p}/about/` },
        { text: 'Mission & Vision', link: `${p}/about/mission` },
        { text: 'Team', link: `${p}/about/team` },
        { text: 'Contact', link: `${p}/about/contact` },
      ]
}

function visuspaceSidebar(lang: 'zh' | 'en') {
  const p = lang === 'zh' ? '' : '/en'
  return lang === 'zh'
    ? [
        { text: 'VisuSpace 概览', link: `${p}/visuspace/` },
        {
          text: '组件与实例说明',
          link: `${p}/visuspace/components`,
          collapsed: false,
          items: [
            { text: '布局组件', link: `${p}/visuspace/components#布局组件-layout-components` },
            { text: '基础与媒体组件', link: `${p}/visuspace/components#基础与媒体组件-static-media-components` },
            { text: '业务组件', link: `${p}/visuspace/components#业务组件-business-components` },
            { text: 'AI会务Chatbox', link: `${p}/visuspace/components#ai-会务-chatbox-business-ai-chatbox` },
            { text: '列表与详情组件', link: `${p}/visuspace/components#数据列表与详情组件-list-detail-catalog` },
          ]
        },
        { text: '从0到1创建会务助理', link: `${p}/visuspace/create-assistant` },
      ]
    : [
        { text: 'VisuSpace Overview', link: `${p}/visuspace/` },
        {
          text: 'Components & Examples',
          link: `${p}/visuspace/components`,
          collapsed: false,
          items: [
            { text: 'Layout Components', link: `${p}/visuspace/components#layout-components` },
            { text: 'Static & Media Components', link: `${p}/visuspace/components#static-media-components` },
            { text: 'Business Components', link: `${p}/visuspace/components#business-components` },
            { text: 'AI Conference Chatbox', link: `${p}/visuspace/components#ai-conference-chatbox-business-ai-chatbox` },
            { text: 'Catalog List & Details', link: `${p}/visuspace/components#catalog-list-details` },
          ]
        },
        { text: 'Create Assistant from 0 to 1', link: `${p}/visuspace/create-assistant` },
      ]
}

export default withMermaid(
  defineConfig({
  base: '/',
  title: '星汇小蜜书',
  description: '星汇小蜜书（MeetEasy）产品介绍、使用手册与开发文档',
  appearance: true,
  mermaid: {
    theme: 'base',
    themeVariables: {
      primaryColor: '#FF6A00',
      primaryTextColor: '#333333',
      primaryBorderColor: '#e55f00',
      lineColor: '#969799',
      secondaryColor: '#f7f8fa',
      tertiaryColor: '#fff8f0',
    },
  },
  vite: {
    optimizeDeps: {
      include: [
        'mermaid',
        '@braintree/sanitize-url'
      ]
    }
  },
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: '星汇小蜜书',
      description: '星汇小蜜书（MeetEasy）产品介绍、使用手册与开发文档',
      themeConfig: {
        logo: '/images/logo.png',
        siteTitle: '星汇小蜜书',
        outline: {
          label: '本页目录',
        },
        docFooter: {
          prev: '上一页',
          next: '下一页',
        },
        sidebarMenuLabel: '菜单',
        returnToTopLabel: '回到顶部',
        darkModeSwitchLabel: '主题外观',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式',
        nav: [
          { text: '产品介绍', link: '/product/', activeMatch: '/product/' },
          { text: 'VisuSpace AI低代码', link: '/visuspace/', activeMatch: '/visuspace/' },
          { text: '使用手册', link: '/user-manual/admin/', activeMatch: '/user-manual/' },
          { text: '开发文档', link: '/developer/architecture', activeMatch: '/developer/' },
          { text: '法律法规', link: '/legal/', activeMatch: '/legal/' },
          { text: '关于我们', link: '/about/', activeMatch: '/about/' },
        ],
        sidebar: {
          '/product/': productSidebar('zh'),
          '/visuspace/': visuspaceSidebar('zh'),
          '/user-manual/': userManualSidebar('zh'),
          '/developer/': developerSidebar('zh'),
          '/legal/': legalSidebar('zh'),
          '/about/': aboutSidebar('zh'),
        },
        footer: {
          ...footerZh,
          links: sharedFooterLinks('zh'),
        },
        socialLinks: [],
        search: { provider: 'local' },
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      title: 'MeetEasy',
      description: 'MeetEasy product docs, user manual, and developer guide',
      themeConfig: {
        logo: '/images/logo.png',
        siteTitle: 'MeetEasy',
        outline: {
          label: 'On this page',
        },
        docFooter: {
          prev: 'Previous page',
          next: 'Next page',
        },
        sidebarMenuLabel: 'Menu',
        returnToTopLabel: 'Return to top',
        darkModeSwitchLabel: 'Appearance',
        lightModeSwitchTitle: 'Switch to light theme',
        darkModeSwitchTitle: 'Switch to dark theme',
        nav: [
          { text: 'Product', link: '/en/product/', activeMatch: '/en/product/' },
          { text: 'VisuSpace AI Low-code', link: '/en/visuspace/', activeMatch: '/en/visuspace/' },
          { text: 'User Manual', link: '/en/user-manual/admin/', activeMatch: '/en/user-manual/' },
          { text: 'Developer', link: '/en/developer/architecture', activeMatch: '/en/developer/' },
          { text: 'Legal', link: '/en/legal/', activeMatch: '/en/legal/' },
          { text: 'About', link: '/en/about/', activeMatch: '/en/about/' },
        ],
        sidebar: {
          '/en/product/': productSidebar('en'),
          '/en/visuspace/': visuspaceSidebar('en'),
          '/en/user-manual/': userManualSidebar('en'),
          '/en/developer/': developerSidebar('en'),
          '/en/legal/': legalSidebar('en'),
          '/en/about/': aboutSidebar('en'),
        },
        footer: {
          ...footerEn,
          links: sharedFooterLinks('en'),
        },
        socialLinks: [],
        search: { provider: 'local' },
      },
    },
  },
  }),
)
