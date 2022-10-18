'use strict';
let accardion = document.getElementById('accardion');
accardion.addEventListener('click', ()=>{
    accardion.classList.toggle('active')
    let revealed = document.getElementById('revel');
        if(!revealed.style.height){
        revealed.style.height = revealed.scrollHeight+'px';
    } else {
        revealed.style.height =  null;
    }
});