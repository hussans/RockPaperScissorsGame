const mainMenuScreen = document.getElementById('mainmenu-screen');
const gameModeScreen = document.getElementById('gamemode-screen');
const startGameBtn = document.getElementById('startGameBtn');
const pvpGameBtn = document.getElementById('1v1GameBtn');

const navbarMainMenu = document.getElementById('navbarMainMenu');
const rulesBtn = document.getElementById('rulesBtn');
const rulesBtn2 = document.getElementById('rulesBtn2');
const rulesPopUp = document.getElementById('rulesPopUp');


/* Main Menu / Game Mode Screen Changes */
startGameBtn.addEventListener('click', (e) => {
    mainMenuScreen.style.display = 'none';
    gameModeScreen.style.display = 'block';
});

navbarMainMenu.addEventListener('click', (e) => {
    mainMenuScreen.style.display = 'block';
    gameModeScreen.style.display = 'none';
});

/* Help Popup */
rulesBtn.addEventListener('click', (e) => {
    if(rulesPopUp.style.display === 'none' || rulesPopUp.style.display === '') {
        rulesPopUp.style.display = 'block';
    } else {
        rulesPopUp.style.display = 'none';
    }
});

rulesBtn2.addEventListener('click', (e) => {
    if(rulesPopUp.style.display === 'none' || rulesPopUp.style.display === '') {
        rulesPopUp.style.display = 'block';
    } else {
        rulesPopUp.style.display = 'none';
    }
});