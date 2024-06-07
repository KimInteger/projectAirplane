const keyboard = document.getElementsByTagName('button');

const blackKey = document.getElementsByClassName('black');

const whiteKey = document.getElementsByClassName('white');

import { addOsc } from "./audioModule.js";

function hertzvalue(float) {
  return Number.parseFloat(float).toFixed(4);
};

let whiteSounds = [];
let blackSounds = [];


// 흰건반 1 3 5 6 8 10 12
// 검은건반 2 4 7 9 11

for(let i = 1; i < 13; i++) {
  if ( i < 6 ) {
    if( i % 2 === 0 ) {
      let black = hertzvalue(Math.pow(2,4)*55*Math.pow(2,(i-10)/12));
      blackSounds.push(black);
    } else {
      let white = hertzvalue(Math.pow(2,4)*55*Math.pow(2,(i-10)/12));
      whiteSounds.push(white);
    }
  } else {
    if( i % 2 === 0 ) {
      let white = hertzvalue(Math.pow(2,4)*55*Math.pow(2,(i-10)/12));
      whiteSounds.push(white);
    } else {
      let black = hertzvalue(Math.pow(2,4)*55*Math.pow(2,(i-10)/12));
      blackSounds.push(black);
    }
  }
}

whiteSounds.forEach((hertz,index)=>{
  whiteKey[index].addEventListener('click',function(){addOsc(hertz)});
});

blackSounds.forEach((hertz,index)=>{
  blackKey[index].addEventListener('click',function(){addOsc(hertz)});
});

function changeC(e) {
  e.target.style.backgroundColor = 'rgb(232,232,232)';
  setTimeout(()=>{
    e.target.style.backgroundColor = 'rgb(255,255,255)';
  },100);
};

for(let i = 0; i < whiteKey.length; i++){
  whiteKey[i].addEventListener('click',changeC);
};