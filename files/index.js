let menu = document.getElementById('menu');
let close = document.getElementById('close');
let nvbr = document.getElementById('nvbr');
//let menu = document.getElementById('menu');

if(menu){
    menu.addEventListener('click',()=>{
        nvbr.classList.add('activemenu');
    })
}
if(close){
    close.addEventListener('click',()=>{
        nvbr.classList.remove('activemenu');
    })
}