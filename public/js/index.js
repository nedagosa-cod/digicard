const toogleCaract = document.querySelectorAll('.btn-toggle')


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