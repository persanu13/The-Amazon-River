

 Creare("DESCRIERE/GENERALĂ",document.querySelector(".title"));


function Creare(cuvant,titlu){
     lungime = cuvant.length;
     rand = document.createElement("DIV");
     titlu.appendChild(rand);

     for(i = 0; i<lungime; i++){
      litera = cuvant.slice(i ,i+1);
     
      if(litera == "/"){

        rand = document.createElement("DIV");
        titlu.appendChild(rand);

      }else {
        h1 = document.createElement("H1");
        rand.appendChild(h1);
        h1.innerHTML = litera;

      }

     }   
}


$(document).ready(function(){
    $(".title h1").mouseenter(function(){
        element=$(this).context;
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
  });
