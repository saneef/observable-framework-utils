// See https://observablehq.com/framework/config for documentation.
export default {
	// title: "Observable Framework Utils",

	pages: [
		{
			name: "Pretty Table",
			path: "/docs/pretty-table",
		},
	],

	// Content to add to the head of the page, e.g. for a favicon:
	head: '<link rel="icon" href="observable.png" type="image/png" sizes="32x32">',

	// The path to the source root.
	root: "src",

	sidebar: true, // whether to show the sidebar
	toc: true, // whether to show the table of contents
	search: true, // activate search
	typographer: true, // smart quotes and other typographic improvements
	cleanUrls: true, // drop .html from URLs
};
