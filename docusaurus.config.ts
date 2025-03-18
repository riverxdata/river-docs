import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
	title: "RiverXData",
	tagline:
		'"Simple, Effective, Efficient" powered by River (nttg8100@gmail.com)',
	favicon: "img/logo-riverxdata-02.png",

	// Set the production url of your site here
	url: "https://riverxdata.github.ios",
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: "/river-docs/",
	trailingSlash: false,
	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: "riverxdata", // Usually your GitHub org/user name.
	projectName: "river-docs", // Usually your repo name.

	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: "en",
		locales: ["en"],
	},

	presets: [
		[
			"classic",
			{
				docs: {
					sidebarPath: "./sidebars.ts",
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl: "https://github.com/riverxdata",
				},
				blog: {
					showReadingTime: true,
					feedOptions: {
						type: ["rss", "atom"],
						xslt: true,
					},
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl: "https://github.com/riverxdata",
					// Useful options to enforce blogging best practices
					onInlineTags: "warn",
					onInlineAuthors: "warn",
					onUntruncatedBlogPosts: "warn",
				},
				theme: {
					customCss: "./src/css/custom.css",
				},
			} satisfies Preset.Options,
		],
	],

	themeConfig: {
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
		image: "img/docusaurus-social-card.jpg",
		navbar: {
			title: "RiverXData",
			logo: {
				alt: "RiverXData Logo",
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
							to: "/docs/Introduction",
						},
					],
				},
				{
					title: "Community",
					items: [
						{
							label: "Facebook",
							href: "https://www.facebook.com/groups/1134438583997171",
						},
					],
				},
			],
			copyright: `Copyright © ${new Date().getFullYear()} RiverXData`,
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
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
