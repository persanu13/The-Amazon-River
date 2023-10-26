anime.set('.titlu', {
       translateX:"-13em",
  });
  anime.set('.piranha', {
    translateX:"-140%",
});

  anime({
    targets: '.titlu',
    translateX:0,
    easing: 'easeOutElastic(1, .6)',
    duration:1200,
  });





  $(document).ready(function(){
    $(".titlu h1").mouseenter(function(){
        element=$(this).context;
        console.log(element);
        anime({
            targets:element,
            keyframes: [
                {scaleX:0.5,scaleY:1.4,duration: 200,},
                {scaleX:1.2,scaleY:0.8,duration: 170,},
                {scaleX:0.7,scaleY:1.2,duration: 130,},
                {scaleX:1.1,scaleY:0.9,duration: 100,},
                {scaleX:0.9,scaleY:1.1,duration: 70,},
                {scaleX:1,scaleY:1,duration: 40,},
              ],
            easing: 'linear',
          });
    });

    anime({
      targets: '.titlu h1',
      keyframes: [
          {scaleX:0.5,scaleY:1.4,duration: 200,},
          {scaleX:1.2,scaleY:0.8,duration: 170,},
          {scaleX:0.7,scaleY:1.2,duration: 130,},
          {scaleX:1.1,scaleY:0.9,duration: 100,},
          {scaleX:0.9,scaleY:1.1,duration: 70,},
          {scaleX:1,scaleY:1,duration: 40,},
        ],
      easing: 'linear',
      delay:200,
    });
  });


  
  anime({
    targets: '.piranha',
    keyframes: [
        {translateX:'+=70%',scaleX:0.7,scaleY:1.2,duration: 300,},
        {translateX:'+=70%',scaleX:1.2,scaleY:0.8,duration: 300,},
        {translateX:'+=70%',scaleX:0.7,scaleY:1.2,duration: 300,},
        {translateX:'+=70%',scaleX:1.2,scaleY:0.8,duration: 300,},
        {translateX:'+=70%',scaleX:0.7,scaleY:1.2,duration: 300,},
        {translateX:'+=70%',scaleX:1.2,scaleY:0.8,duration: 300,},
        {translateX:'+=70%',scaleX:0.7,scaleY:1.2,duration: 300,},
        {translateX:'+=70%',scaleX:1.2,scaleY:0.8,duration: 300,},
        {translateX:'+=70%',scaleX:0.7,scaleY:1.2,duration: 300,},
        {translateX:'+=70%',scaleX:1.2,scaleY:0.8,duration: 300,},
        {translateX:'+=70%',scaleX:0.7,scaleY:1.2,duration: 300,},
        {translateX:'+=70%',scaleX:1.2,scaleY:0.8,duration: 300,},
        {translateX:'+=70%',scaleX:0.7,scaleY:1.2,duration: 300,},
        {translateX:'+=70%',scaleX:1.2,scaleY:0.8,duration: 300,},
        {translateX:'+=70%',scaleX:0.7,scaleY:1.2,duration: 300,},
        {translateX:'+=70%',scaleX:1.2,scaleY:0.8,duration: 300,},
        {scaleX:1,scaleY:1,duration: 40,},
        {rotateY:'180deg' ,duration:200,},
        {translateX:'-=70%',scaleX:0.7,scaleY:1.2,duration: 300,},
        {translateX:'-=70%',scaleX:1.2,scaleY:0.8,duration: 300,},
        {translateX:'-=70%',scaleX:0.7,scaleY:1.2,duration: 300,},
        {translateX:'-=70%',scaleX:1.2,scaleY:0.8,duration: 300,},
        {translateX:'-=70%',scaleX:0.7,scaleY:1.2,duration: 300,},
        {translateX:'-=70%',scaleX:1.2,scaleY:0.8,duration: 300,},
        {translateX:'-=70%',scaleX:0.7,scaleY:1.2,duration: 300,},
        {translateX:'-=70%',scaleX:1.2,scaleY:0.8,duration: 300,},
        {translateX:'-=70%',scaleX:0.7,scaleY:1.2,duration: 300,},
        {translateX:'-=70%',scaleX:1.2,scaleY:0.8,duration: 300,},
        {translateX:'-=70%',scaleX:0.7,scaleY:1.2,duration: 300,},
        {translateX:'-=70%',scaleX:1.2,scaleY:0.8,duration: 300,},
        {translateX:'-=70%',scaleX:0.7,scaleY:1.2,duration: 300,},
        {translateX:'-=70%',scaleX:1.2,scaleY:0.8,duration: 300,},
        {translateX:'-=70%',scaleX:0.7,scaleY:1.2,duration: 300,},
        {translateX:'-=70%',scaleX:1.2,scaleY:0.8,duration: 300,},
        {scaleX:1,scaleY:1,duration: 40,},
        {rotateY:'0' ,duration:200,},
      ],
    easing: 'linear',
    loop: true,
   
  });
  anime({
    targets: '#wave1',
    keyframes: [
      {translateX:'+=50%'},
      {translateX:'-=50%'},
    ],
    duration:6480,
    easing:'linear',
    loop:true,
  
  });
  
  anime({
    targets: '#wave2',
    keyframes: [
      {translateX:'+=50%'},
      {translateX:'-=50%'},
    ],
    duration:6480,
    easing:'linear',
    loop:true,
   
    });
 

