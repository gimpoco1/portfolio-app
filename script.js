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
// function addDarkmodeWidget() {
//     new Darkmode().showWidget();
//   }
//   window.addEventListener('load', addDarkmodeWidget);

//   const options = {
//     bottom: '64px', // default: '32px'
//     right: 'unset', // default: '32px'
//     left: '32px', // default: 'unset'
//     time: '0.5s', // default: '0.3s'
//     mixColor: '#fff', // default: '#fff'
//     backgroundColor: '#fff',  // default: '#fff'
//     buttonColorDark: '#100f2c',  // default: '#100f2c'
//     buttonColorLight: '#fff', // default: '#fff'
//     saveInCookies: false, // default: true,
//     label: '🌓', // default: ''
//     autoMatchOsTheme: true // default: true
//   }
  
//   const darkmode = new Darkmode(options);
//   darkmode.showWidget();
