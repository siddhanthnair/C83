Canvas =document.getElementById("myCanvas");
ctx=Canvas.getContext("2d");
var width=screen.width;
new_width=screen.width-70;
new_height=screen.height-300;
if(width<922){
document.getElementById("myCanvas").width=new_width;
document.getElementById("myCanvas").height=new_height;
document.body.style.overflow="hidden";
}
Canvas.addEventListener("touchstart",mytouchstart);
function mytouchstart(e)
{
x=e.touches[0].clientX-Canvas.offsetLeft;
y=e.touches[0].clientY-Canvas.offsetTop;
}
Canvas.addEventListener("touchmove",mytouchmove);
function mytouchmove(e)
{
currentX=e.touches[0].clientX-Canvas.offsetLeft;
currentY=e.touches[0].clientY-Canvas.offsetTop;
ctx.beginPath();
ctx.strokeStyle=document.getElementById("color").value;
ctx.lineWidth="2";
ctx.moveTo(x,y);
ctx.lineTo(currentX,currentY);
ctx.stroke();
x=currentX;
y=currentY;

}
