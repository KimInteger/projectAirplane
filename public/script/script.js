const keyboard = document.getElementsByTagName('button');

const blackKey = document.getElementsByClassName('black');

const whiteKey = document.getElementsByClassName('white');

function changeC(e) {
  e.target.style.backgroundColor = 'rgb(232,232,232)';
  setTimeout(()=>{
    e.target.style.backgroundColor = 'rgb(255,255,255)';
  },100);
};

console.log(whiteKey);

for(let i = 0; i < whiteKey.length; i++){
  whiteKey[i].addEventListener('click',changeC);
};