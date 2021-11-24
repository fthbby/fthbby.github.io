console.log ('hello')


//------- attempt to create the stats bar buttons wtih classes ----//


// class StatsBar {
//     constructor(x,y,w,h,maxBarSize,color) {
//         this.x =x;
//         this.y = y;
//         this.w = w;
//         this.h = h;
//         this.maxBarSize = maxBarSize;
//         this.color = color;
//         this.maxWidth = w;
//         this.energy = maxBarSize;
//         this.hunger = maxBarSize;
//         this.boredom = maxBarSize;

//     }

// }


// const energyBar = new StatsBar(20,20,200,30,10000, 'green')




const boredBar = document.getElementById('bored-bar');
const hungerBar = document.getElementById('hunger-bar');
const energyBar = document.getElementById('energy-bar');

setInterval(() => {
    const computedStyle = getComputedStyle(boredBar);
    const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0
    boredBar.style.setProperty('--width', width +.05)
}, (5));

setInterval(() => {
    const computedStyle = getComputedStyle(hungerBar);
    const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0;
    hungerBar.style.setProperty('--width', width +.05)
}, (5));

setInterval(() => {
    const computedStyle = getComputedStyle(energyBar);
    const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0;
    energyBar.style.setProperty('--width', width +.05)
}, (5));



// let hungerBar = '';
// let boredomBar = '';
// let energyBar = '';

