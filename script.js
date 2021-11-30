// let catsInfo = {
//     name: '',
// }

let cat = {
    name:'',
}
let catsHunger = 0;
let catsBoredom = 0;
let catsEnergy = 0;


const boredBar = document.getElementById('bored-bar-progress');
// const hungerBar = document.getElementById('hunger-bar');
const energyBar = document.getElementById('energy-bar-progress');
const hungerBar = document.getElementById('hunger-bar-progress');

// -------- this is the  stats bar interval code ------------//
// function intervalStart (chooseBar,interval) {
    
//     setInterval(() => {
//         const computedStyle = getComputedStyle(chooseBar);
//         const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0;
//         chooseBar.style.setProperty('--width', width +.05);
//         console.log(width)
//         // console.log(width);
//         // pushTo = width;
//         // console.log(width);
//             // pushTo = parseFloat(width);
//         // console.log('amount for hungs:' + pushTo);
       
//     }, (interval));
//     // pushTo = width;
//     // console.log(pushTo);
  

// }

// function intervalStart (interval) {
//     const computedStyle = getComputedStyle(hungerBar);
//     const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0;
//     if (width<'100'){
//     setInterval(() => {
//         const computedStyle = getComputedStyle(hungerBar);
//         const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0;
//         hungerBar.style.setProperty('--width', width +.05);
//         console.log(width)
        
       
//     }, (interval));
//     } else {
//         console.log('break')
//     }
//     // pushTo = width;
//     // console.log(pushTo);

// }


function intervalStart(chooseBar, speed){
    let width = 1;
    const rate = () => {
        if (width>=100){
            console.log('over 100')
            clearInterval(interval);
        } else {
            width++;
            chooseBar.style.width = `${width}%`
        }
    };

    const interval = setInterval(rate, speed);
}
//-------- need to create different interval for energy... needs to go down --//

function intervalStartReverse (chooseBar, interval){
    setInterval(() => {
        const computedStyle = getComputedStyle(chooseBar);
        const width = parseFloat(computedStyle.getPropertyValue('--width'));
        chooseBar.style.setProperty('--width',width -.05)
    }, (interval));
}




// why are the numbers opposite??? isnt higher number supposed to be faster?? need to figure this one
//----- moving this one to the start function a the bottom ---//
// intervalStart(boredBar, 5)
// intervalStart(hungerBar, 1)
// intervalStartReverse(energyBar, 9)


// -------- this is the counter for age function --------//
const counter  = document.querySelector('#counter')

// let count = 0; //----- maybe move this one to the top.
function startCount(count){
setInterval(() => {
    if (count <= 9){
        count++;
        counter.innerText = count;
    }
}, 1500); //------ this changes speed of counter..
}



//----------below are the event listeners for the action buttons

const feedButton =document.querySelector('#feed');
const playButton = document.querySelector('#play');
const sleepButton = document.querySelector('#sleep');


feedButton.addEventListener('click', () => {
    console.log('clickedTheFeedsAgain');
    clickAction(hungerBar);
})

playButton.onclick = () => {
    console.log('clicked da play');
    clickAction(boredBar);
}

sleepButton.onclick = () => {
    console.log('clicked the sleep');
    clickActionNegative(energyBar);
}

const clickAction = (chooseBar) => {
    const computedStyle = getComputedStyle(chooseBar);
    const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0;
    if (width >=0){
    chooseBar.style.setProperty('--width', width - 10);
    console.log(width)
    }
    console.log(catsHunger)
}

const clickActionNegative = (chooseBar) => {
    const computedStyle = getComputedStyle(chooseBar);
    const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0;
    if (width >=0){
    chooseBar.style.setProperty('--width', width + 10);
    }
}



// catsInfo.name = $('.catsName').val();
// $('#name-box').text(catsInfo.name);






function playGame(){
    startCount(0); //-------this one starts the counter,
    intervalStart(hungerBar, 50)
    intervalStart(boredBar, 60)
    intervalStartReverse(energyBar, 9)
    clearWelcomePage();
}

const welcomePage = document.querySelector('.welcome-page');
const welcomeStart = document.querySelector('.welcome-start')
const nameBox = document.querySelector('#name-box');
const catName = document.querySelector('#catName');
const gameStartButton = document.querySelector('.gameStartButton')



// function clearWelcomePage(){
//     $('.welcome-page').css('display','none');
// }

console.log(nameBox)

// gameStartButton.addEventListener('submit', playGame())


gameStartButton.addEventListener('click', function(e){
    if (e.target.innerText ==='Enter'){
        cat.name = $('#catName').val();
        $('#name-box').text(cat.name)
        // addNameToGame();
        playGame();
    }
})

// gameStartButton.addEventListener('submit',function(e){
//     if(!isValid){
//         e.preventDefault();
//     }
//     playGame();
//     console.log('this one works')
// })

// let $nameBox = $('#name-box')
// let nameBox1 = document.querySelector('#name-box')
// console.log($($nameBox).innerText)

// const getCatName = document.getElementById('catName').value;
// const $getCatName = $('#catName');

// function addNameToGame(){
//     $('#name-box').text(getCatName)
//     // nameBox.innerText = getCatName;
// }

