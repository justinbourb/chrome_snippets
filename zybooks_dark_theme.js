let blackAndWhiteItems = ['zb-card-content', 'zb-card', 'route-container', 'section-nav', 'static-container-payload', 'container-resource-payload'];
let greyBackgroundItems = ['static-container', 'interactive-activity-container'];
let colorWhiteItems = ['text', 'label', 'activity-instructions', 'term', 'explanation', 'show-again', 'title'];
let colorBlackItems = ['activity-type', 'activity-title', 'static-container'];
let colorOffWhiteItems = ['console', 'ace-editor', 'top-toolbar'];
let colorWhiteTagItems = ['h6', 'label'];
let blueBackgroundItems = ['zyblock'];


function forEachTagFunc(array, background, color) {
    array.forEach((item) => {
        try {
               for (let i = 0; i < document.getElementsByTagName(item).length; i++){
                    if (background != 'null') {
                        document.getElementsByTagName(item)[i].style.backgroundColor = background;
                    }
                    if (color) {
                        document.getElementsByTagName(item)[i].style.color = color;
                    }
                }
        } catch (err) {
            console.log (item, background, color, 'from array: ', array, 'is giving an error.');
        }
    });
}


function forEachClassFunc(array, background, color) {
    array.forEach((item) => {
        try {
               for (let i = 0; i < document.getElementsByClassName(item).length; i++){
                    if (background != 'null') {
                        document.getElementsByClassName(item)[i].style.backgroundColor = background;
                    }
                    if (color) {
                        document.getElementsByClassName(item)[i].style.color = color;
                    }
                }
        } catch (err) {
            console.log (item, background, color, 'from array: ', array, 'is giving an error.');
        }
    });
}
function runAll() {
    forEachClassFunc(blackAndWhiteItems, 'black', 'white');
    forEachClassFunc(greyBackgroundItems, '#565656');
    forEachClassFunc(colorWhiteItems, 'null', 'white');
    forEachClassFunc(colorBlackItems, 'null', 'black');
    forEachClassFunc(colorOffWhiteItems, '#ecedea');
    forEachTagFunc(colorWhiteTagItems, 'null', 'white');
    forEachClassFunc(blueBackgroundItems, '#0261bd');
    //adds eventlistener to forward and back navigation links
    for (let i = 0; i < document.getElementsByClassName('nav-text').length; i++) {
        document.getElementsByClassName('nav-text')[i].addEventListener('click', function() {
            setTimeout(function (){   
                //reapplies formating and nav eventlisteners after changing page
                runAll();
            }, 1000);
        })
    }
    //adds eventlistener to side navigation
    document.getElementById('ember939').addEventListener('click', function(){
        setTimeout(function (){
            //reapplies formating and nav eventlisteners after changing page
            runAll();
        }, 1000);
    })
}

runAll();

//this does not work correctly, answer text only turns white after second click
document.getElementsByTagName('body')[0].addEventListener('click',function(){
    setTimeout(forEachClassFunc(colorWhiteItems, 'null', 'white'),3000);
})


