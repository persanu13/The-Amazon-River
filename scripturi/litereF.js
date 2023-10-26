

 Creare("FAUNĂ",document.querySelector(".title"));


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
         $(".imagine2 img").attr("src", "../imagini/F1");
         document.getElementById("nume").innerHTML = "1.Piranha";
         document.getElementById("text").innerHTML = "Există multe mituri despre piranha, cum ar fi ideea că pot scheletiza o vacă în mai puțin de cinci minute. Cert este că acestor pești nici măcar nu le place să atace oamenii. Cu toate acestea, nu se poate nega faptul că piranha este construită pentru a ucide, echipată așa cum este cu dinți ascuțiți și fălci extrem de puternice, care pot să mănânce prada cu o forță de peste 70 de lire sterline pe inch pătrat. Și mai terifiant este megapiranha , un strămoș piranha uriaș care bântuia râurile Miocenului Americii de Sud.";
     }
     if(nr==2){
         $(".imagine2 img").attr("src", "../imagini/F2");
         document.getElementById("nume").innerHTML = "2. Capybara";
         document.getElementById("text").innerHTML = "Cântărind până la 68kg, capibara este cea mai mare rozătoare din lume . Are o răspândire largă în America de Sud, dar animalului îi place în special împrejurimile calde și umede ale bazinului fluviului Amazon. Capybara subziste din vegetația copioasă a pădurii tropicale, inclusiv fructe, scoarță de copac și plante acvatice și se știe că se adună în turme de până la 100 de membri. Pădurea tropicală poate fi pe cale de dispariție, dar capibara nu este; această rozătoare continuă să prospere, în ciuda faptului că este un articol popular din meniu în unele sate din America de Sud.";
     }
     if(nr==3){
         $(".imagine2 img").attr("src", "../imagini/F3");
         document.getElementById("nume").innerHTML = "3.Jaguar";
         document.getElementById("text").innerHTML = "A treia pisică ca mărime după leu și tigru, jaguarul a avut o perioadă dificilă în ultimul secol, deoarece defrișările și invadarea umană au restrâns raza de acțiune a animalului în America de Sud. Cu toate acestea, este mult mai greu să vânezi un jaguar în bazinul dens al râului Amazon decât în ​​pampa deschisă, așa că porțiunile impenetrabile ale pădurii tropicale pot fi ultima și cea mai bună speranță a lui Panthera onca . Nimeni nu știe sigur, dar există cel puțin câteva mii de jaguari care pradă megafauna din pădurea tropicală amazoniană; un prădător de vârf, jaguarul nu are de ce să se teamă de semenii săi (cu excepția, desigur, de ființe umane).";
     }
     if(nr==4){
         $(".imagine2 img").attr("src", "../imagini/F4");
         document.getElementById("nume").innerHTML = "4.Vidra uriașă";
         document.getElementById("text").innerHTML = "Cunoscuți și sub denumirea de „jaguari de apă” sau „lupi de râu”, vidrele uriașe sunt cei mai mari membri ai familiei mustelidelor și sunt strâns legate de nevăstuici. Masculii pot crește până la șase picioare lungime și cântăresc până la 75 de lire sterline, iar ambele sexe sunt cunoscute pentru hainele lor groase și lucioase - care sunt atât de râvnite de vânătorii de oameni încât au mai rămas doar aproximativ 5.000 de vidre uriașe în întregul bazin al râului Amazon. . Neobișnuit pentru mustelide (dar din fericire pentru braconieri), vidra uriașă trăiește în grupuri sociale extinse formate din aproximativ o jumătate de duzină de indivizi.";
     }
     if(nr==5){
         $(".imagine2 img").attr("src", "../imagini/F5");
         document.getElementById("nume").innerHTML = "Furnicar uriaș";
         document.getElementById("text").innerHTML = "Atât de mare încât este uneori cunoscut sub numele de ursul furnicilor, furnicarul uriaș este echipat cu un bot lung comic – ideal pentru a pătrunde în vizuini înguste de insecte – și o coadă lungă și stufoasă; unele persoane se pot apropia de 100 de kilograme în greutate. La fel ca multe dintre mamiferele de talie mare din America de Sud tropicală, furnicarul gigant este grav pe cale de dispariție. Din fericire, bazinul vast, mlaștinos și impenetrabil al râului Amazon oferă populației rămase un anumit nivel de protecție față de oameni (ca să nu mai vorbim de o cantitate inepuizabilă de furnici gustoase).";
     }
     if(nr==6){
         $(".imagine2 img").attr("src", "../imagini/F6");
         document.getElementById("nume").innerHTML = "6. Tamarin Leul de Aur";
         document.getElementById("text").innerHTML = "Cunoscut și sub denumirea de marmoset de aur, tamarinul leu de aur a suferit teribil din cauza invadării umane. Potrivit unor estimări, această maimuță din Lumea Nouă a pierdut 95% din habitatul său sud-american de la sosirea coloniștilor europeni în urmă cu 600 de ani. Tamarinul leu auriu cântărește doar câteva kilograme, ceea ce face apariția cu atât mai izbitoare: o coamă stufoasă de păr brun-roșcat înconjoară o față plată, cu ochi întunecați. (Culoarea distinctivă a acestei primate provine probabil dintr-o combinație de lumina intensă a soarelui și o abundență de carotenoizi, proteinele care fac morcovii portocalii, în dieta sa.)";
     }
     if(nr==7){
         $(".imagine2 img").attr("src", "../imagini/F7");
         document.getElementById("nume").innerHTML = "7.Caimanul Negru";
         document.getElementById("text").innerHTML = "Cea mai mare și cea mai periculoasă reptilă din bazinul fluviului Amazon, caimanul negru (tehnic o specie de aligator) se poate apropia de 20 de picioare în lungime și poate cântări până la jumătate de tonă. În calitate de prădători de vârf ai ecosistemului lor luxuriant și umed, caimanii negri vor mânca aproape orice se mișcă, de la mamifere la păsări până la alte reptile. În anii 1970, caimanul negru era serios pe cale de dispariție – vizat de oameni pentru carnea și pielea sa valoroasă – dar populația sa a revenit de atunci.";
     }
     if(nr==8){
         $(".imagine2 img").attr("src", "../imagini/F8");
         document.getElementById("nume").innerHTML = "Broasca Otrăvitoare";
         document.getElementById("text").innerHTML = "Ca regulă generală, cu cât o broaște săgeată otrăvitoare este mai viu colorată, cu atât veninul ei este mai puternic – motiv pentru care prădătorii din bazinul fluviului Amazon stau departe de speciile verzi sau portocalii iridescente. Aceste broaște nu își fabrică propriul venin, ci îl colectează de la furnici, acarieni și alte insecte care constituie dieta lor (dovadă de faptul că broaștele otrăvitoare ținute în captivitate și hrănite cu alte tipuri de alimente sunt mult mai puțin periculoase). ). Partea „dart” a numelui acestui amfibian derivă din faptul că triburile indigene din America de Sud își scufundă săgețile de vânătoare în veninul său.";
     }
     if(nr==9){
         $(".imagine2 img").attr("src", "../imagini/F9");
         document.getElementById("nume").innerHTML = "9.Tucan cu chilă";
         document.getElementById("text").innerHTML = "Unul dintre animalele cu aspect mai comic din bazinul fluviului Amazon, tucanul cu cioc de chilă se distinge prin cicul său enorm, multicolor, care este de fapt mult mai deschis decât pare la prima vedere (restul acestei păsări este relativ stins). de culoare, cu excepția gâtului său galben). Spre deosebire de multe dintre animalele de pe această listă, tucanul cu chilă este departe de a fi pe cale de dispariție. Pasărea țopăie de la o ramură la alta în stoluri mici de șase până la 12 indivizi, masculii duelându-se între ei cu snozele lor proeminente în timpul sezonului de împerechere (și probabil că nu provoacă o mulțime de daune).";
     }
     if(nr==10){
         $(".imagine2 img").attr("src", "../imagini/F10");
         document.getElementById("nume").innerHTML = "10. Leneș cu trei degete";
         document.getElementById("text").innerHTML = "Cu milioane de ani în urmă, în timpul Pleistocenului , pădurile tropicale din America de Sud găzduiau leneși giganți, de mai multe tone, precum Megatherium . Astăzi, unul dintre cei mai obișnuiți leneși din bazinul fluviului Amazon este leneșul cu trei degete, Bradypus tridactylus , care se caracterizează prin blana sa verzuie, cu crustă de alge, capacitatea de a înota, trei degete de la picioare și încetineala sa agonizantă - viteza medie a acestui mamifer a fost înregistrată la aproximativ o zecime de milă pe oră. Lenesul cu trei degete coexistă cu leneșul cu două degete, iar aceste două animale vor împărtăși uneori același copac.";
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
      $(".imagine2 img").attr("src", "../imagini/F1");
      document.getElementById("nume").innerHTML = "1.Piranha";
      document.getElementById("text").innerHTML = "Există multe mituri despre piranha, cum ar fi ideea că pot scheletiza o vacă în mai puțin de cinci minute. Cert este că acestor pești nici măcar nu le place să atace oamenii. Cu toate acestea, nu se poate nega faptul că piranha este construită pentru a ucide, echipată așa cum este cu dinți ascuțiți și fălci extrem de puternice, care pot să mănânce prada cu o forță de peste 70 de lire sterline pe inch pătrat. Și mai terifiant este megapiranha , un strămoș piranha uriaș care bântuia râurile Miocenului Americii de Sud.";
  }
  if(nr==2){
      $(".imagine2 img").attr("src", "../imagini/F2");
      document.getElementById("nume").innerHTML = "2. Capybara";
      document.getElementById("text").innerHTML = "Cântărind până la 68kg, capibara este cea mai mare rozătoare din lume . Are o răspândire largă în America de Sud, dar animalului îi place în special împrejurimile calde și umede ale bazinului fluviului Amazon. Capybara subziste din vegetația copioasă a pădurii tropicale, inclusiv fructe, scoarță de copac și plante acvatice și se știe că se adună în turme de până la 100 de membri. Pădurea tropicală poate fi pe cale de dispariție, dar capibara nu este; această rozătoare continuă să prospere, în ciuda faptului că este un articol popular din meniu în unele sate din America de Sud.";
  }
  if(nr==3){
      $(".imagine2 img").attr("src", "../imagini/F3");
      document.getElementById("nume").innerHTML = "3.Jaguar";
      document.getElementById("text").innerHTML = "A treia pisică ca mărime după leu și tigru, jaguarul a avut o perioadă dificilă în ultimul secol, deoarece defrișările și invadarea umană au restrâns raza de acțiune a animalului în America de Sud. Cu toate acestea, este mult mai greu să vânezi un jaguar în bazinul dens al râului Amazon decât în ​​pampa deschisă, așa că porțiunile impenetrabile ale pădurii tropicale pot fi ultima și cea mai bună speranță a lui Panthera onca . Nimeni nu știe sigur, dar există cel puțin câteva mii de jaguari care pradă megafauna din pădurea tropicală amazoniană; un prădător de vârf, jaguarul nu are de ce să se teamă de semenii săi (cu excepția, desigur, de ființe umane).";
  }
  if(nr==4){
      $(".imagine2 img").attr("src", "../imagini/F4");
      document.getElementById("nume").innerHTML = "4.Vidra uriașă";
      document.getElementById("text").innerHTML = "Cunoscuți și sub denumirea de „jaguari de apă” sau „lupi de râu”, vidrele uriașe sunt cei mai mari membri ai familiei mustelidelor și sunt strâns legate de nevăstuici. Masculii pot crește până la șase picioare lungime și cântăresc până la 75 de lire sterline, iar ambele sexe sunt cunoscute pentru hainele lor groase și lucioase - care sunt atât de râvnite de vânătorii de oameni încât au mai rămas doar aproximativ 5.000 de vidre uriașe în întregul bazin al râului Amazon. . Neobișnuit pentru mustelide (dar din fericire pentru braconieri), vidra uriașă trăiește în grupuri sociale extinse formate din aproximativ o jumătate de duzină de indivizi.";
  }
  if(nr==5){
      $(".imagine2 img").attr("src", "../imagini/F5");
      document.getElementById("nume").innerHTML = "Furnicar uriaș";
      document.getElementById("text").innerHTML = "Atât de mare încât este uneori cunoscut sub numele de ursul furnicilor, furnicarul uriaș este echipat cu un bot lung comic – ideal pentru a pătrunde în vizuini înguste de insecte – și o coadă lungă și stufoasă; unele persoane se pot apropia de 100 de kilograme în greutate. La fel ca multe dintre mamiferele de talie mare din America de Sud tropicală, furnicarul gigant este grav pe cale de dispariție. Din fericire, bazinul vast, mlaștinos și impenetrabil al râului Amazon oferă populației rămase un anumit nivel de protecție față de oameni (ca să nu mai vorbim de o cantitate inepuizabilă de furnici gustoase).";
  }
  if(nr==6){
      $(".imagine2 img").attr("src", "../imagini/F6");
      document.getElementById("nume").innerHTML = "6. Tamarin Leul de Aur";
      document.getElementById("text").innerHTML = "Cunoscut și sub denumirea de marmoset de aur, tamarinul leu de aur a suferit teribil din cauza invadării umane. Potrivit unor estimări, această maimuță din Lumea Nouă a pierdut 95% din habitatul său sud-american de la sosirea coloniștilor europeni în urmă cu 600 de ani. Tamarinul leu auriu cântărește doar câteva kilograme, ceea ce face apariția cu atât mai izbitoare: o coamă stufoasă de păr brun-roșcat înconjoară o față plată, cu ochi întunecați. (Culoarea distinctivă a acestei primate provine probabil dintr-o combinație de lumina intensă a soarelui și o abundență de carotenoizi, proteinele care fac morcovii portocalii, în dieta sa.)";
  }
  if(nr==7){
      $(".imagine2 img").attr("src", "../imagini/F7");
      document.getElementById("nume").innerHTML = "7.Caimanul Negru";
      document.getElementById("text").innerHTML = "Cea mai mare și cea mai periculoasă reptilă din bazinul fluviului Amazon, caimanul negru (tehnic o specie de aligator) se poate apropia de 20 de picioare în lungime și poate cântări până la jumătate de tonă. În calitate de prădători de vârf ai ecosistemului lor luxuriant și umed, caimanii negri vor mânca aproape orice se mișcă, de la mamifere la păsări până la alte reptile. În anii 1970, caimanul negru era serios pe cale de dispariție – vizat de oameni pentru carnea și pielea sa valoroasă – dar populația sa a revenit de atunci.";
  }
  if(nr==8){
      $(".imagine2 img").attr("src", "../imagini/F8");
      document.getElementById("nume").innerHTML = "Broasca Otrăvitoare";
      document.getElementById("text").innerHTML = "Ca regulă generală, cu cât o broaște săgeată otrăvitoare este mai viu colorată, cu atât veninul ei este mai puternic – motiv pentru care prădătorii din bazinul fluviului Amazon stau departe de speciile verzi sau portocalii iridescente. Aceste broaște nu își fabrică propriul venin, ci îl colectează de la furnici, acarieni și alte insecte care constituie dieta lor (dovadă de faptul că broaștele otrăvitoare ținute în captivitate și hrănite cu alte tipuri de alimente sunt mult mai puțin periculoase). ). Partea „dart” a numelui acestui amfibian derivă din faptul că triburile indigene din America de Sud își scufundă săgețile de vânătoare în veninul său.";
  }
  if(nr==9){
      $(".imagine2 img").attr("src", "../imagini/F9");
      document.getElementById("nume").innerHTML = "9.Tucan cu chilă";
      document.getElementById("text").innerHTML = "Unul dintre animalele cu aspect mai comic din bazinul fluviului Amazon, tucanul cu cioc de chilă se distinge prin cicul său enorm, multicolor, care este de fapt mult mai deschis decât pare la prima vedere (restul acestei păsări este relativ stins). de culoare, cu excepția gâtului său galben). Spre deosebire de multe dintre animalele de pe această listă, tucanul cu chilă este departe de a fi pe cale de dispariție. Pasărea țopăie de la o ramură la alta în stoluri mici de șase până la 12 indivizi, masculii duelându-se între ei cu snozele lor proeminente în timpul sezonului de împerechere (și probabil că nu provoacă o mulțime de daune).";
  }
  if(nr==10){
      $(".imagine2 img").attr("src", "../imagini/F10");
      document.getElementById("nume").innerHTML = "10. Leneș cu trei degete";
      document.getElementById("text").innerHTML = "Cu milioane de ani în urmă, în timpul Pleistocenului , pădurile tropicale din America de Sud găzduiau leneși giganți, de mai multe tone, precum Megatherium . Astăzi, unul dintre cei mai obișnuiți leneși din bazinul fluviului Amazon este leneșul cu trei degete, Bradypus tridactylus , care se caracterizează prin blana sa verzuie, cu crustă de alge, capacitatea de a înota, trei degete de la picioare și încetineala sa agonizantă - viteza medie a acestui mamifer a fost înregistrată la aproximativ o zecime de milă pe oră. Lenesul cu trei degete coexistă cu leneșul cu două degete, iar aceste două animale vor împărtăși uneori același copac.";
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
      $(".imagine2 img").attr("src", "../imagini/F1");
      document.getElementById("nume").innerHTML = "1.Piranha";
      document.getElementById("text").innerHTML = "Există multe mituri despre piranha, cum ar fi ideea că pot scheletiza o vacă în mai puțin de cinci minute. Cert este că acestor pești nici măcar nu le place să atace oamenii. Cu toate acestea, nu se poate nega faptul că piranha este construită pentru a ucide, echipată așa cum este cu dinți ascuțiți și fălci extrem de puternice, care pot să mănânce prada cu o forță de peste 70 de lire sterline pe inch pătrat. Și mai terifiant este megapiranha , un strămoș piranha uriaș care bântuia râurile Miocenului Americii de Sud.";
  }
  if(nr==2){
      $(".imagine2 img").attr("src", "../imagini/F2");
      document.getElementById("nume").innerHTML = "2. Capybara";
      document.getElementById("text").innerHTML = "Cântărind până la 68kg, capibara este cea mai mare rozătoare din lume . Are o răspândire largă în America de Sud, dar animalului îi place în special împrejurimile calde și umede ale bazinului fluviului Amazon. Capybara subziste din vegetația copioasă a pădurii tropicale, inclusiv fructe, scoarță de copac și plante acvatice și se știe că se adună în turme de până la 100 de membri. Pădurea tropicală poate fi pe cale de dispariție, dar capibara nu este; această rozătoare continuă să prospere, în ciuda faptului că este un articol popular din meniu în unele sate din America de Sud.";
  }
  if(nr==3){
      $(".imagine2 img").attr("src", "../imagini/F3");
      document.getElementById("nume").innerHTML = "3.Jaguar";
      document.getElementById("text").innerHTML = "A treia pisică ca mărime după leu și tigru, jaguarul a avut o perioadă dificilă în ultimul secol, deoarece defrișările și invadarea umană au restrâns raza de acțiune a animalului în America de Sud. Cu toate acestea, este mult mai greu să vânezi un jaguar în bazinul dens al râului Amazon decât în ​​pampa deschisă, așa că porțiunile impenetrabile ale pădurii tropicale pot fi ultima și cea mai bună speranță a lui Panthera onca . Nimeni nu știe sigur, dar există cel puțin câteva mii de jaguari care pradă megafauna din pădurea tropicală amazoniană; un prădător de vârf, jaguarul nu are de ce să se teamă de semenii săi (cu excepția, desigur, de ființe umane).";
  }
  if(nr==4){
      $(".imagine2 img").attr("src", "../imagini/F4");
      document.getElementById("nume").innerHTML = "4.Vidra uriașă";
      document.getElementById("text").innerHTML = "Cunoscuți și sub denumirea de „jaguari de apă” sau „lupi de râu”, vidrele uriașe sunt cei mai mari membri ai familiei mustelidelor și sunt strâns legate de nevăstuici. Masculii pot crește până la șase picioare lungime și cântăresc până la 75 de lire sterline, iar ambele sexe sunt cunoscute pentru hainele lor groase și lucioase - care sunt atât de râvnite de vânătorii de oameni încât au mai rămas doar aproximativ 5.000 de vidre uriașe în întregul bazin al râului Amazon. . Neobișnuit pentru mustelide (dar din fericire pentru braconieri), vidra uriașă trăiește în grupuri sociale extinse formate din aproximativ o jumătate de duzină de indivizi.";
  }
  if(nr==5){
      $(".imagine2 img").attr("src", "../imagini/F5");
      document.getElementById("nume").innerHTML = "Furnicar uriaș";
      document.getElementById("text").innerHTML = "Atât de mare încât este uneori cunoscut sub numele de ursul furnicilor, furnicarul uriaș este echipat cu un bot lung comic – ideal pentru a pătrunde în vizuini înguste de insecte – și o coadă lungă și stufoasă; unele persoane se pot apropia de 100 de kilograme în greutate. La fel ca multe dintre mamiferele de talie mare din America de Sud tropicală, furnicarul gigant este grav pe cale de dispariție. Din fericire, bazinul vast, mlaștinos și impenetrabil al râului Amazon oferă populației rămase un anumit nivel de protecție față de oameni (ca să nu mai vorbim de o cantitate inepuizabilă de furnici gustoase).";
  }
  if(nr==6){
      $(".imagine2 img").attr("src", "../imagini/F6");
      document.getElementById("nume").innerHTML = "6. Tamarin Leul de Aur";
      document.getElementById("text").innerHTML = "Cunoscut și sub denumirea de marmoset de aur, tamarinul leu de aur a suferit teribil din cauza invadării umane. Potrivit unor estimări, această maimuță din Lumea Nouă a pierdut 95% din habitatul său sud-american de la sosirea coloniștilor europeni în urmă cu 600 de ani. Tamarinul leu auriu cântărește doar câteva kilograme, ceea ce face apariția cu atât mai izbitoare: o coamă stufoasă de păr brun-roșcat înconjoară o față plată, cu ochi întunecați. (Culoarea distinctivă a acestei primate provine probabil dintr-o combinație de lumina intensă a soarelui și o abundență de carotenoizi, proteinele care fac morcovii portocalii, în dieta sa.)";
  }
  if(nr==7){
      $(".imagine2 img").attr("src", "../imagini/F7");
      document.getElementById("nume").innerHTML = "7.Caimanul Negru";
      document.getElementById("text").innerHTML = "Cea mai mare și cea mai periculoasă reptilă din bazinul fluviului Amazon, caimanul negru (tehnic o specie de aligator) se poate apropia de 20 de picioare în lungime și poate cântări până la jumătate de tonă. În calitate de prădători de vârf ai ecosistemului lor luxuriant și umed, caimanii negri vor mânca aproape orice se mișcă, de la mamifere la păsări până la alte reptile. În anii 1970, caimanul negru era serios pe cale de dispariție – vizat de oameni pentru carnea și pielea sa valoroasă – dar populația sa a revenit de atunci.";
  }
  if(nr==8){
      $(".imagine2 img").attr("src", "../imagini/F8");
      document.getElementById("nume").innerHTML = "Broasca Otrăvitoare";
      document.getElementById("text").innerHTML = "Ca regulă generală, cu cât o broaște săgeată otrăvitoare este mai viu colorată, cu atât veninul ei este mai puternic – motiv pentru care prădătorii din bazinul fluviului Amazon stau departe de speciile verzi sau portocalii iridescente. Aceste broaște nu își fabrică propriul venin, ci îl colectează de la furnici, acarieni și alte insecte care constituie dieta lor (dovadă de faptul că broaștele otrăvitoare ținute în captivitate și hrănite cu alte tipuri de alimente sunt mult mai puțin periculoase). ). Partea „dart” a numelui acestui amfibian derivă din faptul că triburile indigene din America de Sud își scufundă săgețile de vânătoare în veninul său.";
  }
  if(nr==9){
      $(".imagine2 img").attr("src", "../imagini/F9");
      document.getElementById("nume").innerHTML = "9.Tucan cu chilă";
      document.getElementById("text").innerHTML = "Unul dintre animalele cu aspect mai comic din bazinul fluviului Amazon, tucanul cu cioc de chilă se distinge prin cicul său enorm, multicolor, care este de fapt mult mai deschis decât pare la prima vedere (restul acestei păsări este relativ stins). de culoare, cu excepția gâtului său galben). Spre deosebire de multe dintre animalele de pe această listă, tucanul cu chilă este departe de a fi pe cale de dispariție. Pasărea țopăie de la o ramură la alta în stoluri mici de șase până la 12 indivizi, masculii duelându-se între ei cu snozele lor proeminente în timpul sezonului de împerechere (și probabil că nu provoacă o mulțime de daune).";
  }
  if(nr==10){
      $(".imagine2 img").attr("src", "../imagini/F10");
      document.getElementById("nume").innerHTML = "10. Leneș cu trei degete";
      document.getElementById("text").innerHTML = "Cu milioane de ani în urmă, în timpul Pleistocenului , pădurile tropicale din America de Sud găzduiau leneși giganți, de mai multe tone, precum Megatherium . Astăzi, unul dintre cei mai obișnuiți leneși din bazinul fluviului Amazon este leneșul cu trei degete, Bradypus tridactylus , care se caracterizează prin blana sa verzuie, cu crustă de alge, capacitatea de a înota, trei degete de la picioare și încetineala sa agonizantă - viteza medie a acestui mamifer a fost înregistrată la aproximativ o zecime de milă pe oră. Lenesul cu trei degete coexistă cu leneșul cu două degete, iar aceste două animale vor împărtăși uneori același copac.";
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
 
  