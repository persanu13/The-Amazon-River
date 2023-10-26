

 Creare("VEGETAȚIE",document.querySelector(".title"));


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







   //Animatie

   

  sageata1=document.querySelector(".sageata1");
  sageata2=document.querySelector(".sageata2");
nr=1;
apasat=false;

modsageati=false;

function Schimb1() {
    if(nr==10){
        nr=1
    }else{
        nr+=1;
    }
    
    anime({
        targets:['.imagine2 img','.nume','#text' ],
            translateX: "-70vw",
            delay:2000, 
            duration:1000,
            easing:"linear",
      });

 setTimeout(function(){  
    if(nr==1){
        $(".imagine2 img").attr("src", "../imagini/V1.jpg");
        document.getElementById("nume").innerHTML = "1. Nufărul uriaș, Victoria Amazonica";
        document.getElementById("text").innerHTML = "Nuferii giganți sunt una dintre cele mai memorabile plante pe care le veți găsi în Padurea Amazoniana. Numiți după Regina Victoria, dimensiunea mare a nuferilor Victoria Amazonica este ceea ce îi diferențiază. Pot crește până la 10 picioare (sau 3 metri) în diametru și pot susține până la 60 de lire sterline. Crinii Victoria Amazonica cresc în Rezervația Națională Pacaya Samiria din Peru.";
    }
    if(nr==2){
        $(".imagine2 img").attr("src", "../imagini/V2.jpg");
        document.getElementById("nume").innerHTML = "2. Arborele de cauciuc, Hevea brasiliensis";
        document.getElementById("text").innerHTML = "Arborele de cauciuc are o istorie notorie. Este una dintre cele mai apreciate plante din toată regiunea Amazonului. Seva copacului este o sursă de latex care a fost folosită și continuă să fie folosită pentru fabricarea cauciucului. Această plantă impresionantă era endemică în pădurea tropicală amazoniană, cu toate acestea, în timpul erei boom-ului cauciucului, semințele acestei plante au fost introduse ilegal în Asia de Sud-Est (o regiune care are un mediu tropical similar cu Amazonul), rezultând înmulțirea arborelui acolo.";
    }
    if(nr==3){
        $(".imagine2 img").attr("src", "../imagini/V3.jpg");
        document.getElementById("nume").innerHTML = "3. Heliconia, Heliconia latispatha";
        document.getElementById("text").innerHTML = "Floarea Heliconia, numită adesea gheara homarului, este una dintre cele mai comune și mai colorate plante din junglă găsite în copac. Planta are o formă unică de „gheare” și o culoare strălucitoare, fiind ușor de identificat. Multe insecte și păsări se bazează pe planta Heliconia pentru hrană, în special colibrii, adesea cuibăresc pe această plantă și, în schimb, acționează ca polenizatori ai acesteia.";
    }
    if(nr==4){
        $(".imagine2 img").attr("src", "../imagini/V4.jpg");
        document.getElementById("nume").innerHTML = "4. Cacao, Theobroma cacao";
        document.getElementById("text").innerHTML = "Gustarea plantei de cacao crudă este punctul culminant al oricărei călătorii în pădurea tropicală amazoniană. Această plantă este un superaliment amazonian și se întâmplă să fie și baza plăcerii vinovate preferate a tuturor, ciocolata. Fructul de cacao variază în mărime și culoare, dar de obicei începe verde când este tânăr și se transformă într-o culoare maro roșiatic odată ce păstaia este gata de recoltat. Un fapt amuzant despre această plantă este că numele său de gen este „Theobroma”, adică „hrană pentru zei”.";
    }
    if(nr==5){
        $(".imagine2 img").attr("src", "../imagini/V5.jpg");
        document.getElementById("nume").innerHTML = "5. Floarea pasiunii, Passiflora edulis";
        document.getElementById("text").innerHTML = "Sucurile și deserturile din fructele pasiunii sunt populare în Bucătăria amazoniană. În timp ce se afla la bordulDelfin Amazon Cruises, oaspeții se pot bucura de o mostră din acest superfruct acidulat. Floarea crește sus în baldachinul junglei, iar culorile sale distinctive alb și violet o fac să iasă în evidență din peisajul verde luxuriant. Floarea Pasiunii este una dintre cele mai frumoase flori găsite în junglă și este adesea comparată cu orhideea.";
    }
    if(nr==6){
        $(".imagine2 img").attr("src", "../imagini/V6.jpg");
        document.getElementById("nume").innerHTML = "6. Bromelia, Bromeliaceae";
        document.getElementById("text").innerHTML = "Bromeliile cresc din pământul pădurii amazoniene, sunt ușor de observat datorită culorilor lor strălucitoare. Similar florii de fructul pasiunii, florile de Bromelia produc și fructe, ananasul. Un fapt foarte interesant despre bromelia este modul lor de a stoca apa. Frunzele lor și-au adaptat forma pentru a crea un rezervor de apă improvizat și pot conține până la 7 litri de apă. Spre deosebire de multe alte plante care se află sus în copacul pădurii, le puteți observa destul de ușor în timp ce vă plimbați în junglă.";
    }
    if(nr==7){
        $(".imagine2 img").attr("src", "../imagini/V7.jpg");
        document.getElementById("nume").innerHTML = "7. Coffee Plant, Coffea arabica";
        document.getElementById("text").innerHTML = "Creștend până la 30 de picioare înălțime, planta de cafea prosperă în pădurile tropicale din Peru, Brazilia și Ecuador. Ele cresc cel mai bine la umbră, făcând din jungla un loc ideal pentru a înflori. Micile boabe roșii s-ar putea să nu arate ca boabe de cafea la început, deoarece în interiorul acestor boabe puteți găsi boabele de cafea. Acele boabe mici și valoroase fac din planta de cafea una dintre cele mai necesare și consumate plante din lume.";
    }
    if(nr==8){
        $(".imagine2 img").attr("src", "../imagini/V8.jpg");
        document.getElementById("nume").innerHTML = "8. Monkey Brush Vines, Combretum rotundifolium";
        document.getElementById("text").innerHTML = "Vița de vie Monkey Brush crește adânc în pădurea tropicală amazoniană. Este o floare roșu aprins care se deschide și arată ca o perie strălucitoare. Această floare crește pe o viță de vie parazită care prosperă atunci când se atașează de alte plante de pe acoperișul junglei. Când observați aceste flori colorate, fiți în căutarea iguanelor, deoarece adesea le place să se odihnească printre viță de vie.";
    }
    if(nr==9){
        $(".imagine2 img").attr("src", "../imagini/V9.jpeg");
        document.getElementById("nume").innerHTML = "9. Kapok Tree, Ceiba pentandra";
        document.getElementById("text").innerHTML = "Arborele Kopak poartă numele Ceiba și este unul dintre cei mai mari copaci din junglă care se înalță deasupra copacului pădurii tropicale. Un număr divers de specii de animale trăiesc în scoarța și colțurile acestui copac important. Arborele capoc își pierde toate frunzele în timpul sezonului de apă scăzută, permițând semințelor copacului să se răspândească în jurul junglei. Lemnul acestui copac este foarte ușor, ceea ce îl face o bază ideală pentru o canoe de râu pentru localnici.";
    }
    if(nr==10){
        $(".imagine2 img").attr("src", "../imagini/V10.jpg");
        document.getElementById("nume").innerHTML = "10. Orhidee, Orchidaceae";
        document.getElementById("text").innerHTML = "Floarea de orhidee este una dintre cele mai rafinate și maiestuoase flori din lume. Sunt cea mai mare familie de plante, cu peste 25.000 de specii situate în întreaga lume, iar peste 10.000 dintre ele în jungla tropicală. Orhideele înfloresc în aproape toate culorile curcubeului și se dezvoltă cel mai bine în medii umed. Ei se bazează foarte mult pe păsări și insecte pentru a-și poleniza florile.";
    }
    


 }, 3000);

 setTimeout(function(){ 
    anime.set('.imagine2 img', {
       translateX:"+70vw", 
      });
      anime.set('.nume', {
        translateX:"+70vw", 
       });
       anime.set('#text', {
        translateX:"+70vw", 
       });
      anime({
        targets:['.imagine2 img','.nume','#text' ],
            translateX: 0, 
            duration:1000,
            easing:'linear',
      });

    
  }, 3100);
}

