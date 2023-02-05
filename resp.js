burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
rightnav=document.querySelector('.rightnav')
navlist=document.querySelector('.nav-list')

burger.addEventListener('click',()=>{
    rightnav.classList.toggle('vclass-resp');
    navlist.classList.toggle('vclass-resp');
    navbar.classList.toggle('hnav-resp');
})