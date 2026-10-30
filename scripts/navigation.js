// Footer
const currentyear = document.querySelector("#currentyear");
const year = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = `Last Modification: ${document.lastModified}`;
currentyear.innerHTML = `${year}`;


// Store the selected elements that we are goin to use.
const navButton = document.querySelector('#ham-btn');
const navBar = document.querySelector('#nav-bar');

// Toggle the show class off and on.
navButton.addEventListener('click', () => {
    const isOpen = navButton.classList.toggle('show');
    navButton.setAttribute('aria-expanded', isOpen);
    navBar.classList.toggle('show')
})


// Toggle