function Schimb2() {
    if(nr==10){
        nr=1
    }else{
        nr+=1;
    }
    
    anime({
        targets:['.imagine2 img','.nume','#text' ],
            translateX:"-70vw",
            duration:500,
            easing:"linear",
      });

 setTimeout(function(){  
  if(nr==1){
    $(".imagine2 img").attr("src", "../imagini/V1.jpg");
    document.getElementById("nume").innerHTML = "1. Nufărul uriaș, Victoria Amazonica";
    document.getElementById("text").innerHTML = "Nuferii giganți sunt una dintre cele mai memorabile plante pe care le veți găsi în Padurea Amazoniana. Numiți după Regina Victoria, dimensiunea mare a nuferilor Victoria Amazonica este ceea ce îi diferențiază. Pot crește până la 10 picioare (sau 3 metri) în diametru și pot susține până la 60 de lire sterline. Crinii Victoria Amazonica cresc în Rezervația Națională Pacaya Samiria din Peru.";
}
if(nr==2){
    $(".imagine2 img").attr("src", "../imagini/V2.jpg");
    document.getElementById("nume").innerHTML = "2. Arborele de cauciuc, Hevea brasiliensis";
    document.getElementById("text").innerHTML = "Arborele de cauciuc are o istorie notorie. Este una dintre cele mai apreciate plante din toată regiunea Amazonului. Seva copacului este o sursă de latex care a fost folosită și continuă să fie folosită pentru fabricarea cauciucului. Această plantă impresionantă era endemică în pădurea tropicală amazoniană, cu toate acestea, în timpul erei boom-ului cauciucului, semințele acestei plante au fost introduse ilegal în Asia de Sud-Est (o regiune care are un mediu tropical similar cu Amazonul), rezultând înmulțirea arborelui acolo.";
}
if(nr==3){
    $(".imagine2 img").attr("src", "../imagini/V3.jpg");
    document.getElementById("nume").innerHTML = "3. Heliconia, Heliconia latispatha";
    document.getElementById("text").innerHTML = "Floarea Heliconia, numită adesea gheara homarului, este una dintre cele mai comune și mai colorate plante din junglă găsite în copac. Planta are o formă unică de „gheare” și o culoare strălucitoare, fiind ușor de identificat. Multe insecte și păsări se bazează pe planta Heliconia pentru hrană, în special colibrii, adesea cuibăresc pe această plantă și, în schimb, acționează ca polenizatori ai acesteia.";
}
if(nr==4){
    $(".imagine2 img").attr("src", "../imagini/V4.jpg");
    document.getElementById("nume").innerHTML = "4. Cacao, Theobroma cacao";
    document.getElementById("text").innerHTML = "Gustarea plantei de cacao crudă este punctul culminant al oricărei călătorii în pădurea tropicală amazoniană. Această plantă este un superaliment amazonian și se întâmplă să fie și baza plăcerii vinovate preferate a tuturor, ciocolata. Fructul de cacao variază în mărime și culoare, dar de obicei începe verde când este tânăr și se transformă într-o culoare maro roșiatic odată ce păstaia este gata de recoltat. Un fapt amuzant despre această plantă este că numele său de gen este „Theobroma”, adică „hrană pentru zei”.";
}
if(nr==5){
    $(".imagine2 img").attr("src", "../imagini/V5.jpg");
    document.getElementById("nume").innerHTML = "5. Floarea pasiunii, Passiflora edulis";
    document.getElementById("text").innerHTML = "Sucurile și deserturile din fructele pasiunii sunt populare în Bucătăria amazoniană. În timp ce se afla la bordulDelfin Amazon Cruises, oaspeții se pot bucura de o mostră din acest superfruct acidulat. Floarea crește sus în baldachinul junglei, iar culorile sale distinctive alb și violet o fac să iasă în evidență din peisajul verde luxuriant. Floarea Pasiunii este una dintre cele mai frumoase flori găsite în junglă și este adesea comparată cu orhideea.";
}
if(nr==6){
    $(".imagine2 img").attr("src", "../imagini/V6.jpg");
    document.getElementById("nume").innerHTML = "6. Bromelia, Bromeliaceae";
    document.getElementById("text").innerHTML = "Bromeliile cresc din pământul pădurii amazoniene, sunt ușor de observat datorită culorilor lor strălucitoare. Similar florii de fructul pasiunii, florile de Bromelia produc și fructe, ananasul. Un fapt foarte interesant despre bromelia este modul lor de a stoca apa. Frunzele lor și-au adaptat forma pentru a crea un rezervor de apă improvizat și pot conține până la 7 litri de apă. Spre deosebire de multe alte plante care se află sus în copacul pădurii, le puteți observa destul de ușor în timp ce vă plimbați în junglă.";
}
if(nr==7){
    $(".imagine2 img").attr("src", "../imagini/V7.jpg");
    document.getElementById("nume").innerHTML = "7. Coffee Plant, Coffea arabica";
    document.getElementById("text").innerHTML = "Creștend până la 30 de picioare înălțime, planta de cafea prosperă în pădurile tropicale din Peru, Brazilia și Ecuador. Ele cresc cel mai bine la umbră, făcând din jungla un loc ideal pentru a înflori. Micile boabe roșii s-ar putea să nu arate ca boabe de cafea la început, deoarece în interiorul acestor boabe puteți găsi boabele de cafea. Acele boabe mici și valoroase fac din planta de cafea una dintre cele mai necesare și consumate plante din lume.";
}
if(nr==8){
    $(".imagine2 img").attr("src", "../imagini/V8.jpg");
    document.getElementById("nume").innerHTML = "8. Monkey Brush Vines, Combretum rotundifolium";
    document.getElementById("text").innerHTML = "Vița de vie Monkey Brush crește adânc în pădurea tropicală amazoniană. Este o floare roșu aprins care se deschide și arată ca o perie strălucitoare. Această floare crește pe o viță de vie parazită care prosperă atunci când se atașează de alte plante de pe acoperișul junglei. Când observați aceste flori colorate, fiți în căutarea iguanelor, deoarece adesea le place să se odihnească printre viță de vie.";
}
if(nr==9){
    $(".imagine2 img").attr("src", "../imagini/V9.jpeg");
    document.getElementById("nume").innerHTML = "9. Kapok Tree, Ceiba pentandra";
    document.getElementById("text").innerHTML = "Arborele Kopak poartă numele Ceiba și este unul dintre cei mai mari copaci din junglă care se înalță deasupra copacului pădurii tropicale. Un număr divers de specii de animale trăiesc în scoarța și colțurile acestui copac important. Arborele capoc își pierde toate frunzele în timpul sezonului de apă scăzută, permițând semințelor copacului să se răspândească în jurul junglei. Lemnul acestui copac este foarte ușor, ceea ce îl face o bază ideală pentru o canoe de râu pentru localnici.";
}
if(nr==10){
    $(".imagine2 img").attr("src", "../imagini/V10.jpg");
    document.getElementById("nume").innerHTML = "10. Orhidee, Orchidaceae";
    document.getElementById("text").innerHTML = "Floarea de orhidee este una dintre cele mai rafinate și maiestuoase flori din lume. Sunt cea mai mare familie de plante, cu peste 25.000 de specii situate în întreaga lume, iar peste 10.000 dintre ele în jungla tropicală. Orhideele înfloresc în aproape toate culorile curcubeului și se dezvoltă cel mai bine în medii umed. Ei se bazează foarte mult pe păsări și insecte pentru a-și poleniza florile.";
}

 }, 500);

 setTimeout(function(){ 
    anime.set('.imagine2 img', {
       translateX:"+70vw", 
      });
      anime.set('.nume', {
        translateX:"+70vw", 
       });
       anime.set('#text', {
        translateX:"+70vw", 
       });
      anime({
        targets:['.imagine2 img','.nume','#text' ],
            translateX: 0, 
            duration:500,
            easing:'linear',
      });
  }, 510);
}



