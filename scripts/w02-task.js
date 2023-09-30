/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */


/* Step 2 - Variables */
let fullName = 'Brea Romer';
let currentYear = '2023';
let profilePicture = 'w02-task/images/profilepicture.jpg';


/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */
const link = document.getElementById('fullName');
nameElement.innerHTML =`<strong>${fullName}</strong>`;
yearElement.textContent= currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt',fullName);


/* Step 5 - Array */
let favoritefood =['pizza','crackconch','conchsalad','icecream','cake','crabandrice','hotwings','popcorn','candy','wingsandfries','strawberry','blueberry','chocolate'];
foodElement.textContent=favoritefood
favoritefood.push('sweet and sour chicken');
foodElement.innerHTML += `<br>${favoritefood}`;
favoritefood.shift();
foodElement.innerHTML += `<br>${favoritefood}`;
favoritefood.pop()
foodElement.innerHTML +=`<br>${favoritefood}`;
