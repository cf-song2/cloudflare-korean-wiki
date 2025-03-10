const md = window.markdownit({
    html: true,
    linkify: true,
    typographer: true,
    breaks: true
})
.use(window.markdownitEmoji)   
.use(window.markdownitSub)     
.use(window.markdownitSup)     
.use(window.markdownitFootnote);

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
    fetch(file)
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
