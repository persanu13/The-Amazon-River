
setInterval(function(){Hint()},60000)

Hint();


function Hint(){
  
    nr = Math.floor(Math.random() * 5);
    console.log(nr);
    if(nr == 0){
   document.querySelector('.hint').innerHTML = "Stiai ca fluviul Amazon are cel mai mare debit din lume ?";
   anime({
    targets:".hint",
    keyframes: [
      {translateY: -10,opacity:1,duration:1000,},
      {translateY: 0,opacity:0,duration:1000,delay:57000}
    ],
    easing: 'linear',
  });
}

if(nr == 1){
    document.querySelector('.hint').innerHTML = "Nustiu";
    anime({
      targets:".hint",
      keyframes: [
        {translateY: -10,opacity:1,duration:1000,},
        {translateY: 0,opacity:0,duration:1000,delay:57000}
      ],
      easing: 'linear',
    });
 }
 
 if(nr == 2){
    document.querySelector('.hint').innerHTML = "DC";
    anime({
      targets:".hint",
      keyframes: [
        {translateY: -10,opacity:1,duration:1000,},
        {translateY: 0,opacity:0,duration:1000,delay:57000}
      ],
      easing: 'linear',
    });
 }
   
 if(nr == 3){
    document.querySelector('.hint').innerHTML = "Veva";
    anime({
      targets:".hint",
      keyframes: [
        {translateY: -10,opacity:1,duration:1000,},
        {translateY: 0,opacity:0,duration:1000,delay:57000}
      ],
      easing: 'linear',
    });
 }

 if(nr == 4){
    document.querySelector('.hint').innerHTML = "Ceva";
    anime({
      targets:".hint",
      keyframes: [
        {translateY: -10,opacity:1,duration:1000,},
        {translateY: 0,opacity:0,duration:1000,delay:57000}
      ],
      easing: 'linear',
    });
 }


}

