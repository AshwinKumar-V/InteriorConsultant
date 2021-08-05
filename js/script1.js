//Menu icon - Nav links toggling
function menu(){
    if (window.screen.availWidth <= 620){
        document.getElementById('navlinks').style.display="none";
        document.getElementById('menu').style.display="flex";
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

//Menu Icon Onclick Action
function drop(){
    document.getElementById('menu').classList.toggle('menu-drop');
}
