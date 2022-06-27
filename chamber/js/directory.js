const requestURL = 'https://github.com/nikkolet/wdd230/blob/main/chamber/json/directory.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing

        const prophets = jsonObject['prophets'];

        prophets.forEach(displayProphets);

        function displayProphets(prophet) {
            // Create elements to add to the document
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let birthdate = document.createElement("p")
            let birthplace = document.createElement("p")

            let portrait = document.createElement('img');

            // Change the textContent property of the h2 element to contain the prophet's full name
            h2.textContent = prophet.name + ' ' + prophet.lastname;
            birthdate.textContent = prophet.birthdate;
            birthplace.textContent = prophet.birthplace;

            // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
            portrait.setAttribute('src', prophet.imageurl);
            portrait.setAttribute('alt', 'Portait of ' + prophet.name + ' ' + prophet.lastname);
            portrait.setAttribute('loading', 'lazy');

            // Add/append the section(card) with the h2 element
            card.appendChild(h2);
            card.appendChild(portrait);
            card.appendChild(birthdate);
            card.appendChild(birthplace);

            // Add/append the existing HTML div with the cards class with the section(card)
            document.querySelector('div.cards').appendChild(card);
        }
    });