const md = window.markdownit({
    html: true,
    linkify: true,
    typographer: true,
    breaks: true
})
.use(markdownitEmoji)   
.use(markdownitSub)     
.use(markdownitSup)     
.use(markdownitFootnote);

function toggleSubmenu(id) {
    let submenu = document.getElementById(id);
    let parentItem = submenu.previousElementSibling;

    if (submenu.style.display === "block") {
        submenu.style.display = "none";
        parentItem.classList.remove("open");
    } else {
        submenu.style.display = "block";
        parentItem.classList.add("open");
    }
}

function loadMarkdown(file, title, url) {
    fetch(`/${file}`)
        .then(response => response.text())
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

window.addEventListener("popstate", function (event) {
    if (event.state) {
        loadMarkdown(event.state.path, document.title, event.state.path);
    }
});

function loadPageFromURL() {
    let path = window.location.pathname;
    
    if (path === "/") {
        goHome();
    } else if (path.startsWith("/stream/")) {
        let file = `.${path}.md`;
        loadMarkdown(file, "Stream - Cloudflare Wiki", path);
    }
}

function goHome() {
    document.getElementById("content").innerHTML = `
        <h2>Cloudflare 소개 페이지에 오신 것을 환영합니다!</h2>
        <p>이 페이지는 현재 Cloudflare의 Pages로 서빙됩니다...</p>
    `;
    window.history.pushState({ path: "/" }, "Cloudflare Wiki", "/");
    document.title = "Cloudflare Wiki";
    window.location.href = "/";
}

document.addEventListener("DOMContentLoaded", loadPageFromURL);
