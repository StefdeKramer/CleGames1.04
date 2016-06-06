window.addEventListener('load', init);

function init() {
    setInterval(createElements, 1000);
}

function createElements() {
    var square = document.createElement("square");
    square.style.left = Math.random() * 800 + "px";
    square.style.top = Math.random() * 800 + "px";


    // optie 1 via css kleur veranderen
    // square.classList.add("redsquare");


    // optie 2 via js
    square.style.backgroundColor = "red";


    square.addEventListener('click', deling);
    document.body.appendChild(square);


}


function deling() {

    console.log("hello")
}

