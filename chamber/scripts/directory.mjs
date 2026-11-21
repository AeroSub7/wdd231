// const companiesurl = 'https://aerosub7.github.io/wdd231/chamber/data/members.json';
import { getCompanyData, displayCompanies } from "./companydata.mjs";

const url = './data/members.json';
const cards = document.querySelector('#show-area');

const data = await getCompanyData(url);
displayCompanies(data.companies, cards);

// Change to List
const gridButton = document.querySelector('#grid-button');
const listButton = document.querySelector('#list-button');

gridButton.addEventListener("click", () => {
    cards.classList.remove("list");
});

listButton.addEventListener("click", () => {
    cards.classList.add("list");
});