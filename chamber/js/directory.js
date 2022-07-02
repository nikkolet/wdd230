const requestURL = '../chamber/json/directory.json';
const cards = document.querySelector('.cards');


const spot1 = document.querySelector("#spot1").append(company[0]);
const spot2 = document.querySelector("#spot2").append(company[1]);
const spot3 = document.querySelector("#spot3").append(company[2]);

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing

        const companies = jsonObject['companies'];

        companies.forEach(displayCompanies);


        function displayCompanies(company) {
            // Create elements to add to the document
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let start = document.createElement("p")
            let phone = document.createElement("p")
            let hours = document.createElement("p")
            let membership = document.createElement("p")
            let portrait = document.createElement('img');

            // Change the textContent property of the h2 element to contain the prophet's full name
            h2.textContent = company.companyname;
            phone.textContent = company.phone;
            start.textContent = company.startdate;
            hours.textContent = company.hours;
            membership.textContent = "Membership: " + company.membership

            // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
            portrait.setAttribute('src', company.imageurl);
            portrait.setAttribute('alt', 'Portait of ' + company.CEO);
            portrait.setAttribute('loading', 'lazy');

            // Add/append the section(card) with the h2 elemen.t
            card.appendChild(h2);
            card.appendChild(portrait);
            card.appendChild(start);
            card.appendChild(phone);
            card.appendChild(hours);
            card.appendChild(membership);

            // Add/append the existing HTML div with the cards class with the section(card)
            document.querySelector('div.cards').appendChild(card);


            document.querySelector("div#spot1").append(company[0]);
            document.querySelector("div#spot2").append(company[1]);
            document.querySelector("div#spot3").append(company[2]);
        }
    });