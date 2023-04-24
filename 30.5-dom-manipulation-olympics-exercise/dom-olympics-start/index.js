//qualifier
const h1 = document.createElement("h1");
h1.textContent = "JavaScript made this!!";
document.getElementById("header").appendChild(h1);
h1.className = "header";

const subTitle = document.createElement("h4");
subTitle.innerHTML = '<span class = "name"> Risa </span>  wrote the JavaScript'
document.getElementById("header").appendChild(subTitle);
subTitle.className = "h4";

//bronzeThere's some sub par conversation going on in this messaging app. You have two tasks to help give it either a clean slate, or a positive start.
// - Write some custom JavaScript to automatically change the words of the conversation to something fun and good.
// - Write some JavaScript that will wait until the user clicks the "clear" button, and then clears out all conversation.

const messages = document.getElementsByClassName("message");

messages [0].textContent = "You're great!";
messages [1].textContent = "Thanks!";
messages [2].textContent = "You're Welcome";
messages [3].textContent = "You're Great!";

function myReset () {
    messages [0].textContent = " ";
    messages [1].textContent = " ";
    messages [2].textContent = " ";
    messages [3].textContent = " ";
}













