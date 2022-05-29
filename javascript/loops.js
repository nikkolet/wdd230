// loops.js
myInfo = {
    name: "Brother T",
    photo: "images/photo.jpg",
    favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
    hobbies: ["Reading", "Fishing", "Camping"],
    placesLived: [{
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
// document.querySelector('#favorite-foods').innerHTML = myInfo.favoriteFoods.map((food) => `<li>${food}</li>`)
//     .join("");

// document.querySelector('#places-lived').innerHTML = myInfo.placesLived.map((placesLived) =>
//         `<dt>${place.place}</dt><dd>${place.length}</dd>`)
//     .join("");

const foodsElement = document.querySelector('#favorite-foods');
const placesElement = document.querySelector('#places-lived');

function generateListMarkUp(list, templateCallback) {
    const htmlList = list.map(templateCallback);
    return htmlList.join("");
}

function foodsTemplate(food) {
    return `<li>${food}</li>`;
}

function placesTemplate(place) {
    return `<dt>${place.place}</dt><dd>${place.length}</dd>`
}

foodsElement.innerHTML = generateListMarkUp(myInfo.favoriteFoods, foodsTemplate);
placesElement.innerHTML = generateListMarkUp(myInfo.placesLived, placesTemplate);