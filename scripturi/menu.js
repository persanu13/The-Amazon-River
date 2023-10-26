var deschis=false;
var click=false;
var myVar;
var myVar2;
ismoving=false;
var el = document.querySelector('.menu');
n=el.children.length;


anime.set(el, {
 
  });




$(document).ready(function(){

    $("#item1").click(function(){
        if(!click){
            if(!ismoving){
                if(!deschis){
                    Open();
                }else{
                    Close()
                }
            
            click=true;
            setTimeout(function(){ click=false}, 1300);
            }
        }
      
    });

  });


  

$( function() {
    $( "#item1" ).draggable({
          containment:"body",

        start: function() {
          ismoving=true;
          Close();
        }  
    },
    {
        drag: function() {
            move();
            myStopFunction();
            myFunction();

     
         
        
        }
    },


    {
        stop: function() {
          enddrag();
          myStopFunction2();
            myFunction2();
            
        }


    }
    );
  });

  function Open() {
    var el = document.querySelector("#item1");
    x=anime.get(el, 'left', 'em');
    console.log(x);
    if(x<0){
        semn=1;
    }else{
        semn=-1;
    }
    
    anime({
        targets: '.item',
        translateX: function(item, i) {
            return semn * (n*100 - 100) + (-100 * i *semn);
        },
        delay:function(item, i) {
            return 200 + (-50 * i);
        },
        elasticity: 500,
        duration:2000,
      });
       deschis=true;
       anime({
        targets: '.center path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1500,
        delay: function(el, i) { return 600+(-i * 150) },
       
     
      });
  }
 



  function Close() {
    anime({
        targets: '.item',
        translateX:0,
        delay:function(item, i) {
            return 200 + (50 * i);
        },
        elasticity: 500,
        duration:2000,
      });
      deschis=false;
  }






function move(){    
for (let i = 1; i < n; i++) {
    var el = document.querySelector("#item"+i);
    x=anime.get(el, 'left', 'px');
    y=anime.get(el, 'top', 'px')
    anime({
        targets: '#item'+(i+1),
        left:x,
        top:y,
        duration:300,
       
})
  }

}

function enddrag(){
    for (let i = 1; i < n; i++) {
        var el = document.querySelector("#item1");
        x=anime.get(el, 'left', 'px');
        y=anime.get(el, 'top', 'px')
        anime({
            targets: '#item'+(i+1),
            left:x,
            top:y,
            duration:700,
            elasticity:500,
    })
      }
}




        
function myStopFunction() {
    clearTimeout(myVar);
}


function myFunction() {
myVar = setTimeout(function(){enddrag();}, 50);
 }

         
function myStopFunction2() {
    clearTimeout(myVar2);
}


function myFunction2() {
myVar2 = setTimeout(function(){ ismoving=false;}, 50);
 }
