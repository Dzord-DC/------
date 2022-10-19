'use strict';


const closeModal = (e)=>{
    modalAreal.style.opacity = 0;
    modalAreal.style['pointer-events'] = 'none';
};
const openModel = ()=>{
    modalAreal.style.opacity = 1;
    modalAreal.style['pointer-events'] = 'auto';
};

const accardionfoo = ()=>{
    accardion.classList.toggle('active')
    let revealed = document.getElementById('revel');
        if(!revealed.style.height){
        revealed.style.height = revealed.scrollHeight+'px';
    } else {
        revealed.style.height =  null;
    }
    };

const accardion = document.getElementById('accardion');
accardion.addEventListener('click', accardionfoo);
const modalAreal = document.querySelector('#closeArea');
//modalAreal.addEventListener('click', closeModal);
const buttons = document.querySelectorAll('.button');
buttons.forEach(btn=>{
    btn.addEventListener('click', openModel);
});
document.querySelector('.modal').addEventListener('click',(e)=>{
    e.stopPropagation();
});
    modalAreal.onclick= closeModal;