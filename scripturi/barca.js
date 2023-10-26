var container = document.querySelector(".container");

$(document).ready(function(){



anime.set('.barca', {
        rotateZ:10,   
        top:"13%"
  });

  anime({
    targets: '#steag',
    keyframes:[
     {scaleX:1.1,translateX:'-3%',},
     {scaleX:1,translateX:'0%'},
     
    ],
  duration:1000,
  easing:"linear",
  loop:true
  });




  
setTimeout( function(){


  anime({
    targets: '.barca',
    keyframes:[
     {top:"14%", rotateZ:0,duration:500},
     {top:"9%", rotateZ:-10,duration:700, },
     {top:"14%", rotateZ:5,duration:500, },
     {top:"13%", rotateZ:-5,duration:700, },
     {top:"17%", rotateZ:15,duration:700,},
     {top:"24%", rotateZ:21,duration:500, },
     {top:"19%", rotateZ:-24,duration:500, },
     {top:"9%", rotateZ:-24,duration:500, },
     {top:"15%", rotateZ:15,duration:500, },
     {top:"28%", rotateZ:21,duration:1200, },
     {top:"18%", rotateZ:-19,duration:500, },
     {top:"12%", rotateZ:-21,duration:500, },
     {top:"10%", rotateZ:-22,duration:500, },
     {top:"15%", rotateZ:16,duration:500, },
     {top:"24%", rotateZ:19,duration:500, },
     {top:"15%", rotateZ:-19,duration:400, },
     {top:"10%", rotateZ:-23,duration:400, },
     {top:"13%", rotateZ:10,duration:400, },
    ],
  easing:"linear",
  loop:true
  });


 
  

},1000)











  function Wave() {
    const wave = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const iconPath = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'path'
    );
    wave.setAttribute('id', 'wave');
    wave.setAttribute('fill', '#0099ff');
    wave.setAttribute('viewBox', '0 0 1440 320');
    wave.classList.add('post-icon');
  
    iconPath.setAttribute(
      'd',
      'M0,128L40,138.7C80,149,160,171,240,165.3C320,160,400,128,480,144C560,160,640,224,720,224C800,224,880,160,960,144C1040,128,1120,160,1200,186.7C1280,213,1360,235,1400,245.3L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z'
    );
    iconPath.setAttribute('stroke-linecap', 'round');
    iconPath.setAttribute('stroke-linejoin', 'round');
    iconPath.setAttribute('stroke-width', '2');
    wave.appendChild(iconPath);
    container.appendChild(wave);
          
  anime({
    targets:wave,
   left:"-101%",
    easing: 'linear',
    duration: 10000,
    loop:true,
  });

  }
setTimeout(Wave , 1000);
setTimeout(Wave2 , 6000);


function Wave2() {
  const wave = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  const iconPath = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'path'
  );
  wave.setAttribute('id', 'wave2');
  wave.setAttribute('fill', '#0099ff');
  wave.setAttribute('viewBox', '0 0 1440 320');
  wave.classList.add('post-icon');

  iconPath.setAttribute(
    'd',
    'M0,128L40,138.7C80,149,160,171,240,165.3C320,160,400,128,480,144C560,160,640,224,720,224C800,224,880,160,960,144C1040,128,1120,160,1200,186.7C1280,213,1360,235,1400,245.3L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z'
  );
  iconPath.setAttribute('stroke-linecap', 'round');
  iconPath.setAttribute('stroke-linejoin', 'round');
  iconPath.setAttribute('stroke-width', '2');
  wave.appendChild(iconPath);
  container.appendChild(wave);
        
anime({
  targets:wave,
 left:"-101%",
  easing: 'linear',
  duration: 10000,
  loop:true,
});

}


setTimeout( function(){

  anime({
    targets:".wave",
   left:"-101%",
    easing: 'linear',
    duration: 4990,
  });
  

},1000)


})