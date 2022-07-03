const requestURL = '../chamber/json/directory.json';
// const cards = document.querySelector('.cards');


const spot1 = document.querySelector("#spot1");
const spot2 = document.querySelector("#spot2");
const spot3 = document.querySelector("#spot3");

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        console.log(jsonObject); // temporary checking for valid response and data parsing

        const companies = jsonObject['companies'];
        document.querySelector(".spotlight").innerHTML = '';
        for (let i = 0; i < 3; i++) {
            const company_spotlights = companies[Math.floor(Math.random() * companies.length)];

            let div = document.createElement('div');

            let h2 = document.createElement('h2');
            h2.textContent = company_spotlights.companyname;
            let portrait = document.createElement('img');
            portrait.setAttribute('src', company_spotlights.imageurl);
            portrait.setAttribute('alt', 'Portait of ' + company_spotlights.CEO);
            portrait.setAttribute('loading', 'lazy');

            let phone = document.createElement("p");
            phone.textContent = company_spotlights.phone;

            let hours = document.createElement("p");
            hours.textContent = company_spotlights.hours;

            let email = document.createElement("p");
            email.textContent = company_spotlights.email;

            let membership = document.createElement("p");
            membership.textContent = "Membership: " + company_spotlights.membership;

            if (i === 0) {
                div.id = "spot1";
                portrait.className = "div-img";

                portrait.id = "train";
            } else if (i === 1) {
                div.id = "spot2";
                portrait.className = "div-img";
            } else if (i === 2) {
                div.id = "spot3";
                portrait.className = "div-img";
            }

            div.appendChild(h2);
            div.appendChild(portrait);
            div.appendChild(phone);
            div.appendChild(email);
            div.appendChild(hours);
            div.appendChild(membership);



            document.querySelector(".spotlight").appendChild(div);


        }





        companies.forEach(displayCompanies);


        function displayCompanies(company) {
            // // Create elements to add to the document
            // let card = document.createElement('section');
            // let h2 = document.createElement('h2');
            // let start = document.createElement("p")
            // let phone = document.createElement("p")
            // let hours = document.createElement("p")
            // let membership = document.createElement("p")
            // let portrait = document.createElement('img');

            // // Change the textContent property of the h2 element to contain the prophet's full name
            // h2.textContent = company.companyname;
            // phone.textContent = company.phone;
            // start.textContent = company.startdate;
            // hours.textContent = company.hours;
            // membership.textContent = "Membership: " + company.membership

            // // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
            // portrait.setAttribute('src', company.imageurl);
            // portrait.setAttribute('alt', 'Portait of ' + company.CEO);
            // portrait.setAttribute('loading', 'lazy');

            // // Add/append the section(card) with the h2 elemen.t
            // card.appendChild(h2);
            // card.appendChild(portrait);
            // card.appendChild(start);
            // card.appendChild(phone);
            // card.appendChild(hours);
            // card.appendChild(membership);

            // // Add/append the existing HTML div with the cards class with the section(card)
            // document.querySelector('div.cards').appendChild(card);
            // console.log(company[0]);

            // document.querySelector("div#spot1").append(company[0]);
            // document.querySelector("div#spot2").append(company[1]);
            // document.querySelector("div#spot3").append(company[2]);
        }
    });