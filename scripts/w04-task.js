/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile ={
   name:"Brea Romer",
   photo:"images/profilepicture.jpg",
   favoriteFoods:["crab and rice","conch salad","icecream"],
   hobbies:["sleep","watch movies and Tv shows","reading"],
   placesLived:[]
    
}


/* Populate Profile Object with placesLive objects */
let placesLive ={};
myProfile.placesLived.push(
  {
   place:'New Providence, The Bahamas',
    length: 'My Whole Life'
  } 
);



/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').setAttribute('src',myProfile.photo);
document.querySelector('#name').setAttribute('alt',myProfile.photo);


/* Favorite Foods List*/

myProfile.favoriteFoods.forEach(food => {
  let li = document.createElement('li');
  li.textContent = food;
  document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */ 
 myProfile.hobbies.forEach(hobbies => {
   let li = document.createElement('li');
   li.textContent = hobbies;
   document.querySelector('#hobbies').appendChild(li);
});



/* Places Lived DataList */
  myProfile.placesLived.forEach(places =>{
   let li = document.createElement('dt');
   li.textContent = places.place;
  document.querySelector('#places-lived').appendChild(li);
});

 myProfile.placesLived.forEach(place2 =>{
   let li = document.createElement('dd');
   li.textContent = place2.length;
   document.querySelector('#places-lived').appendChild(li);

});





  
