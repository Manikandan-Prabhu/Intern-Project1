//For Preloader
window.addEventListener('load', () =>{
    const preload = document.querySelector('.preload');
    preload.classList.add('preload-finish');
}  
)
// To Hide Navbar while scroll ( Not Working)
/*var prevscrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentposition = window.pageYOffset;
    if(prevscrollpos>currentposition){
        document.getElementById("navtop").style.top ="0";
    }
    else{
        document.getElementById("navtop").style.top ="-";
    }
    prevscrollpos = currentposition;
}

// Background color Transition
let page3 = document.querySelector('.page3');
let height = page3.offsetHeight;
window.addEventListener('scroll',bgcolor);
function bgcolor(){
    if(this.scrollY > height / 1.5){
        document.body.classList.add(bg-color);
    }else
    {
        document.body.classList.remove(bg-color);
    }
}*/
