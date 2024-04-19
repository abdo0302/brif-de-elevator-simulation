var audio = new Audio('./sound/aa.mp3')
var audio1 = new Audio('./sound/mt.mp3')
let itge=document.querySelector(".itge");
let stepss=document.querySelector(".stepss")
let time=0;
let temps=[];
let debut=20;
let position=0;
let nombr_steps=0;
         // Mouvement d'ascenseur
let porte=document.querySelector(".porte");    

function Mouvement_ascenseur_top(fin,t){
    porte.animate([
        {
            bottom: `${debut}%`
        },
        {
            bottom: `${fin}%`
        }
    ],{
        
        duration:t*1000,
        fill:"forwards"
    });
        let c=fin-debut
        c=c>0?c:c*-1
        nombr_steps+=(c)/20
}

   
let p1=document.querySelector(".p1");
let p2=document.querySelector(".p2");    


function Porte_ouverte(){
    audio1.pause()
    p1.animate([
        {
            width: "50%"
        },
        {
            width: "10%"
        }
    ],{
        duration:3000,
        fill:"forwards"
    });

    p2.animate([
        {
            width: "50%"
        },
        {
            width: "10%"
        }
    ],{
        duration:3000,
        fill:"forwards"
    });
    audio.play();
}
//Porte_ouverte()

       // Fermer les portes
       

function Porte_Fermer(){
    p1.animate([
        {
            width: "10%"
        },
        {
            width: "50%"
        }
    ],{
        duration:3000,
        fill:"forwards"
    });

    p2.animate([
        {
            width: "10%"
        },
        {
            width: "50%"
        }
    ],{
        duration:3000,
        fill:"forwards"
    });    
    audio.play();
}
//Porte_Fermer()
       
            // Imprimer des chiffres sur l'écran
let les_tage=[]; 
let les_tage_bottom=[];          
let nombre_tage=document.querySelector(".n_tage span");
let buttons=Array.from(document.querySelectorAll(".button_de_tage a"));

buttons.forEach((e, i) => {
    e.addEventListener("click",function(){
        e.style.cssText="border: 1px solid rgb(0, 255, 21);"; 
        if(i>position){
            nombre_tage.textContent +=" R"+i;
        switch (i) {
            case 1:
                les_tage.push(40);
                temps.push(2);
                position=1;
                
                if(mov_top==false && mov_botm==false){
                mo() 
                }
                break;
            case 2:
                les_tage.push(60);
                temps.push(3);
                position=2;
                
                if(mov_top==false && mov_botm==false){
                mo()
                }
                break;
            case 3:
               les_tage.push(80);
                temps.push(5);
                position=3;
                
                if(mov_top==false && mov_botm==false){
                    mo() 

                }
                break; 
            case 4:
                les_tage.push(100);
                temps.push(6);
                position=4;
                
                if(mov_top==false && mov_botm==false){
                    mo() 
                }
                break;        
        
            default:
                break;
                
        }   
        }else if(i<position){
            nombre_tage.textContent +=" R"+i;
            switch (i) {
                case 0:
                    les_tage_bottom.push(20);
                    temps.push(3);
                    position=0;
                    
                    if(mov_top==false && mov_botm==false){
                        mo() 
                    }
                    break;
                case 1:
                    les_tage_bottom.push(40);
                    temps.push(4);
                    position=1; 
                    
                    if(mov_top==false && mov_botm==false){
                        mo() 
                    }
                    break;
                case 2:
                    les_tage_bottom.push(60);
                    temps.push(3);
                    position=2;
                    
                    if(mov_top==false && mov_botm==false){
                        mo() 
                    }
                    break;
                case 3:
                    les_tage_bottom.push(80);
                    temps.push(2);
                    position=3
                   
                    if(mov_top==false && mov_botm==false){
                        mo() 
                    }
                    break;      
                default:
                    break;
        }
        }/*else if(i==position){
                nombre_tage.textContent="error";
                setTimeout(() => {
                    nombre_tage.textContent="";
                    e.style.cssText="none";
                }, 500);
            }*/
     console.log(les_tage)
     console.log(les_tage_bottom)

    })

});

           // Effacer les chiffres à l'écran
let reset=document.querySelector(".reset");
reset.onclick=function (){
    
    if(mov_top==false && mov_botm==false){
       for(let i=0;i<buttons.length;i++){
        buttons[i].style.cssText="border:none;";
        } 
        les_tage.length=0;
        les_tage_bottom.length=0;
        Start.disabled=false
        nombr_steps=0
        stepss.textContent=0;
        temps.push(1);
        les_tage_bottom.push(20);
        if(les_tage_bottom[0]!==debut){
          mo()  
        }
        position=0
        t=false
        nombre_tage.textContent="";
    }
    


    
}      

//


        //Un programme a commencé à fonctionner
let Start=document.querySelector(".Start");
let mov_top=false;
let mov_botm=false;
let t=false;

function mo(){

    if(t){
        if(nombre_tage.textContent==""){
            nombre_tage.textContent="error";
            setTimeout(() => {
                nombre_tage.textContent="";
            }, 500);
        }
        for(let i=0;i<buttons.length;i++){
            buttons[i].style.cssText="border:none;";
        }
        if(les_tage[0]>les_tage_bottom[0] || les_tage_bottom.length==0 ){
            moveElevator() 
            mov_top=true
             
        }else if(les_tage[0]<les_tage_bottom[0] || les_tage.length==0 ){
            moveElevator_buttom()
            mov_botm=true
           
        }
        function moveElevator() {
            stepss.textContent=nombr_steps;
            let t_top
            if (les_tage.length > 0 && mov_botm==false) {
                itge.textContent=time
                time=temps[0]+4
                t_top=setInterval(() => {
                               
                               time--;
                                itge.textContent=time;
                          }, 1000);        
                Porte_Fermer()
                setTimeout(() => {
                    audio1.play();
                    Mouvement_ascenseur_top(les_tage[0],temps[0])
                     
                }, 4000);
                setTimeout(() => {
                    Porte_ouverte()
                    setTimeout(() => {
                            moveElevator()
                    }, 4000);
                        debut=les_tage[0];
                        les_tage.shift();
                        temps.shift();
                        
                        clearInterval(t_top)
                    
                }, 2000+((temps[0]+2)*1000));
                
            }else{
                mov_top=false
                if(les_tage_bottom.length > 0){
                    moveElevator_buttom()
                }
            }
            
        }
        
        function moveElevator_buttom(){
            stepss.textContent=nombr_steps;
            let t_buttom;
            if (les_tage_bottom.length > 0 &&mov_top==false) {
                itge.textContent=time
                time=temps[0]+4
                t_buttom=setInterval(() => {
                               
                    time--;
                     itge.textContent=time;
                }, 1000);
                Porte_Fermer()
                 audio1.play();
                setTimeout(() => {
                    Mouvement_ascenseur_top(les_tage_bottom[0],temps[0])
                }, 4000);
                setTimeout(() => {
                    Porte_ouverte()
                    setTimeout(() => {
                   moveElevator_buttom()
                    }, 4000);
                        debut=les_tage_bottom[0];
                    les_tage_bottom.shift(); 
                    temps.shift()
                    clearInterval(t_buttom)
                }, 2000+((temps[0]+2)*1000)); 
            }else{
                mov_botm=false;
                if(les_tage.length > 0){
                    moveElevator()
                }
            }
            
        }
    }

}
Start.onclick=function () {
    if(les_tage_bottom.length > 0 || les_tage.length > 0){
    Start.disabled=true
    t=true;
    mo()
    }
    
    }
    
