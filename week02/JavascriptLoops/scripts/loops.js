/*
  This Script is an example of how we can create and add li tags to an empty ul tag
  which is located in an external HTML file.
*/

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
  // Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element

  //Using .forEach():  
    
    function addFoodsToList(){
        const ulElement = document.getElementById("favorite-foods");
        myInfo.favoriteFoods.forEach(function(food) {
            const li = document.createElement("li")
            li.textContent = food;
            ulElement.appendChild(li);
        });
    }
    addFoodsToList();
  


  //Using .Map()
 /* 
    const ulElement = document.getElementById("favorite-foods");
    myInfo.favoriteFoods.map(myFunction)
    function myFunction(food){
        const li = document.createElement("li")
        li.textContent = food;
        ulElement.appendChild(li);
    }
    addFoodsToList();
*/


  
  
  
