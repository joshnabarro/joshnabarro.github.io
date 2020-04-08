let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/nabs-logo.png') {
        myImage.setAttribute ('src','images/yin-yang.png');
    } else {
        myImage.setAttribute ('src','images/nabs-logo.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
        setUserName();
    } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Welcome to Nabs Graphics, ' + myName;
    }
}
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome to Nabs Graphics, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}