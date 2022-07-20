const requestURL = '../Final_Project/json/activities.json';
const cards = document.querySelector('.cards1');



fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing

        const activities = jsonObject['activities'];

        activities.forEach(displayActivities);

        function displayActivities(activity) {
            // Create elements to add to the document
            let card = document.createElement('section');
            let h3 = document.createElement('h3');
            let description = document.createElement("p");
            let phone = document.createElement("p");
            let hours = document.createElement("p");
            let portrait = document.createElement('img');

            // Change the textContent property of the h2 element to contain the prophet's full name
            h3.textContent = activity.name;
            phone.textContent = "Phone: " + activity.phone;
            description.textContent = activity.description;
            hours.textContent = "Hours: " + activity.hours;

            // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
            portrait.setAttribute('src', activity.imageurl);
            portrait.setAttribute('alt', 'Portait of ' + activity.name);
            portrait.setAttribute('loading', 'lazy');

            // Add/append the section(card) with the h2 elemen.t
            card.appendChild(h3);
            card.appendChild(portrait);
            card.appendChild(description);
            card.appendChild(phone);
            card.appendChild(hours);

            // Add/append the existing HTML div with the cards class with the section(card)
            document.querySelector('div.cards1').appendChild(card);
        }
    });
A