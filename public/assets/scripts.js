const md = window.markdownit({
    html: true,
    linkify: true,
    typographer: true,
    breaks: true
}).use(window.markdownItTocDoneRight)
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

function loadMarkdown(file) {
    fetch(file)
        .then(response => {
            if (!response.ok) throw new Error("HTTP Error " + response.status);
            return response.text();
        })
        .then(markdown => {
            document.getElementById("content").innerHTML = md.render(markdown);
        })
        .catch(error => {
            document.getElementById("content").innerHTML = "<p>페이지를 불러오는 데 실패했습니다.</p>";
            console.error("Error loading markdown:", error);
        });
}
