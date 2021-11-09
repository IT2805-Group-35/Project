/*
Top common items
 */
const menuItems = [
    {
        name: "Forside",
        link: "index.html",
    },
    {
        name: "Om meg",
        link: "about.html",
    },
    {
        name: "portfolio",
        link: "portfolio.html"
    },
    {
        name: "Kontakt",
        link: "contact.html",
    },
];

/*
Social network links and icons
 */
const socials = [
    {
        name: 'Instagram',
        icon: 'icons/instagram.svg',
        link: 'https://instagram.com',
    },
    {
        name: 'Facebook',
        icon: 'icons/facebook.svg',
        link: 'http://facebook.com',
    },
];

/*
Footer content
 */
const footer = document.createElement('footer');
footer.textContent = 'Copyright © 2021 Johansen Luftfoto';

const windowHeight = window.innerHeight || document.documentElement.clientHeight;
const windowWidth = window.innerWidth || document.documentElement.clientWidth;

const menu = document.createElement('div');
menu.id = 'menu';
menu.style.zIndex = 1000;

menuItems.forEach(item => {
    const node = document.createElement('a');
    node.href = item.link
    node.textContent = item.name;
    menu.appendChild(node);
});

socials.forEach(item => {
    const node = document.createElement('a');
    node.href = item.link;
    const icon = document.createElement('img');
    icon.src = item.icon;
    icon.alt = item.name;
    node.appendChild(icon);
    menu.appendChild(node);
});

// Insert nodes
document.body.insertBefore(menu, document.body.childNodes[0]);
document.body.appendChild(footer);