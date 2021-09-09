const homePage = document.getElementById('home');
const toggleTheme = document.getElementById('toggleTheme');
const bookmarkPage = document.getElementById('bookmark');


toggleTheme.addEventListener('click', ()=> {
    document.getElementById('appBar').classList.toggle('toggle-app-bar');
    document.getElementById('footer').classList.toggle('toggle-footer');
    document.getElementById('content').classList.toggle('toggle-content');
    document.getElementById('displayCard').classList.toggle('toggle-displayCard');
});

