// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";

const i18n = {
	install(Vue, locales) {
		// install a $t method that looks up the message from correct locale
		Vue.prototype.$t = function(key) {
			const lang = this.$root.lang;
			return locales[lang][key];
		};
	}
};

export default function(Vue, { router, head, isClient }) {
	// Set default layout as a global component
	Vue.component("Layout", DefaultLayout);
	Vue.use(i18n, {
		en: { "welcome-message": "hello" },
		zh: { "welcome-message": "你好" },
		nl: { "welcome-message": "Hallo" }
	});
}
