const $year = document.querySelector("#currentyear");

const $lastModified = document.querySelector("#lastModified");

const today = new Date();

$year.innerHTML = today.getFullYear();
$lastModified.innerHTML = `Last Modification: ${document.lastModified}`;

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