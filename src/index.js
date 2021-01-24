// import cipher from './cipher.js';
// console.log(cipher);

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

    var input1 = document.getElementById("decode");
    input1.value =" ";
});

var back2 = document.getElementById("back2");
back2.addEventListener('click', () => {
    screen2.style.display="block";
    screen4.style.display="none";
    screen5.style.display="none";

    var input2 = document.getElementById("code");
    input2.value =" ";

    if(document.getElementById("background").style.display=="none"){
        document.getElementById("background").style.display="block";
    }
});


var personalize = document.getElementById("personalize");
personalize.addEventListener('click', () => {
    if(screen5.style.display=="none"){
        screen5.style.display="block";
        document.getElementById("background").style.display="none";
        document.getElementById("code2").style.display="none";
    } else{
        screen5.style.display="none";
        document.getElementById("background").style.display="block";
        document.getElementById("code2").style.display="block";
    }
});
    
var password = document.getElementById("password");
password.addEventListener('click', () => {
    if(screen6.style.display=="none"){
        screen6.style.display="block";
        document.getElementById("background").style.display="none";
        document.getElementById("decode2").style.display="none";
    } else{
        screen6.style.display="none";
        document.getElementById("background").style.display="block";
        document.getElementById("decode2").style.display="block";
    }
});
    


var def = 33; 
var def2 = 17;
var def3 = 19;
var def4 = 3;

function code() {
    var code = document.getElementById("code").value;

    var arr = [];

    for( let i=0 ; i<code.length;i++) {

        var asciiNum= code.charCodeAt(i)
            
        if ((asciiNum>47) && (58>asciiNum)){
            var arr8 = ((asciiNum-48+def2)%10)+48;
            var arr9 = String.fromCharCode(arr8);
            arr.push(arr9);

        } else if ((asciiNum>96) && (123>asciiNum)){
            
            var arr4 = ((asciiNum-97 +def)%26)+97;
            var arr5 = String.fromCharCode(arr4);
            arr.push(arr5);
            
        } else if ((asciiNum>64) && (91>asciiNum)){
            var arr2 = ((asciiNum-65+def)%26)+65;
            var arr3 = String.fromCharCode(arr2);
            arr.push(arr3);

        } else {
            var arr6 = asciiNum;
            var arr7 = String.fromCharCode(arr6);
            arr.push(arr7);
        } 

    } 

    document.getElementById("code").value= arr.join('');
    
}

var code2 = document.getElementById("code2");
code2.addEventListener('click', code); 


function listo() {
    var code = document.getElementById("code").value;
    def = parseInt(document.getElementById("number").value);
    def2 = parseInt(document.getElementById("number").value);
    var arr = [];

    for( let i=0 ; i<code.length;i++) {

        var asciiNum= code.charCodeAt(i)
            
        if ((asciiNum>47) && (58>asciiNum)){
            var arr8 = ((asciiNum-48+def2)%10)+48;
            var arr9 = String.fromCharCode(arr8);
            arr.push(arr9);

        } else if ((asciiNum>96) && (123>asciiNum)){
            
            var arr4 = ((asciiNum-97 +def)%26)+97;
            var arr5 = String.fromCharCode(arr4);
            arr.push(arr5);
            
        } else if ((asciiNum>64) && (91>asciiNum)){
            var arr2 = ((asciiNum-65+def)%26)+65;
            var arr3 = String.fromCharCode(arr2);
            arr.push(arr3);

        } else {
            var arr6 = asciiNum;
            var arr7 = String.fromCharCode(arr6);
            arr.push(arr7);
        } 

    } 

    document.getElementById("code").value= arr.join('');
    
}

var listo2 = document.getElementById("listo");
listo2.addEventListener('click', listo); 


function decode() {
    var decode = document.getElementById("decode").value;
    var arr = [];

    for( let i=0 ; i<decode.length;i++) {

        var asciiNum= decode.charCodeAt(i)
        
        if ((asciiNum>47) && (58>asciiNum)){
            var arr8 = ((asciiNum-48+def4)%10)+48;
            var arr9 = String.fromCharCode(arr8);
            arr.push(arr9);

        } else if ((asciiNum>96) && (123>asciiNum)){
            
            var arr4 = ((asciiNum-97+def3)%26)+97;
            var arr5 = String.fromCharCode(arr4);
            arr.push(arr5);   

        } else if ((asciiNum>64) && (91>asciiNum)){
            var arr2 = ((asciiNum-65+def3)%26)+65;
            var arr3 = String.fromCharCode(arr2);
            arr.push(arr3);

        } else {
            var arr6 = asciiNum;
            var arr7 = String.fromCharCode(arr6);
            arr.push(arr7);
        } 
            
    } 

    document.getElementById("decode").value= arr.join('');
    
}

var decode2 = document.getElementById("decode2");
decode2.addEventListener('click', decode); 

function listo3() {
    var decode = document.getElementById("decode").value;
    def3 = parseInt(document.getElementById("number2").value);
    def4 = parseInt(document.getElementById("number2").value);
    var arr = [];

    for( let i=0 ; i<decode.length;i++) {

        var asciiNum= decode.charCodeAt(i)
        
        if ((asciiNum>47) && (58>asciiNum)){
            var arr8 = (((asciiNum-48-def4)%10)+10)%26+48;
            var arr9 = String.fromCharCode(arr8);
            arr.push(arr9);

        } else if ((asciiNum>96) && (123>asciiNum)){
            
            var arr4 = ((((asciiNum-97)-def3)%26)+26)%26+97;
            var arr5 = String.fromCharCode(arr4);
            arr.push(arr5);   

        } else if ((asciiNum>64) && (91>asciiNum)){
            var arr2 = ((((asciiNum-65)-def3)%26)+26)%26+65;
            var arr3 = String.fromCharCode(arr2);
            arr.push(arr3);

        } else {
            var arr6 = asciiNum;
            var arr7 = String.fromCharCode(arr6);
            arr.push(arr7);
        }         
    } 

    document.getElementById("decode").value= arr.join('');
    
}

var listo4 = document.getElementById("listo2");
listo4.addEventListener('click', listo3); 
