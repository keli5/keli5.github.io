let navbar = document.getElementById('navbar');
let header = document.getElementById('title');
let pageMap = { '/': 'Home', '/projects.html': 'Projects' };
let pages = Object.keys(pageMap);
let pageIndex = {};

for (let i = 0; i < pages.length; i++) {
    let curPageName = pageMap[pages[i]];

    pageIndex[pages[i]] = document.createElement('a');
    let curPageElement = pageIndex[pages[i]];
    curPageElement.href = pages[i];

    if (pages[i] == document.location.pathname) {
        curPageElement.className = 'currentpage';
        console.log("t")
    }

    curPageElement.innerHTML = curPageName;
    navbar.appendChild(curPageElement);
    console.log(curPageElement.outerHTML)
}
