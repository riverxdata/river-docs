import { themes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const config: Config = {
  title: "RiverXData",
  tagline:
    '"Simple, Effective, Efficient" powered by River (nttg8100@gmail.com)',
  favicon: "img/logo-riverxdata-02.png",

  url: "https://riverxdata.github.io",
  baseUrl: "/river-docs/",
  trailingSlash: false,

  organizationName: "riverxdata",
  projectName: "river-docs",

  onBrokenLinks: "throw",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          blogTitle: 'RiverXData Blog',
          blogDescription: 'Insights and updates from the RiverXData team',
          postsPerPage: 'ALL',
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          exclude: [
            '**/temp/**',
            '**/.pixi/**',
          ],
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 5,
    },
    announcementBar: {
      id: "support_us",
      content: "Comming soon: Support us on GitHub Sponsors! ❤️",
      backgroundColor: "#667eea",
      textColor: "#ffffff",
      isCloseable: false,
    },
    image: "img/docusaurus-social-card.jpg",
    customCss: require.resolve("./src/css/custom.css"),
    metadata: [
      {
        name: "keywords",
        content: "bioinformatics, data, infrastructure, hpc, cloud",
      },
      {
        name: "description",
        content:
          "RiverXData - Simple, Effective, Efficient bioinformatics data infrastructure.",
      },
      {
        name: "author",
        content: "RiverXData Team",
      },
    ],
    navbar: {
      logo: {
        alt: "RiverXData",
        src: "img/logo-riverxdata-02.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Documentation",
        },
        {
          to: "/blog",
          label: "Blog",
          position: "left",
        },
        {
          href: "https://github.com/riverxdata/river",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/overview",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "Facebook",
              href: "https://www.facebook.com/groups/1134438583997171",
            },
            {
              label: "GitHub",
              href: "https://github.com/riverxdata/river",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "About RiverXData",
              href: "https://riverxdata.github.io",
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} RiverXData`,
    },
    prism: {
      theme: themes.oneLight,
      darkTheme: themes.oneDark,
      additionalLanguages: [
        "bash",
        "docker",
        "groovy",
        "ini",
        "java",
        "javascript",
        "json",
        "nginx",
        "python",
        "r",
        "shell-session",
        "sql",
        "typescript",
        "yaml",
        "diff",
      ],
    },
  } satisfies Preset.ThemeConfig,
  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        indexDocs: true,
        indexBlog: true,
        indexPages: true,
        ignoreFiles: [
          /temp\//,
          /\.pixi\//,
        ],
      },
    ],
    [
      "@docusaurus/plugin-google-gtag",
      {
        trackingID: "G-0BBYTVWQV2",
        anonymizeIP: true,
      },
    ],
  ],
};

export default config;
