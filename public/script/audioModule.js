export function addOsc(hertz) {
  const audioCtx = new AudioContext;
  
  
  let osc = audioCtx.createOscillator();
  osc.type = "square";
  osc.frequency.setValueAtTime(hertz, audioCtx.currentTime); 
  osc.connect(audioCtx.destination);
  osc.start();
  setTimeout(()=>{
    osc.stop();
  },500);
}
