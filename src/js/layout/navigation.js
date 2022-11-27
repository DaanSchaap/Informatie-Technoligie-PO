// ------------ //
// Nav Settings //
// ------------ //

let navSettings = [
    {
        label: "Home",
        href: "./",
        pageTitle: "Home",
        pageDescription: "Website Description",
        type: "link"
    },
    {
        label: "About",
        href: "./About.html",
        pageTitle: "About",
        pageDescription: "About Website",
        type: "link"
    },
    {
        label: "Contact",
        href: "./Contact.html",
        pageTitle: "Contact",
        pageDescription: "Contact.............",
        type: "link"
    }
];

// -------- //
// Nav Code //
// -------- //

document.body.insertAdjacentHTML(`afterbegin`, `<nav class="primary-navigation"><ul class="primary-navigation-items"></ul></nav>`);

navSettings.forEach(function (index, value) {
    if (index.type === "link") {
        document.querySelector(`.primary-navigation-items`).insertAdjacentHTML(`beforeend`, `<li class="primary-navigation-item page-` + index.label.toLowerCase() + ` color-page-` + index.label.toLowerCase() + `"><a href="` + index.href + `">` + index.label + `</a></li>`);

        console.log("1:" + index.label);
        console.log("2: /Informatie-Technoligie-PO" + index.href.replace("./", "/"));
        console.log("3: " + location.pathname);
        if ("Informatie-Technoligie-PO" + index.href.replace("./", "/") === location.pathname) {
            document.querySelector(`.page-` + index.label.toLowerCase()).classList.add(`primary-navigation-nav-active`);

            document.querySelector(`:root`).style.setProperty(`--color`, `var(--page-` + index.label.toLowerCase() + `, var(--accent-primary))`)
        }
    }
});
