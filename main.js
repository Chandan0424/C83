mouseevent="";
lastpoSX=0;
lastpoSY=0;
Touchevent="";

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
widthOfLine=1;
radius=5;

width=screen.width;
newcanvaswidth=screen.width-70;
newcanvasheight=screen.height-100;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
widthOfLine=1;

if(width<992){
    document.getElementById("myCanvas").width=newcanvaswidth;
    document.getElementById("myCanvas").height=newcanvasheight;
    document.body.style.overflow="hidden";
}

canvas.addEventListener("touchstart",myTouchStart);

function myTouchStart(e){
    color=document.getElementById("Color").value;
    widthOfLine=document.getElementById("Width").value;
    Touchevent="TouchStart";
    console.log(Touchevent);
    lastpoSX=e.touches[0].clientX-canvas.offsetLeft;
    lastpoSY=e.touches[0].clientY-canvas.offsetTop;
}

canvas.addEventListener("touchmove",myTouchMove);

function myTouchMove(e){
    currentposX=e.touches[0].clientX-canvas.offsetLeft;
    currentposY=e.touches[0].clientY-canvas.offsetTop;

    if(Touchevent=="TouchStart"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=widthOfLine;

        
        ctx.arc(currentposX,currentposY,radius,0,2*Math.PI);
        ctx.stroke();
    }
    lastpoSX=currentposX;
    lastpoSY=currentposY;
}



canvas.addEventListener("mousedown",myMouseDown);

function myMouseDown(e){
    color=document.getElementById("Color").value;
    widthOfLine=document.getElementById("Width").value;
    radius=document.getElementById("radius").value;
    mouseevent="MouseDown";
    console.log(mouseevent);
}

canvas.addEventListener("mousemove",myMouseMove);

function myMouseMove(e){
    currentposX=e.clientX-canvas.offsetLeft;
    currentposY=e.clientY-canvas.offsetTop;

    if(mouseevent=="MouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=widthOfLine;
        
        ctx.arc(currentposX,currentposY,radius,0,2*Math.PI);
        ctx.stroke();
    }
    lastpoSX=currentposX;
    lastpoSY=currentposY;
}

canvas.addEventListener("mouseleave",myMouseLeave);

function myMouseLeave(e){
    mouseevent="MouseLeave";
    console.log(mouseevent);
}

canvas.addEventListener("mouseup",myMouseUp);

function myMouseUp(e){
    mouseevent="MouseUp";
    console.log(mouseevent);
}

function ClearArea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}