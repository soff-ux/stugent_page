const button = document.getElementById('color-button');
const page = document.getElementById('page');

button.addEventListener('click', (event) => {
    console.log("user clicked the button")
    console.log(event)
    page.style.backgroundColor = 'red';
});
