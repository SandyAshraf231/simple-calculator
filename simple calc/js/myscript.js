

//  let x =parseInt(document.getElementById("num1").value);
//  let y = parseInt( document.getElementById("num2").value);
 let btn   = document.getElementById('btn');
//  let oper   = document.getElementById('op').value;
//   let result = document.getElementById('resulte');
// let x  = 9;
// let y = 9;



 function calc()
 {    
    let x =parseInt(document.getElementById("num1").value);
    let y = parseInt( document.getElementById("num2").value);
    let oper   = document.getElementById('op').value;
    let result = document.getElementById('resulte');


    switch(oper){
   
        case  '+': 
    //  alert(x + y)
    result.value =+(x + y)
        break;

        case  '-':  
      //  alert(x - y)
        // document.write( x - y)
        result.value =+(x - y)


        break;
         
        case  '*':  
      // alert(x * y)
      result.value =+(x * y)


        break;

        case  '/':  
        // alert(x / y)
        result.value =+(x / y)

        // document.write( x / y)

        break;
       default:  
      // alert(x % y)
      result.value =+(x % y)

    

        break;
           


    }



 }

 
btn.addEventListener('click',calc);




