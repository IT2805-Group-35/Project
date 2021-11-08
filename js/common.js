/*
Top common items
 */
const menuItems = [
    {
        name: "Item 1",
        link: "item1.html",
    },
    {
        name: "Item 2",
        link: "item2.html",
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

const menu = document.createElement('div');
menu.id = 'menu';

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
    icon.style.width = '1rem';
    node.appendChild(icon);
    menu.appendChild(node);
});

// Insert nodes
document.body.insertBefore(menu, document.body.childNodes[0]);
document.body.appendChild(footer);