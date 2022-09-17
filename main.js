var canvas = document.getElementById("myCanvas")
var ctx = canvas.getContext("2d")

var event = "empty"

var lastX, lastY, currentX, currentY
var color ="red"



canvas.addEventListener("mousedown", mousedownFn)
function mousedownFn(e) {
    event = "mousedown"
    color= document.getElementById("color").value
    
}


canvas.addEventListener("mouseleave", mouseleaveFn)
function mouseleaveFn(e) {
    event = "mouseleave"
}


canvas.addEventListener("mouseup", mouseupFn)
function mouseupFn(e) {
    event = "mouseup"
}



canvas.addEventListener("mousemove", mousemoveFn)
function mousemoveFn(e) {

    currentX = e.clientX - canvas.offsetLeft;
    currentY = e.clientY - canvas.offsetTop;


    if (event == "mousedown") {

        ctx.beginPath()
        ctx.strokeStyle =color;
        ctx.linewidth = 2;

        ctx.moveTo(lastX, lastY)
        ctx.lineTo(currentX, currentY)
        ctx.stroke()


    }
    lastX = currentX
    lastY = currentY

}


function clearArea(){

    ctx.clearRect(0,0,canvas.width,canvas.height)
}






