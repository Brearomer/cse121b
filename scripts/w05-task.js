/* W05: Programming Tasks */

/* Declare and initialize global variables */
 const templesElement = document.querySelector('#temples');
 let templeList =[]; 

/* async displayTemples Function */
const displayTemples =(temples) =>{
  temples.forEach(temple =>{
  let article = document.createElement('article');
  let nameh3 = document.createElement('h3');
  nameh3.innerHTML = temple.templeName;
  let img = document.createElement('img');
  img.setAttribute('src', temple.imageUrl);
  img.setAttribute('alt',temple.location); 

  article.appendChild(nameh3);
  article.appendChild(img); 

  templesElement.appendChild(article);
});
}

/* async getTemples Function using fetch()*/
  const getTemples = async() =>{
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json") 
   templeList = await response.json();
   displayTemples(templeList);
};

/* reset Function */
  const reset = () =>{
    templesElement.innerHTML='';
}

/* sortBy Function */
 const sortBy =(temples) =>{
   reset();
   switch(document.querySelector('#sortBy').value){
    case "utah":
      displayTemples(temples.filter(temple => temple.location.includes("Utah")));
      break;
    case "nonutah":
      displayTemples(temples.filter(temple => !temple.location.includes("Utah")));
      break; 
    case "older":
      displayTemples(temples.filter(temple => !temple.dedicate > new Date (1950,0,1 ) ));
      break;
    case "all":
      displayTemples(temples);
      break; 
   }
};


getTemples(); 

/* Event Listener */
document.querySelector("#sortBy").addEventListener("change",() =>{sortBy(templeList)});