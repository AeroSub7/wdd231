// const companiesurl = 'https://aerosub7.github.io/wdd231/chamber/data/members.json';
const companiesurl = './data/members.json'
const cards = document.querySelector('#show-area');

async function getCompanyData() {
    try {
        const response = await fetch(companiesurl);
        if (!response.ok) {
            throw new Error(`request failed with status ${response.status}`);
        }
        const data = await response.json();
        displayCompanies(data.companies);
    } catch (error) {
        console.error(error);
    }
}

const displayCompanies = (companies) => {
    companies.forEach((company) => {
        let card = document.createElement("section");
        let name = document.createElement("h2");
        let address = document.createElement("p");
        let phoneNumber = document.createElement("p");
        let logo = document.createElement("img");
        let level = company.level;
        let type = company.type;
        name.innerHTML = company.name;
        address.innerHTML = company.address;
        phoneNumber.innerHTML = `Phone Number: ${company.phoneNumber}`;
        logo.setAttribute("src", `${company.image}`);
        logo.setAttribute("alt", `logo of ${company.name}`);
        logo.setAttribute("loading", "lazy");
        logo.setAttribute("width", "100");
        logo.setAttribute("height", "100");

        card.appendChild(name);
        card.appendChild(logo);
        card.appendChild(address);
        card.appendChild(phoneNumber);
        if (level == 1) {

        }


        cards.appendChild(card);
    });
}
getCompanyData();