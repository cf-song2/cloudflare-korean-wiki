const md = window.markdownit();

function toggleMenu(id) {
    let menu = document.getElementById(id);
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

function toggleSubmenu(id) {
    let submenu = document.getElementById(id);
    submenu.style.display = (submenu.style.display === "block") ? "none" : "block";
}

function loadMarkdown(file) {
    fetch(file)
        .then(response => response.text())
        .then(markdown => {
            const htmlContent = md.render(markdown);
            document.getElementById("content").innerHTML = htmlContent;
        })
        .catch(error => {
            document.getElementById("content").innerHTML = "<p>페이지를 불러오는 데 실패했습니다.</p>";
            console.error("Error loading markdown:", error);
        });
}
