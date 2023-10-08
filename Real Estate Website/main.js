const navbar=document.getElementById("navbar");
const navBtn=document.getElementById("navBtn");
let bol=false;
const offset=90;

// add scroll event listener to the page
window.addEventListener("scroll", ()=>{
    // if the page is crolled by 90px
    if(pageYOffset>offset && bol===false){
        // Add the classes to change the navbar to the light version
        // change bg to white
        navbar.classList.add("bg-light");
        // change text to black
        navbar.classList.remove("navbar-dark");
        navbar.classList.add("navbar-light");
        // Add a shadow
        navbar.style.boxShadow="0px 5px 15px rgba(0, 0, 0, 0.3";
        // prevents the event from firing more than once
        bol=true;
    }
    // Remove all classes when the page is scrolled back up
    else if(pageYOffset<=offset &&bol===true){
        // change the background babck to transparent
        navbar.classList.remove("bg-light");
        // change the text back to white
        navbar.classList.remove("navbar-light");
        navbar.classList.add("navbar-dark");
        // Remove the shadow
        navbar.style.boxShadow="none";
        // prevents the event from firing more than once
        bol=false;
    }
});

// disabling inspect element
document.addEventListener("contextmenu", function(e){
    e.preventDefault(); //this prevents right click
});
document.onkeydown=function(e){
    if(event.keycode==123){
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode=="I".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode=="C".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode=="J".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.keyCode=="U".charCodeAt(0)){
        return false;
    }
};