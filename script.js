AOS.init();
function toggleMenu() {
	const menu = document.querySelector(".menu-links");
	const icon = document.querySelector(".hamburger-icon");

    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// SELECTING FIRST LETTER function
window.onload = function () {
    var elements = document.querySelectorAll(".each-word");

    for (var i = 0; i < elements.length; i++) {
        var htmlContent = elements[i].innerHTML;
        var modifiedContent = htmlContent.replace(
            /(?:<[^>]*>)|(\b[a-z])([a-z]+)?\b/gim,
            function (match, p1, p2) {
                if (p1) {
                    return "<span class='first-letter'>" + p1 + "</span>" + (p2 || "");
                } else {
                    return match; 
                }
            }
        );
        elements[i].innerHTML = modifiedContent;
    }
};

document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark');
    console.log('clicked');
});