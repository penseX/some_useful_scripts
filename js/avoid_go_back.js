// get currenet page url
var current_url = window.location.href;

// function:    1.replace previous page url with current page url
//              2.push current page url to browser's history
function noBack(){
    window.history.replaceState(null, null, current_url);
    window.history.pushState(null, null, current_url);
}
// call noBack funciton every 300 ms
setInterval(function (){
    noBack();
    // console.log("push: " + window.location.href);
},300);
// call noBack function 1000 times at once
setTimeout(function (){
    for(var i = 0; i< 1000; i++){
        noBack();
    }
}, 0);
// all noBack function when current page'html is laoded
document.addEventListener("DOMContentLoaded", function (){
    noBack();
});
// call noBack function if user click go-back buttion of browser
window.addEventListener("popstate", function(e) {
    noBack();
    window.location.href = current_url;
}, false);