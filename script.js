let menu=document.getElementById('menu')
let navbar=document.querySelector('.navbar')
menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll=()=>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer.', 'Backend Developer.','Web Desginer.','UI/UX Designer.'],
    typeSpeed: 80,
    backSpeed:50,
    backDelay:1200,
    loop:true,
  });