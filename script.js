let aqua_button = document.getElementById('aqua');
let teal_button = document.getElementById('teal');
let pink_button = document.getElementById('pink');
let purple_button = document.getElementById('purple');
let colorless_button = document.getElementById('colorless');
let display = document.getElementById('color-display');
let hide = document.getElementById('blank');

function onClick_aqua() {
    display.style['background-color'] = 'aqua'
    display.innerHTML = 'aqua'
}
aqua_button.addEventListener('click', onClick_aqua)

function onClick_teal() {
    display.style['background-color'] = 'teal'
    display.innerHTML = 'teal'
}
teal_button.addEventListener('click', onClick_teal)

function onClick_pink() {
    display.style['background-color'] = 'pink'
    display.innerHTML = 'pink'
}
pink_button.addEventListener('click', onClick_pink)

function onClick_purple() {
    display.style['background-color'] = 'purple'
    display.innerHTML = 'purple'
}
purple_button.addEventListener('click', onClick_purple)

function onClick_colorless() {
    display.style['background-color'] = 'white'
    display.innerHTML = 'colorless'
}
colorless_button.addEventListener('click', onClick_colorless)

//EXTRA CREDIT I

function onClick_hide() {
    if (hide.innerHTML == 'hide') {
        display.style['border'] = 'none'
        display.style['background-color'] = 'white'
        display.innerHTML = ''
        hide.innerHTML = 'show'
    }
    else if (hide.innerHTML == 'show') {
        display.style['border'] = '3px solid black'
        hide.innerHTML = 'hide'
    }
}
hide.addEventListener('click', onClick_hide)