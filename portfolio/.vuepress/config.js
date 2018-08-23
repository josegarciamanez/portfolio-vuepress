module.exports = {
    title: "José García Máñez | Portfolio",
    description: "Web Developer",
    base: "/",
    themeConfig: {
        logo: "upload/logo.jpg",
        footer: "Ⓒ josegarciamanez",
        nav: [
            { text: "Portfolio", link: "/", position: "left", external: false },
            { text: "Currículum", link: "/curriculum/", position: "left", external: false },
            { text: "Email", link: "mailto:josegarciamanez@gmail.com", position: "right", external: true },
            { text: 'Teléfono', link: "tel:600083031", position: 'right', external: true },
        ]
    },
    head: [
        ['link', { rel: "icon", href: "favicon-32x32.png" }]
    ],
    markdown: {
        anchor: {
            permalink: false
        }
    }
};



// module.exports = {
//     title: 'VueNasPracticas',
//     description: 'Blog informativo sobre el universo Vue.js',
//     logo: './img/logo.png',
//     ga: 'UA-106978472-2',
//     head: [
//         ['link', { rel: 'icon', href: `/icons/favicon.ico` }],
//         ['link', { rel: 'manifest', href: '/manifest.json' }],
//         ['link', { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.0.13/css/all.css' }],
//         ['meta', { name: 'theme-color', content: '#32485f' }],
//         ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
//         ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
//         ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
//         ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#32485f' }],
//         ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
//         ['meta', { name: 'msapplication-TileColor', content: '#58c085' }],
//         ['script', { src: '//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5b24f603f12c175c' }]
//     ],
//     serviceWorker: true,
//     themeConfig: {
//         lastUpdated: 'Última Actualización',
//         search: true,
//         searchMaxSuggestions: 10,
//         nav: [{
//                 text: 'Categorías',
//                 items: [
//                     { text: 'Cursos', link: '/vueschool' },
//                     { text: 'Libros', link: '/vuecookbook' },
//                     { text: 'VideoTutoriales', link: '/carlosazaustre' },
//                     { text: 'Componentes', link: '/vueSocialSharing' },
//                     { text: 'Herramientas', link: '/sarah' },
//                     { text: 'Eventos', link: '/london' }
//                 ]
//             },
//             {
//                 text: 'Guías Oficiales',
//                 items: [
//                     { text: 'Vue', link: 'https://vuejs.org/' },
//                     { text: 'Vue-Cli', link: 'https://cli.vuejs.org/' },
//                     { text: 'Vuex', link: 'https://vuex.vuejs.org/' },
//                     { text: 'Vue-router', link: 'https://router.vuejs.org/' },
//                     { text: 'Vuepress', link: 'https://vuepress.vuejs.org/' },
//                     { text: 'Nuxt', link: 'https://nuxtjs.org/guide' }
//                 ]
//             },
//             {
//                 text: 'Blogs',
//                 items: [
//                     { text: 'Alligator.io', link: 'https://alligator.io/' },
//                     { text: 'VueJS Developers', link: 'http://vuejsdevelopers.com/' },
//                     { text: 'Blog - Alex Jover', link: 'https://alexjoverm.github.io/tags/VueJS/' },
//                     { text: 'Dev.to - Vue.js', link: 'https://dev.to/t/vuejs' },
//                     { text: 'Medium - Vue.js', link: 'https://medium.com/tag/vuejs' },
//                     { text: 'Css Tricks - Vue.js', link: 'https://css-tricks.com/search-results/?q=vuejs' },
//                     { text: 'Jaime Olmo', link: 'http://www.jaimeolmo.com/tag/vuejs/' },
//                     { text: 'Yo, Toledano', link: 'https://yo.toledano.org/tag/vuejs.html' },
//                     { text: 'La Espora del Hongo', link: 'https://laesporadelhongo.com/tag/vuejs/' }
//                 ],
//             },
//             {
//                 text: 'Recursos',
//                 items: [
//                     { text: 'Awesome Vue', link: 'https://github.com/vuejs/awesome-vue' },
//                     { text: 'Codepen Vue.js', link: 'https://codepen.io/tag/vuejs/' },
//                     { text: 'Vue.js Script', link: 'http://www.vuescript.com/' },
//                     { text: 'Vue.js Cheatsheet', link: 'https://vuejs-tips.github.io/cheatsheet/' },
//                     { text: 'Vue.js News', link: 'https://www.getrevue.co/profile/vuenewsletter' },
//                     { text: 'Vue.js Examples', link: 'https://vuejsexamples.com/' },
//                     { text: 'Vue Curated', link: 'https://curated.vuejs.org/' }
//                 ]
//             }
//         ],
//         sidebar: [
//             // '/',
//             {
//                 title: 'Cursos',
//                 collapsable: true,
//                 children: [
//                     '/vueschool',
//                     '/wmedia'
//                 ]
//             },
//             {
//                 title: 'Libros',
//                 collapsable: true,
//                 children: [
//                     ['/vuecookbook', 'Vue.js 2 Cookbook'],
//                 ]
//             },
//             {
//                 title: 'VideoTutoriales',
//                 collapsable: true,
//                 children: [
//                     ['/carlosazaustre', 'Carlos Azaustre - Curso Vue en Español']
//                 ]
//             },
//             {
//                 title: 'Componentes',
//                 collapsable: true,
//                 children: [
//                     ['/vueSocialSharing', 'Social Sharing'],
//                 ]
//             },
//             {
//                 title: 'Herramientas',
//                 collapsable: true,
//                 children: [
//                     ['/sarah', 'Vue VS Code Extension Pack']
//                 ]
//             },
//             {
//                 title: 'Eventos',
//                 collapsable: true,
//                 children: [
//                     ['/london', 'Vue.js London']
//                 ]
//             }

//         ]
//     }
// }