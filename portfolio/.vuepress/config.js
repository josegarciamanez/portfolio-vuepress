module.exports = {
    title: "José García Máñez",
    description: "Web Developer",
    base: "/",
    themeConfig: {
        logo: "",
        footer: "Ⓒ josegarciamanez",
        nav: [
            { text: "Portfolio", link: "/works", position: "left", external: false },
            { text: "Currículum", link: "/curriculum", position: "left", external: true },
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