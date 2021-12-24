// paste code into chrome console to switch pdfs to dark mode
// source: https://superuser.com/questions/1527410/how-can-i-preview-pdfs-with-google-chrome-in-dark-mode
var cover = document.createElement("div");
let css = `
    position: fixed;
    pointer-events: none;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #67645e;
    mix-blend-mode: difference;
    z-index: 1;
    opacity: .5;
`
cover.setAttribute("style", css);
document.body.appendChild(cover);
