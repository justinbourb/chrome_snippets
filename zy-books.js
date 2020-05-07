let blackAndWhiteItems = ['zb-card-content', 'zb-card', 'route-container', 'section-nav'];
let greyBackgroundItems = ['static-container', 'interactive-activity-container'];
let colorWhiteItems = ['text', 'label', 'activity-instructions', 'term', 'explanation', 'show-again'];



function forEachFunc(array, background, color) {
    array.forEach((item) => {
        if (background != 'null') {
            document.getElementsByClassName(item)[0].style.backgroundColor = background;
        }
        if (color) {
            document.getElementsByClassName(item)[0].style.color = color;
        }
    })
};

forEachFunc(blackAndWhiteItems, 'black', 'white');
forEachFunc(greyBackgroundItems, '#565656');
forEachFunc(colorWhiteItems, 'null', 'white');
