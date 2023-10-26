var cuvat = String;
var titlu = document.querySelector(".titlu");
cuvant = "RÂUL/AMAZON";

 Creare(cuvant,titlu);

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

