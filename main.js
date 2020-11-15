
// ////////arrow ap///////////////////////
let arrowTop = document.querySelector('.arrowTop');
arrowTop.addEventListener('click', function(){
  window.scrollTo(pageXOffset, 0);
})
window.addEventListener('scroll',function(){
if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
  arrowTop.classList.add('arrow__active');
}else{
  arrowTop.classList.remove('arrow__active');
}
})



// //////////////////////////////////
// function ibg() {
//     let ibg = document.querySelectorAll(".ibg");
//     for (var i = 0; i < ibg.length; i++) {
//       if (ibg[i].querySelector(".img")) {
//         ibg[i].style.backgroundImage =
//           "url(" + ibg[i].querySelector(".img").getAttribute("src") + ")";
//       }
//     }
//   }
  
//   ibg();

  /////////active burger///////////////////////////////
let burger = document.querySelector(".header__burger");

burger.addEventListener('click', function(){
  burger.classList.toggle('burger__active');
document.querySelector('.header__meny').classList.toggle('header__menyActive');
})

let headerUl = document.querySelector('.header__ul');

let activeLi = document.querySelectorAll('.active__li');
for(let i = 0; i<activeLi.length; i++){
  activeLi[i].addEventListener('click',function(){
    document.querySelector('.header__meny').classList.toggle('header__menyActive');
    burger.classList.toggle('burger__active');
  })
}



