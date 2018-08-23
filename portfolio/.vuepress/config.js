module.exports = {
    title: "José García Máñez | Portfolio",
    description: "Web Developer",
    base: "/",
    themeConfig: {
        logo: "upload/logo.jpg",
        footer: "Ⓒ josegarciamanez",
        // ga: 'UA-106978472-2',
        nav: [
            { text: "Portfolio", link: "/", position: "left", external: false },
            { text: "Currículum", link: "/curriculum/", position: "left", external: false },
            { text: "Email", link: "mailto:josegarciamanez@gmail.com", position: "right", external: true },
            { text: 'Teléfono', link: "tel:600083031", position: 'right', external: true },
        ]
    },
    head: [
        ['link', { rel: "icon", href: "favicon-32x32.png" }],
        ['link', { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.0.13/css/all.css' }]
    ],
    markdown: {
        anchor: {
            permalink: false
        }
    }
};