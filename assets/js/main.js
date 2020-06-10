$(document).ready(function(){
  "use strict";
  $('#full-screen-slider').slick({
    arrows: false,
    dots: true,
  });
})


function openNav() {
  document.getElementById("mySidenav").style.width = "160px";
  document.getElementById("bottom-nav").style.height = "55px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("bottom-nav").style.height = "0";
}


function openSearch(){
  document.getElementById('search-div').style.height = "100%";
}

function closeSearch(){
  document.getElementById('search-div').style.height = "0";
}

let boxOpen = false;
let arrowGetQutoto = document.querySelector("#get-qutu i");
let qutoBox = document.getElementById('get-qutu');
arrowGetQutoto.addEventListener('click', ()=>{
  if(!boxOpen){
    qutoBox.style.left = "0px";
    arrowGetQutoto.classList.remove('fa-chevron-right');
    arrowGetQutoto.classList.add('fa-chevron-left');
  }else{
    qutoBox.style.left = "-150px";
    arrowGetQutoto.classList.remove('fa-chevron-left');
    arrowGetQutoto.classList.add('fa-chevron-right');
  }
  boxOpen = !boxOpen;
})