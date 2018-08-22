module.exports = {
    title: "José García Máñez",
    description: "Web Developer",
    base: "/",
    themeConfig: {
        logo: "",
        footer: "Ⓒ josegarciamanez",
        nav: [
            { text: "Portfolio", link: "/", position: "left", external: false },
            { text: "Facebook", link: "https://www.facebook.com/profile.php?id=590082247", position: "left", external: true },
            { text: "Email", link: "mailto:josegarciamanez@gmail.com", position: "right", external: true },
            { text: 'Tlfn: 600083031', link: '', position: 'right', external: false },
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