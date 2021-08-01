const menu=document.querySelector('.menu');
const list=document.querySelector('.list');
    
function toggle(){
    list.classList.toggle('show');
}
menu.addEventListener('click',toggle)