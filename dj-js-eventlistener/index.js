var mySquare = document.getElementById ("mySquare")
mySquare.addEventListener("dblclick", dblClick)
mySquare.addEventListener("mouseover", mouseOver)

function mouseOver (e) {
    mySquare.style.backgroundColor = "blue";
    console.log (e)
}

function mouseOut () {
    document.getElementById("mySquare").style.backgroundColor = "white";
}

function dblClick () {
    document.getElementById("mySquare").style.backgroundColor = "green";
}

function mouseDown () {
    document.getElementById("mySquare").style.backgroundColor = "red";  
}

function mouseUp () {
    document.getElementById("mySquare").style.backgroundColor = "yellow";
}


function onWheel () {
     document.getElementById("mySquare").style.backgroundColor = "orange";
}

document.addEventListener("wheel", onWheel)

function keys (e) {
    var key = e.key
    var color = {
        b: "blue",
        r: "red",
        o: "orange"
    }
    document.getElementById("mySquare").style.backgroundColor = color [key]
    console.log (e)
}

document.addEventListener("keypress", keys)

