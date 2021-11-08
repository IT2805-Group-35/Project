/*
Array of objects representing menu items
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

const menu = document.createElement('div');

menuItems.forEach(item => {
    const node = document.createElement('a');
    node.setAttribute('href', item.link);
    node.textContent = item.name;
    menu.appendChild(node);
});

document.body.insertBefore(menu, document.body.childNodes[0]);