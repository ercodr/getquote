const homePage = document.getElementById('home');
const toggleTheme = document.getElementById('toggleTheme');
const bookmarkPage = document.getElementById('bookmark');


toggleTheme.addEventListener('click', ()=> {
    document.getElementById('appBar').classList.toggle('toggle-app-bar');
    document.getElementById('footer').classList.toggle('toggle-footer');
    document.getElementById('body').classList.toggle('toggle-body');
    document.getElementById('displayCard').classList.toggle('toggle-displayCard');
});

