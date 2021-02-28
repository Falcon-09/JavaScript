


for(var i=0;i<document.querySelectorAll('.drum').length;i++){
    document.querySelectorAll('button')[i].addEventListener('click',function(){

        var buttonInnerhtml = this.innerHTML;

        makeSound(buttonInnerhtml);
        buttonAni(buttonInnerhtml);

    })
}



// var audio= new Audio('sounds/tom-1.mp3');
// audio.play();

// function HouseKeeper(yearsExp,name,clean){
//     this.yearsExp=yearsExp;
//     this.name=name;
//     this.clean=clean;
//     this.cleaN=function(){
//         alert('Cleaning!');
//     }
// }

// var houseKeeper1= new HouseKeeper(12,'Jane','bedroom');

// houseKeeper1.cleaN();


document.addEventListener('keydown',function(event){
    makeSound(event.key);
    buttonAni(event.key);
})


function makeSound(key){

    switch (key) {
        case 'w':
            var tom1= new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case 'a':
            var tom2= new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case 's':
            var tom3= new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case 'd':
            var tom4= new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case 'j':
            var snare= new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case 'k':
            var crash= new Audio('sounds/crash.mp3');
            crash.play();
        case 'l':
            var kick= new Audio('sounds/kick-bass.mp3');
            kick.play();    
            break;
    
        default:
            break;
    }
}


function buttonAni(ckey){

    var but = document.querySelector('.' + ckey);

    but.classList.add('pressed');

    setTimeout(function(){
        but.classList.remove('pressed');

    },100);
}

