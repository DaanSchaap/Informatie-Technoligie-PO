// ------------ //
// Nav Settings //
// ------------ //

let navSettings = [
    {
        label: "Home",
        href: "/",
        pageTitle: "Home",
        pageDescription: "Website Description",
        type: "link"
    },
    {
        label: "About",
        href: "/About.html",
        pageTitle: "About",
        pageDescription: "About Website",
        type: "link"
    }
];

// -------- //
// Nav Code //
// -------- //

document.body.insertAdjacentHTML(`afterbegin`, `<nav class="primary-navigation"><ul class="primary-navigation-items"></ul></nav>`);

navSettings.forEach(function (index, value) {
    if (index.type === "link") {
        document.querySelector(`.primary-navigation-items`).insertAdjacentHTML(`beforeend`, `<li class="primary-navigation-item primary-navigation-item-` + index.label.toLowerCase() + `"><a href="` + index.href + `">` + index.label + `</a></li>`);

        if (index.href === location.pathname) {
            document.querySelector(`.primary-navigation-item-` + index.label.toLowerCase()).classList.add(`primary-navigation-nav-active`);
        }
    }
});
















