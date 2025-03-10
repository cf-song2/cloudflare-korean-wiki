const md = window.markdownit();

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
        .then(response => response.text())
        .then(markdown => {
            document.getElementById("content").innerHTML = md.render(markdown);
        })
        .catch(error => {
            document.getElementById("content").innerHTML = "<p>페이지를 불러오는 데 실패했습니다.</p>";
            console.error("Error loading markdown:", error);
        });
}
