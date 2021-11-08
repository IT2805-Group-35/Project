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
];

const common = document.createElement('div');

menuItems.forEach(item => {
    const node = document.createElement('a');
    node.href = item.link
    node.textContent = item.name;
    common.appendChild(node);
});

socials.forEach(item => {
    const node = document.createElement('a');
    node.href = item.link;
    const icon = document.createElement('img');
    icon.src = item.icon;
    icon.alt = item.name;
    icon.style.width = '1rem';
    node.appendChild(icon);
    common.appendChild(node);
});

// Insert at top of body
document.body.insertBefore(common, document.body.childNodes[0]);