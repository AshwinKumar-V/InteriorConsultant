function menu(){
    var a = window.screen.availWidth;

    if (a <= 620){
        document.getElementById('navlinks').style.display="none";
        document.getElementById('menu').style.display="block";
    }
    else{
        document.getElementById('menu').style.display="none";
        document.getElementById('navlinks').style.display="flex";
    }
}

//Window Resize Listener
window.addEventListener('resize', function(){
    menu()
});
