import { getCompanyData, displayCompanies } from "./companydata.mjs";

const url = './data/members.json';
const cards = document.querySelector('#spotlights');

const data = await getCompanyData(url);
const goldSilverMembers = data.companies.filter(company => (company.level == 3 || company.level == 2));

const randomNumber = Math.floor(Math.random() * (goldSilverMembers.length - 2));

let spotlightCompanies = [];
spotlightCompanies.push(goldSilverMembers[randomNumber]);
spotlightCompanies.push(goldSilverMembers[randomNumber + 1]);
spotlightCompanies.push(goldSilverMembers[randomNumber + 2]);
displayCompanies(spotlightCompanies, cards);