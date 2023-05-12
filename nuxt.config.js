import { description, title } from "./settings";
import zhCn from "./lang/zh-cn/index.js";
import enUs from "./lang/en-us/index.js";

export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title,
        htmlAttrs: {
            lang: "zh-CN",
        },
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { hid: "description", name: "description", content: description },
            { name: "format-detection", content: "telephone=no" },
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ["element-ui/lib/theme-chalk/index.css", "csslab/reset.css",'@/assets/css/main.less'],
    buildModules: ["@nuxtjs/style-resources","@nuxtjs/svg"],
    styleResources: {
        less: ["csslab/base.less", "./assets/css/var.less"],
    },

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: ["@/plugins/element-ui"],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        [
            "@nuxtjs/i18n",
            {
                defaultLocale: "zh-cn",
                locales: [
                    {
                        code: "en-us",
                        iso: "en-US",
                        text: "English",
                    },
                    {
                        code: "zh-cn",
                        iso: "zh-CN",
                        text: "中文",
                    },
                ],
                vueI18n: {
                    locale: "zh-cn",
                    fallbackLocale: "zh-cn",
                    messages: {
                        "en-us": enUs,
                        "zh-cn": zhCn,
                    },
                },
                detectBrowserLanguage: {
                    useCookie: true,
                },
            },
        ],
    ],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        extractCSS: true,
        transpile: [/^element-ui/],
    },
};
