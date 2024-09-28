// Store the selected elements that we are going to use. 
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

document.addEventListener('DOMContentLoaded', () => {
    const navOptions = document.querySelectorAll('.nav-option');
    const activeOption = document.getElementById('active-nav-option');

    navOptions.forEach(option => {
        option.addEventListener('click', () => {
            navOptions.forEach(option => option.classList.remove('active'));
            option.classList.add('active');
            activeOption.textContent = option.textContent;
        });
    });
});

const $year = document.querySelector("#currentyear");

const $lastModified = document.querySelector("#lastModified");

const today = new Date();

$year.innerHTML = today.getFullYear();
$lastModified.innerHTML = `Last Modification: ${document.lastModified}`;

