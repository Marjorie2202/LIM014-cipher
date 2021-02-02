import cipher from './cipher.js';
//console.log(cipher);

const screen1 = document.getElementById("screen1");
screen1.style.display="block";
const screen2 = document.getElementById("screen2");
screen2.style.display="none";
const screen3 = document.getElementById("screen3");
screen3.style.display="none";
const screen4 = document.getElementById("screen4");
screen4.style.display="none";
const screen5 = document.getElementById("screen5");
screen5.style.display="none";
const screen6 = document.getElementById("screen6");
screen6.style.display="none";


screen1.addEventListener('click', () => {
    screen1.style.display="none";
    screen2.style.display="block";
});

const select2 = document.getElementById("select2");
select2.addEventListener('click', () => {
    screen2.style.display="none";
    screen4.style.display="block";

    if(document.getElementById("background2").style.display=="none"){
        document.getElementById("background2").style.display="block";
    }
});


const select1 = document.getElementById("select1");
select1.addEventListener('click', () => {
    screen2.style.display="none";
    screen3.style.display="block";

    if(document.getElementById("background1").style.display=="none"){
        document.getElementById("background1").style.display="block";
    }
});

const back = document.getElementById("back");
back.addEventListener('click', () => {
    screen2.style.display="block";
    screen3.style.display="none";
    screen6.style.display="none";

    const newText = document.getElementById("toDecode");
    newText.value ="";

    const newInput = document.getElementById("decodeInput");
    newInput.value ="";

    if(document.getElementById("background").style.display=="none"){
        document.getElementById("background").style.display="block";
    }
});

const back2 = document.getElementById("back2");
back2.addEventListener('click', () => {
    screen2.style.display="block";
    screen4.style.display="none";
    screen5.style.display="none";

    const newText = document.getElementById("toCode");
    newText.value ="";

    const newInput = document.getElementById("codeInput");
    newInput.value ="";

    if(document.getElementById("background").style.display=="none"){
         document.getElementById("background").style.display="block";
     }

});


const personalize = document.getElementById("personalize");
personalize.addEventListener('click', () => {
    if(screen5.style.display=="none"){
        screen5.style.display="block";
        document.getElementById("background2").style.display="none";

    } else{
        screen5.style.display="none";
        document.getElementById("background2").style.display="block";
    }
});
    
const password = document.getElementById("password");
password.addEventListener('click', () => {
    if(screen6.style.display=="none"){
        screen6.style.display="block";
        document.getElementById("background1").style.display="none";

    } else{
        screen6.style.display="none";
        document.getElementById("background1").style.display="block";

    }
});





const codeBtn = document.getElementById("codeBtn");
codeBtn.addEventListener('click', function(){

    let toCode= document.getElementById("toCode").value;
    let codeInput= document.getElementById("codeInput").value;

    if(toCode=="" || codeInput==""){
         if(toCode=="" ){
         alert( "Ingresa tu mensaje!♡")
        } else{
            alert("Ingresa tu código secreto!♡")
        }

    } else {

        document.getElementById("toCode").value=cipher.encode(codeInput,toCode);
    }
   // console.log(cipher.encode(null,[]))
}

); 

const decodeBtn = document.getElementById("decodeBtn");
decodeBtn.addEventListener('click', function (){

    let toDecode = document.getElementById("toDecode").value;
    let decodeInput= document.getElementById("decodeInput").value;

    if(toDecode=="" || decodeInput==""){
        if(toDecode=="" ){
        alert( "Ingresa tu mensaje!♡")
        } else{
            alert("Ingresa tu código secreto!♡")
        }
    } else{
        document.getElementById("toDecode").value=cipher.decode(decodeInput,toDecode);
    }
}

);

