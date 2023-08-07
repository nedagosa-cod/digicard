const toogleCaract = document.querySelectorAll('.btn-toggle')
const menuMobile = document.querySelector('#menu-mobile')


toogleCaract.forEach(el=>{
    el.addEventListener('click', ()=> {
        el.parentNode.nextElementSibling.classList.toggle('hide')
    })
})

document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}


menuMobile.onclick = ()=> {
    menuMobile.previousElementSibling.hasAttribute('style') ?  
        menuMobile.previousElementSibling.style.display =  'none' : 
        menuMobile.previousElementSibling.style.display = 'flex'
    menuMobile.classList.toggle(menuMobile.className.includes('fa-bars') ? 'fa-xmark' :  'fa-bars')
}