// Select all images
const images = document.querySelectorAll('.images img');

// Add a scroll event to the page
window.addEventListener('scroll', ()=>{
    /*
        Move the images to the top by adding the scrrolled amount and converting it to a negative number.

        Divide by a bigger number to make the effect more subtle. We apply this to make farther object move slower, and closer objects move faster.
    */
    images[0].style.top = "-" + (window.scrollY/1.2)+"px";
    images[1].style.top = "-" + (window.scrollY/3.5)+"px";
    images[2].style.top = "-" + (window.scrollY/6)+"px";
    images[3].style.top = "-" + (window.scrollY/7)+"px";
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
    if(e.ctrlKey && e.keyCode=="S".charCodeAt(0)){
        return false;
    }
};