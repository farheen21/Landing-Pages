const btnHamburger = document.querySelector("#btnHamburger");
const header = document.querySelector('.header');
const overlay = document.querySelector(".overlay");
const fadeElems = document.querySelectorAll('.has-fade');


btnHamburger.addEventListener('click' , function(){
    console.log('hey');
    if(header.classList.contains('open')) {// hHamburger Menu Closed
        header.classList.remove('open');
        overlay.classList.remove('fade-in');
        overlay.classList.add('fade-out');
    }
    else {
        //Hamburger Menu opens
       header.classList.add('open');
       fadeElems.forEach(function(element) {
        element.classList.remove('fade-out');
        element.classList.add('fade-in');
       })
       
    }
})