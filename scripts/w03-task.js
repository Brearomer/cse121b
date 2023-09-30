/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
  function add (number1, number2) {
// function body
    return number1 + number2;
}
  let addNumber1 = Number(document.querySelector('#add1').value);
  let addNumber2 = Number(document.querySelector('#add2').value);

  function addNumbers (){
   // function body
   const addNumber1 =  Number(document.querySelector('#add1'));
   const addNumber2 =  Number(document.querySelector('#add2'));

}
   document.querySelector('#sum').value = add(addNumber1 ,addNumber2 );
   document.querySelector('#addNumbers').addEventListener('click',subtractNumbers);


/* Function Expression - Subtract Numbers */
 function subtract (subtract1 ,subtract2) {
  // function body
   return subtract1 - subtract2;
}
  let subtractNumber1 = Number(document.querySelector('#subtract1').value);
  let subtractNumber2 = Number(document.querySelector('#subtract2').value);

   function subtractNumbers (){
   // function body
    const subtractNumber1 =  Number(document.querySelector('#subtract2'));
    const subtractNumber2 =  Number(document.querySelector('#subtract1'));
    
}
  document.querySelector('#difference').value = subtract(subtractNumber1 ,subtractNumber2 );
  document.querySelector('#subtractNumbers').addEventListener('click',subtractNumbers);


    
/* Arrow Function - Multiply Numbers */
  function Multiply (factor1, factor2) {
   // function body
    return factor1 * factor2;
}
  let factor1 = Number(document.querySelector('#factor1').value);
  let factor2 = Number(document.querySelector('#factor2').value);
   function multiplyNumbers (){
   // function body
    const nameNumber1 =  Number(document.querySelector('#factor2'));
    const nameNumber2 =  Number(document.querySelector('#factor1'));
    
}
  document.querySelector('#product').value = Multiply(factor1 , factor2);
  document.querySelector('#multiplyNumbers').addEventListener('click',multiplyNumbers);


/* Open Function Use - Divide Numbers */
 
function divide (divisor,quotient ) {
   // function body
    return divisor / quotient ;
}
  let quotient = Number(document.querySelector('#dividend').divisor);
   function divideNumbers (){
    
  let divisor = Number(document.querySelector('#divisor').value);
  let quotient = Number(document.querySelector('#quotient').value);


   // function body
    const nameNumber1 =  Number(document.querySelector('#divisor'));
    const nameNumber2 =  Number(document.querySelector('#quotient'));
    
}
  document.querySelector('#quotient').value = divide(quotient, divisor);
  document.querySelector('#divideNumbers').addEventListener('click',divideNumbers);

    

/* Decision Structure */
 let today = new Date();
 let currentYear ="";
 currentYear = today.getFullYear();
 document.getElementById('year').textContent = currentYear;


/* ARRAY METHODS - Functional Programming */
 let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
/* Output Source Array */
 document.querySelector('#array').innerHTML =
/* Output Odds Only Array */
document.querySelector('#odds').innerHTML = numbersArray.filter(number => number % 2 === 1);
/* Output Evens Only Array */
  document.querySelector('#evens').innerHTML = numbersArray.filter(number => number % 2 === 0);
/* Output Sum of Org. Array */
 numbersArray.reduce((sum, number) => sum + number)
/* Output Multiplied by 2 Array */
 numbersArray.map(number => number * 2)
/* Output Sum of Multiplied by 2 Array */
 let numbers_Array = numbersArray.map((numbers_Array) =>numbers_Array);
 numbersArray.reduce((total, numbersArray) => total +sumOfMultiplied , 2)/ numbers_Array; 
 