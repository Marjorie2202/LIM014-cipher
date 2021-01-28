import cipher from './cipher.js';
//console.log(cipher);

var screen1 = document.getElementById("screen1");
screen1.style.display="block";
var screen2 = document.getElementById("screen2");
screen2.style.display="none";
var screen3 = document.getElementById("screen3");
screen3.style.display="none";
var screen4 = document.getElementById("screen4");
screen4.style.display="none";
var screen5 = document.getElementById("screen5");
screen5.style.display="none";
var screen6 = document.getElementById("screen6");
screen6.style.display="none";


screen1.addEventListener('click', () => {
    screen1.style.display="none";
    screen2.style.display="block";
});


var select2 = document.getElementById("select2");
select2.addEventListener('click', () => {
    screen2.style.display="none";
    screen4.style.display="block";
});


var select1 = document.getElementById("select1");
select1.addEventListener('click', () => {
    screen2.style.display="none";
    screen3.style.display="block";
});

var back = document.getElementById("back");
back.addEventListener('click', () => {
    screen2.style.display="block";
    screen3.style.display="none";

    var input1 = document.getElementById("toDecode");
    input1.value ="";
});

var back2 = document.getElementById("back2");
back2.addEventListener('click', () => {
    screen2.style.display="block";
    screen4.style.display="none";
    screen5.style.display="none";

    var input2 = document.getElementById("toCode");
    input2.value ="";

    if(document.getElementById("background").style.display=="none"){
        document.getElementById("background").style.display="block";
    }
});


var personalize = document.getElementById("personalize");
personalize.addEventListener('click', () => {
    if(screen5.style.display=="none"){
        screen5.style.display="block";
        document.getElementById("background").style.display="none";

    } else{
        screen5.style.display="none";
        document.getElementById("background").style.display="block";
    }
});
    
var password = document.getElementById("password");
password.addEventListener('click', () => {
    if(screen6.style.display=="none"){
        screen6.style.display="block";
        document.getElementById("background").style.display="none";

    } else{
        screen6.style.display="none";
        document.getElementById("background").style.display="block";

    }
});





var codeBtn = document.getElementById("codeBtn");
codeBtn.addEventListener('click', function(){

    var toCode= document.getElementById("toCode").value;
    var codeInput= document.getElementById("codeInput").value;

    if(toCode=="" || codeInput==""){
         if(toCode=="" ){
         alert( "Ingresa tu mensaje!♡")
        } else{
            alert("Ingresa tu código secreto!♡")
        }
    } else{
    document.getElementById("toCode").value=cipher.encode(codeInput,toCode);
    }

}

); 

var decodeBtn = document.getElementById("decodeBtn");
decodeBtn.addEventListener('click', function (){

    var toDecode = document.getElementById("toDecode").value;
    var decodeInput= document.getElementById("decodeInput").value;

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



// function cipher(ascii, asciiStart, cipherKey,resi){

//     var arr1 = ((ascii-asciiStart+cipherKey)%resi)+asciiStart;
//     var arr2 = String.fromCharCode(arr1);
//     return arr2;
// }


// function letsCode() {

//     var coding = document.getElementById("toCode").value;
//     var def = parseInt(document.getElementById("codeInput").value);
//     var arr= [];
//     var newAscii;
    
//     for( var i=0 ; i<coding.length;i++) {
        
//         var ascii= coding.charCodeAt(i);
                
//         if ((ascii>47) && (58>ascii)){
//             newAscii = cipher(ascii,48,def,10);

//         } else if ((ascii>96) && (123>ascii)){
//             newAscii = cipher(ascii,97,def,26);

//         } else if ((ascii>64) && (91>ascii)){
//             newAscii = cipher(ascii,65,def,26);

//         } else {
//             newAscii = String.fromCharCode(ascii);

//         } 
//         arr.push(newAscii); 
        
//     }

//     document.getElementById("toCode").value= arr.join('');
// }

// var codeBtn = document.getElementById("codeBtn");
// codeBtn.addEventListener('click', letsCode); 

// function decipher(ascii, asciiStart, cipherKey,resi){

//     var arr1 = (((ascii-asciiStart-cipherKey)%resi)+resi)%resi+asciiStart;
//     var arr2 = String.fromCharCode(arr1);
//     return arr2;
// }

// function letsDecode() {

//     var def2 = parseInt(document.getElementById("decodeInput").value);
//     var decoding = document.getElementById("decode").value;
//     var arr= [];
//     var ascii ;
//     var newAscii ;

//     for( var i=0 ; i<decoding.length;i++) {

//         ascii= decoding.charCodeAt(i)
                
//         if ((ascii>47) && (58>ascii)){
//             newAscii = decipher(ascii,48,def2,10);

//         } else if ((ascii>96) && (123>ascii)){
//             newAscii = decipher(ascii,97,def2,26);

//         } else if ((ascii>64) && (91>ascii)){
//             newAscii = decipher(ascii,65,def2,26);

//         } else {
//             newAscii = String.fromCharCode(ascii);

//         } 
//         arr.push(newAscii);
//     }
    
//     document.getElementById("decode").value= arr.join('');
// }

// var decodeBtn = document.getElementById("decodeBtn");
// decodeBtn.addEventListener('click', letsDecode); 