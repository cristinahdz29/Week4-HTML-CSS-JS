//building website dynamically
//get buttons
let allDishesButton = document.getElementById("allDishes");
let startersButton = document.getElementById("starterDishes");
let entreesButton = document.getElementById("entreeDishes");
let dessertButton = document.getElementById("dessertDishes");

let dishList = document.getElementById("dishList");

let dishItems = dishes.map(function (dish) {
  return `
        <div class ="dishDiv">
          <div class ="imageDiv">
            <img class="dishImage" src=${dish.imageURL}
        /> </div>
          <div class="descriptionDiv">
            <label class="dishTitle"><b>${dish.title}</b></label>
            <label class="dishDescription">${dish.description}</label>
          </div>
          <div class="priceDiv">
            <label class="dishPrice">${dish.price}</label>

          </div>

        </div>
    `;
});

dishList.insertAdjacentHTML("beforeend", dishItems.join(""));

console.log(dishList.children);

function deleteDishItems() {
  const divDishItems = dishList.children;
  const divDishItemsLength = divDishItems.length;

  for (let i = 0; i < divDishItemsLength; i++) {
    divDishItems[0].parentNode.removeChild(divDishItems[0]);
  }
}

function divCreator(array) {
  console.log(array);
  let courseItems = array.map(function (dish) {
    return `
        <div class ="dishDiv">
          <div class ="imageDiv">
            <img class="dishImage" src=${dish.imageURL}
        /> </div>
          <div class="descriptionDiv">
            <label class="dishTitle"><b>${dish.title}</b></label>
            <label class="dishDescription">${dish.description}</label>
          </div>
          <div class="priceDiv">
            <label class="dishPrice">${dish.price}</label>
          </div>
        </div>
    `;
  });

  dishList.insertAdjacentHTML("beforeend", courseItems.join(""));
}

//Adding event Listeners to buttons
//All DISHES BUTTON
allDishesButton.addEventListener("click", function () {
  deleteDishItems();

  divCreator(dishes);
});
//STARTERS BUTTON
startersButton.addEventListener("click", function () {
  deleteDishItems();

  let starters = dishes.filter(function (dish) {
    return dish.course == "Starters";
  });

  divCreator(starters);
});

//ENTREES BUTTON
entreesButton.addEventListener("click", function () {
  deleteDishItems();

  let entrees = dishes.filter(function (dish) {
    return dish.course == "Entrees";
  });

  divCreator(entrees);
});

//Dessert Button
dessertButton.addEventListener("click", function () {
  deleteDishItems();
  let dessert = dishes.filter(function (dish) {
    return dish.course == "Desserts";
  });

  divCreator(dessert);
});
