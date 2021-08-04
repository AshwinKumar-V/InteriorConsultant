//Window Resize Listener
window.addEventListener('resize', function(){
    var a = window.screen.availWidth;

    if (a <= 620){
        document.getElementById('navlinks').style.visibility="hidden";
    }
    else{
        document.getElementById('navlinks').style.visibility="visible";
    }
});
