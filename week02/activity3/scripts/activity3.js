myInfo = {
    name: "Brother T",
    photo: "images/photo.jpg",
    favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
    hobbies: ["Reading", "Fishing", "Camping"],
    placesLived: [
      {
        place: "Rexburg, ID",
        length: "5 years",
      },
      {
        place: "Ammon, ID",
        length: "3 years",
      },
      {
        place: "Sandy, UT",
        length: "1 year",
      },
    ],
  };

 //DOM Element Selection:
const foodsElement = document.querySelector("#favorite-foods");// ul
const placesElement = document.querySelector("#places-lived");//dl

  /*
  1) Create a function that will take a list, and a callback function 
     to produce an HTML template.The function should transform our list by
     looping over it calling the template function once for each item in the list.
     The function should return all of the HTML strings flattened into one long string.
  */

  // This Function takes a list as a parameter, iterates over each 
  // element of this list applying the templateCallback function received as a parameter
  // from a caller function. Then it returns a whole string.
  
function generateListMarkup(list,templateCallback){
    const htmlList = list.map(templateCallback);
    return htmlList.join("");
}

  /*
    2) Create a function that will take a food string and return that string 
    embedded in some html. (<li>food</li>):
  */

  // This Function requires a food string as a parameter and returns that string 
  // embedded in HTML markup as li tag.
function foodsTemplate(food) {
    return `<li>${food}</li>`;
}

  /*
    3) Create a function that will take a place string and return that string 
       embedded in some html.
       The place is a bit more complex. We have the location and the length.
       You can use the following for the template:
       <dt>${place.place}</dt><dd>${place.length}</dd>).
  */

  // This Function requires a place string and returns that string embedded 
  // in HTML markup as a dt and dd tag.

   
function placesTemplate(place){
    return `<dt>${place.place}</dt><dd>${place.length}</dd>`;
}

  

  /*
  4) Call the function generateListMarkup() once for the placesLived list
     and again for the favoriteFoods list. 
     Set the innerHTML of the appropriate HTML element to the results of 
     the function call.
  */
  
     foodsElement.innerHTML = generateListMarkup(myInfo.favoriteFoods,foodsTemplate);
     placesElement.innerHTML = generateListMarkup(myInfo.placesLived,placesTemplate);