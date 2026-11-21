export async function getCompanyData(companiesurl) {
    try {
        const response = await fetch(companiesurl);
        if (!response.ok) {
            throw new Error(`request failed with status ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};

export function displayCompanies(companies, cards) {
    companies.forEach((company) => {
        let card = document.createElement("section");
        let name = document.createElement("h2");
        let address = document.createElement("p");
        let phoneNumber = document.createElement("p");
        let logo = document.createElement("img");
        let website = document.createElement("a");
        let level = company.level;
        let type = company.type;
        name.innerHTML = company.name;
        address.innerHTML = company.address;
        phoneNumber.innerHTML = `Phone Number: ${company.phoneNumber}`;
        website.innerHTML = company.url;
        website.setAttribute("href", company.url);
        logo.setAttribute("src", `${company.image}`);
        logo.setAttribute("alt", `logo of ${company.name}`);
        logo.setAttribute("loading", "lazy");
        logo.setAttribute("width", "100");
        logo.setAttribute("height", "100");

        card.appendChild(name);
        card.appendChild(logo);
        card.appendChild(address);
        card.appendChild(phoneNumber);
        card.appendChild(website);

        card.setAttribute("class", "card");
        if (level == 3) {
            card.classList.add("gold");
        }
        else if (level == 2) {
            card.classList.add("silver");
        }
        else if (level == 1) {
            card.classList.add("non-profit");
        }

        cards.appendChild(card);
    });
};