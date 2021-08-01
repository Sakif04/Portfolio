let lastName=document.querySelector('.last-name');
let firstName=document.querySelector('.first-name');
let rotate=()=>{
    firstName.classList.add('rotate');
    firstName.style['opacity']=1;
    lastName.style['opacity']=1;
}
lastName.addEventListener('animationend',rotate);

