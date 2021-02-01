const cipher = {
  
    encode: function (codeInput,toCode){
      var arr = [];

        if ( codeInput==null || isNaN(codeInput)|| toCode==[]) {
            throw TypeError("Ingresa datos correctos!");
        } else{

            for( let i=0 ; i<toCode.length;i++) {
    
            var ascii= toCode.charCodeAt(i)
            var result;
    
            if ((ascii>47) && (58>ascii)){
                var arr8 = ((ascii-48+parseInt(codeInput))%10)+48;
                var arr9 = String.fromCharCode(arr8);
                arr.push(arr9);
    
            } else if ((ascii>96) && (123>ascii)){
                var arr4 = ((ascii-97 +parseInt(codeInput))%26)+97;
                var arr5 = String.fromCharCode(arr4);
                arr.push(arr5);
                
            } else if ((ascii>64) && (91>ascii)){
                var arr2 = ((ascii-65+parseInt(codeInput))%26)+65;
                var arr3 = String.fromCharCode(arr2);
                arr.push(arr3);
    
            } else {
                var arr6 = ascii;
                var arr7 = String.fromCharCode(arr6);
                arr.push(arr7);
            } 

        
            }
            result= arr.join('');
            return result;
        }
    },
  
  
    decode: function (decodeInput,toDecode){
  
      var arr = [];
      var result;

        if ( decodeInput==null || isNaN(decodeInput)|| toDecode==[]) {
            throw TypeError("Ingresa datos correctos!");
        } else{
  
            for( let i=0 ; i<toDecode.length;i++) {
        
                var ascii= toDecode.charCodeAt(i)
                
                if ((ascii>47) && (58>ascii)){
                    var arr8 = (((ascii-48-parseInt(decodeInput))%10)+10)%10+48;
                    var arr9 = String.fromCharCode(arr8);
                    arr.push(arr9);
        
                } else if ((ascii>96) && (123>ascii)){
                    
                    var arr4 = (((ascii-97-parseInt(decodeInput))%26)+26)%26+97;
                    var arr5 = String.fromCharCode(arr4);
                    arr.push(arr5);   
        
                } else if ((ascii>64) && (91>ascii)){
                    var arr2 = (((ascii-65-parseInt(decodeInput))%26)+26)%26+65;
                    var arr3 = String.fromCharCode(arr2);
                    arr.push(arr3);
        
                } else {
                    var arr6 = ascii;
                    var arr7 = String.fromCharCode(arr6);
                    arr.push(arr7);
                }         
            } 

            result= arr.join('');
            return result;
        }
  
  
    },
  
  };
  
  export default cipher;