function Schimb3() {
    if(nr==1){
        nr=10
    }else{
        nr-=1;
    }
    
    anime({
        targets:['.imagine2 img','.nume','#text' ],
            translateX:"+70vw",
            duration:500,
            easing:"linear",
      });

 setTimeout(function(){  
  if(nr==1){
    $(".imagine2 img").attr("src", "../imagini/V1.jpg");
    document.getElementById("nume").innerHTML = "1. Nufărul uriaș, Victoria Amazonica";
    document.getElementById("text").innerHTML = "Nuferii giganți sunt una dintre cele mai memorabile plante pe care le veți găsi în Padurea Amazoniana. Numiți după Regina Victoria, dimensiunea mare a nuferilor Victoria Amazonica este ceea ce îi diferențiază. Pot crește până la 10 picioare (sau 3 metri) în diametru și pot susține până la 60 de lire sterline. Crinii Victoria Amazonica cresc în Rezervația Națională Pacaya Samiria din Peru.";
}
if(nr==2){
    $(".imagine2 img").attr("src", "../imagini/V2.jpg");
    document.getElementById("nume").innerHTML = "2. Arborele de cauciuc, Hevea brasiliensis";
    document.getElementById("text").innerHTML = "Arborele de cauciuc are o istorie notorie. Este una dintre cele mai apreciate plante din toată regiunea Amazonului. Seva copacului este o sursă de latex care a fost folosită și continuă să fie folosită pentru fabricarea cauciucului. Această plantă impresionantă era endemică în pădurea tropicală amazoniană, cu toate acestea, în timpul erei boom-ului cauciucului, semințele acestei plante au fost introduse ilegal în Asia de Sud-Est (o regiune care are un mediu tropical similar cu Amazonul), rezultând înmulțirea arborelui acolo.";
}
if(nr==3){
    $(".imagine2 img").attr("src", "../imagini/V3.jpg");
    document.getElementById("nume").innerHTML = "3. Heliconia, Heliconia latispatha";
    document.getElementById("text").innerHTML = "Floarea Heliconia, numită adesea gheara homarului, este una dintre cele mai comune și mai colorate plante din junglă găsite în copac. Planta are o formă unică de „gheare” și o culoare strălucitoare, fiind ușor de identificat. Multe insecte și păsări se bazează pe planta Heliconia pentru hrană, în special colibrii, adesea cuibăresc pe această plantă și, în schimb, acționează ca polenizatori ai acesteia.";
}
if(nr==4){
    $(".imagine2 img").attr("src", "../imagini/V4.jpg");
    document.getElementById("nume").innerHTML = "4. Cacao, Theobroma cacao";
    document.getElementById("text").innerHTML = "Gustarea plantei de cacao crudă este punctul culminant al oricărei călătorii în pădurea tropicală amazoniană. Această plantă este un superaliment amazonian și se întâmplă să fie și baza plăcerii vinovate preferate a tuturor, ciocolata. Fructul de cacao variază în mărime și culoare, dar de obicei începe verde când este tânăr și se transformă într-o culoare maro roșiatic odată ce păstaia este gata de recoltat. Un fapt amuzant despre această plantă este că numele său de gen este „Theobroma”, adică „hrană pentru zei”.";
}
if(nr==5){
    $(".imagine2 img").attr("src", "../imagini/V5.jpg");
    document.getElementById("nume").innerHTML = "5. Floarea pasiunii, Passiflora edulis";
    document.getElementById("text").innerHTML = "Sucurile și deserturile din fructele pasiunii sunt populare în Bucătăria amazoniană. În timp ce se afla la bordulDelfin Amazon Cruises, oaspeții se pot bucura de o mostră din acest superfruct acidulat. Floarea crește sus în baldachinul junglei, iar culorile sale distinctive alb și violet o fac să iasă în evidență din peisajul verde luxuriant. Floarea Pasiunii este una dintre cele mai frumoase flori găsite în junglă și este adesea comparată cu orhideea.";
}
if(nr==6){
    $(".imagine2 img").attr("src", "../imagini/V6.jpg");
    document.getElementById("nume").innerHTML = "6. Bromelia, Bromeliaceae";
    document.getElementById("text").innerHTML = "Bromeliile cresc din pământul pădurii amazoniene, sunt ușor de observat datorită culorilor lor strălucitoare. Similar florii de fructul pasiunii, florile de Bromelia produc și fructe, ananasul. Un fapt foarte interesant despre bromelia este modul lor de a stoca apa. Frunzele lor și-au adaptat forma pentru a crea un rezervor de apă improvizat și pot conține până la 7 litri de apă. Spre deosebire de multe alte plante care se află sus în copacul pădurii, le puteți observa destul de ușor în timp ce vă plimbați în junglă.";
}
if(nr==7){
    $(".imagine2 img").attr("src", "../imagini/V7.jpg");
    document.getElementById("nume").innerHTML = "7. Coffee Plant, Coffea arabica";
    document.getElementById("text").innerHTML = "Creștend până la 30 de picioare înălțime, planta de cafea prosperă în pădurile tropicale din Peru, Brazilia și Ecuador. Ele cresc cel mai bine la umbră, făcând din jungla un loc ideal pentru a înflori. Micile boabe roșii s-ar putea să nu arate ca boabe de cafea la început, deoarece în interiorul acestor boabe puteți găsi boabele de cafea. Acele boabe mici și valoroase fac din planta de cafea una dintre cele mai necesare și consumate plante din lume.";
}
if(nr==8){
    $(".imagine2 img").attr("src", "../imagini/V8.jpg");
    document.getElementById("nume").innerHTML = "8. Monkey Brush Vines, Combretum rotundifolium";
    document.getElementById("text").innerHTML = "Vița de vie Monkey Brush crește adânc în pădurea tropicală amazoniană. Este o floare roșu aprins care se deschide și arată ca o perie strălucitoare. Această floare crește pe o viță de vie parazită care prosperă atunci când se atașează de alte plante de pe acoperișul junglei. Când observați aceste flori colorate, fiți în căutarea iguanelor, deoarece adesea le place să se odihnească printre viță de vie.";
}
if(nr==9){
    $(".imagine2 img").attr("src", "../imagini/V9.jpeg");
    document.getElementById("nume").innerHTML = "9. Kapok Tree, Ceiba pentandra";
    document.getElementById("text").innerHTML = "Arborele Kopak poartă numele Ceiba și este unul dintre cei mai mari copaci din junglă care se înalță deasupra copacului pădurii tropicale. Un număr divers de specii de animale trăiesc în scoarța și colțurile acestui copac important. Arborele capoc își pierde toate frunzele în timpul sezonului de apă scăzută, permițând semințelor copacului să se răspândească în jurul junglei. Lemnul acestui copac este foarte ușor, ceea ce îl face o bază ideală pentru o canoe de râu pentru localnici.";
}
if(nr==10){
    $(".imagine2 img").attr("src", "../imagini/V10.jpg");
    document.getElementById("nume").innerHTML = "10. Orhidee, Orchidaceae";
    document.getElementById("text").innerHTML = "Floarea de orhidee este una dintre cele mai rafinate și maiestuoase flori din lume. Sunt cea mai mare familie de plante, cu peste 25.000 de specii situate în întreaga lume, iar peste 10.000 dintre ele în jungla tropicală. Orhideele înfloresc în aproape toate culorile curcubeului și se dezvoltă cel mai bine în medii umed. Ei se bazează foarte mult pe păsări și insecte pentru a-și poleniza florile.";
}


 }, 500);

 setTimeout(function(){ 
    anime.set('.imagine2 img', {
       translateX:"-70vw", 
      });
      anime.set('.nume', {
        translateX:"-70vw", 
       });
       anime.set('#text', {
        translateX:"-70vw", 
       });
      anime({
        targets:['.imagine2 img','.nume','#text' ],
            translateX: 0, 
            duration:500,
            easing:'linear',
      });
  }, 510);
}



Schimb1()
setInterval(Schimb1,5100,)




sageata2.addEventListener("click", function(){
 
    if(modsageati){
        if (apasat){

        }else{
            apasat=true;
            Schimb2()
            setTimeout(function(){apasat=false},510,)
            console.log("ceva")
        }
    
    }  else{
            for (var i = 1; i < 99999; i++)
            {
            window.clearInterval(i);
            window.clearTimeout(i);
            }
            anime.remove('.imagine2 img');
            anime.remove('.nume');
            anime.remove('#text');
            Schimb2();
            if(nr==10){
                nr=1
            }else{
                nr-=1;
            }
        
       modsageati=true;
    }   
}
)

sageata1.addEventListener("click", function(){
    if(modsageati){
        if (apasat){

        }else{
            apasat=true;
            Schimb3()
            setTimeout(function(){apasat=false},510,)
        }
    
    }  else{
        for (var i = 1; i < 99999; i++)
        {
        window.clearInterval(i);
        window.clearTimeout(i);
        }
        anime.remove('.imagine2 img');
        anime.remove('.nume');
        anime.remove('#text');
        Schimb3();
        if(nr==1){
            nr=10
        }else{
            nr-=1;
        }
        modsageati=true;
    }   
}
)


