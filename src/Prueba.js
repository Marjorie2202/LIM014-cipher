
var def = 33; 
var def2 = 17;
var def3 = 19;
var def4 = 3;

var code = document.getElementById("code").value;
var decode = document.getElementById("decode").value;

function cipher(ascii, asciiStart, cipherKey,resi){

    var arr1 = ((ascii-asciiStart+cipherKey)%resi)+cipherKey;
    var arr2 = String.fromCharCode(arr1);
    return arr2;
}

function letsCode(htmlInput) {

    var defAlph
    var defNum
    var arr= [];
    var ascii 
    var newAscii

    switch (htmlInput.id) {

        case "code": 

            defNum= def2;
            defAlph=def;
            break;
    
        case "decode":
            defNum= def4;
            defAlph=def3;

            break;

        default:
            break;
    }
    
    for( let i=0 ; i<code.length;i++) {

        ascii= code.charCodeAt(i)
            
        if ((ascii>47) && (58>ascii)){
            newAscii = cipher(48,defNum,10,48);

        } else if ((ascii>96) && (123>ascii)){
            newAscii = cipher(97,defAlph,26,97);
            
        } else if ((ascii>64) && (91>ascii)){
            newAscii = cipher(65,defAlph,26,65);

        } else {
            newAscii = ascii
        } 

        arr.push(newAscii);
    } 
    document.getElementById("code").value= arr.join('');
}

var codeBtn = document.getElementById("codeBtn");
codeBtn.addEventListener('click', letsCode(code)); 

var decodeBtn = document.getElementById("decodeBtn");
decodeBtn.addEventListener('click', letsCode(decode)); 