/**
 * Created by stefd on 2016-05-11.
 */
window.addEventListener("load", init);

function init() {
    var square = createSquare();


}

function clickHandler(e) {
    console.log("clicked " + e.currentTarget);

    var square = createSquare();
    var square2 = createSquare();

    e.currentTarget.remove();
}

function clickRemover() {
    element = document.getElementsByTagName("square");
    for (index = 0; index < element.length; index++) {
        element[index].parentNode.removeChild(element[index]);
    }
}

function createSquare(){
    var square = document.createElement("square");
    square.style.left = Math.random() * 800 + "px";
    square.style.top = Math.random() * 800 + "px";
    square.style.backgroundColor = "red";
    document.body.appendChild(square);



    setTimeout(function(){
        explodeSquare(square);
    }, Math.random() * 1000 + 2000);

    return square;

}


function explodeSquare(square){
    console.log("booom " + square);
    square.style.backgroundColor = "yellow";
    square.addEventListener("click", function(e){
        clickHandler(e);
    });


setTimeout(function() {
    explodingSquare(square);
    }, Math.random() * 1000 + 2000);


}

function explodingSquare(square) {
    console.log("kaboooomm" + square);
    // square.style.backgroundColor = "black";
    square.remove();
}
