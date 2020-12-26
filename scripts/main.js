// var myHeading = document.querySelector('h1');
// myHeading.textContent = 'Gura';

// document.querySelector('img').onclick = function() {
//   alert('A');
// }


var myImage = document.querySelector('img');
myImage.onclick = function () {
  let mySrc = myImage.getAttribute('src');
  if (mySrc === 'https://upload.wikimedia.org/wikipedia/zh/thumb/e/e5/Gawr_Gura.png/300px-Gawr_Gura.png') {
    myImage.setAttribute('src', 'https://pbs.twimg.com/profile_images/1309957523089354760/uRrxAmOB_400x400.jpg');
  } else {
    myImage.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/zh/thumb/e/e5/Gawr_Gura.png/300px-Gawr_Gura.png');
  }
}


var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');


function setUserName() {
  let myName = prompt('Please enter your name.');
  if (!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);   //key,value
    myHeading.innerHTML = 'A  , ' + myName;
  }
}

if (!localStorage.getItem('name')) {
  setUserName();
} else {            //重整過的
  let Name = localStorage.getItem('name');
  myHeading.innerHTML = 'A  , ' + Name;
}

myButton.onclick = function () {
  setUserName();
}



// function multiply(num1,num2) {
//     let result = num1 * num2;
//     return result;
//   }


