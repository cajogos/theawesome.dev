export default {
    target: 'static',
    head: {
        title: 'The Awesome Dev',
        meta: [
            {
                charset: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'default-description',
                name: 'description',
                content: 'Celebrating being a developer.'
            }
        ],
        link: [
            {
                rel: 'icon',
                type: 'image/png',
                href: '/favicon.png'
            }
        ]
    },
    modules: [
        'bootstrap-vue/nuxt',
        '@nuxtjs/style-resources',
    ],
    styleResources: {
        scss: [
            'bootstrap/scss/_functions.scss',
            'bootstrap/scss/_variables.scss',
            'bootstrap/scss/_mixins.scss',
            'bootstrap-vue/src/_variables.scss',
            '~/assets/css/_variables.scss',
        ]
    },
    css: [
        '~/assets/css/main.scss'
    ]
}
