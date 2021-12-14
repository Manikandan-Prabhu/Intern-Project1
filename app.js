//For Preloader
window.addEventListener('load', () =>{
    const preload = document.querySelector('.preload');
    preload.classList.add('preload-finish');
}  
)
// To Hide Navbar while scroll ( Not Working Dont know Why...)
var prevscrollpos = window.pageYOffset;
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