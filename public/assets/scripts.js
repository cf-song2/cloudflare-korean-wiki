if (window.md === undefined) {
    window.md = window.markdownit({
        html: true,
        linkify: true,
        typographer: true,
        breaks: true
    })
    .use(markdownitEmoji)   
    .use(markdownitSub)     
    .use(markdownitSup)     
    .use(markdownitFootnote);
}

function toggleSubmenu(id) {
    let submenu = document.getElementById(id);
    let parentItem = submenu ? submenu.previousElementSibling : null;

    if (!submenu || !parentItem) return;

    if (submenu.style.display === "block") {
        submenu.style.display = "none";
        parentItem.classList.remove("open");
    } else {
        submenu.style.display = "block";
        parentItem.classList.add("open");
    }
}

function loadMarkdown(file, title, url) {
    let fullPath = `/${file}`.replace("//", "/");

    fetch(fullPath)
        .then(response => {
            if (!response.ok) throw new Error("Markdown 파일을 찾을 수 없음");
            return response.text();
        })
        .then(markdown => {
            document.getElementById("content").innerHTML = md.render(markdown);
            window.history.pushState({ path: url }, title, url);
            document.title = title;
        })
        .catch(error => {
            document.getElementById("content").innerHTML = "<p>페이지를 불러오는 데 실패했습니다.</p>";
            console.error("Error loading markdown:", error);
        });
}

function redirectToPage(url) {
    window.location.href = url;
}

window.addEventListener("popstate", function (event) {
    if (!event.state || event.state.path === "/") {  
        goHome();
        return;
    }

    if (event.state.path.includes(".html")) {
        loadHTML(event.state.path, document.title, event.state.path);
    } else {
        loadMarkdown(event.state.path, document.title, event.state.path);
    }
});

function loadPageFromURL() {
    let path = window.location.pathname;

    if (path === "/") {
        goHome();
    } else if (path.endsWith(".html")) {
        loadHTML(path, "Cloudflare Wiki", path);
    } else {
        loadMarkdown(`${path}.md`, "Cloudflare Wiki", path);
    }
}

function goHome() {
    if (window.location.pathname === "/") return;
    window.location.href = "/";

}

document.addEventListener("DOMContentLoaded", loadPageFromURL);
