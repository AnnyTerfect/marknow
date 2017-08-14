var line=document.getElementById("line"),
    text1=document.getElementById("text1"),
    text2=document.getElementById("text2"),
    text3=document.getElementById("text3"),
    logo=document.getElementById("logo"),
    screenc=document.getElementById("screen_cont"),
    frameX=document.getElementById("frame").offsetLeft,
    frameY=document.getElementById("frame").offsetTop,
    p0=document.getElementById("p0"),
    p1=document.getElementById("p1"),
    p2=document.getElementById("p2");
window.onload=function()
{
    line.style.right=0;
    setTimeout(function()
    {
        text1.style.opacity=1;
        text1.style.marginTop=0;
    },800);
    setTimeout(function()
    {
        text2.style.opacity=1;
        text2.style.marginTop=0;
    },1200);
    setTimeout(function()
    {
        text3.style.opacity=1;
        text3.style.marginTop=0;
    },1600);
    setTimeout(function()
    {
        logo.style.opacity=1;
        logo.style.transform="translateY(0)";
    },2000);
    setTimeout(function()
    {
        screenc.style.opacity=1;
        screenc.style.transform="translateY(0)";
    },2400);
};

var i=0;
function left()
{
    var j=(i+1)%3,k=(i+2)%3;
    var e1=document.getElementById("p"+i),
        e2=document.getElementById("p"+j),
        e3=document.getElementById("p"+k);
    e1.style.zIndex="1";
    e2.style.zIndex="5";
    e3.style.zIndex="10";
    e1.style.transform="scale(0.9) translate(145px,-3px)";
    e2.style.transform="scale(0.9) translate(-113px,69px)";
    e3.style.transform="scale(1) translate(0px,0px)";
    i=(i+1)%3;
}
function right()
{
    var j=(i+1)%3,k=(i+2)%3;
    var e1=document.getElementById("p"+i),
        e2=document.getElementById("p"+j),
        e3=document.getElementById("p"+k);
    e3.style.zIndex="1";
    e2.style.zIndex="5";
    e1.style.zIndex="10";
    e2.style.transform="scale(0.9) translate(145px,-3px)";
    e3.style.transform="scale(0.9) translate(-113px,69px)";
    e1.style.transform="scale(1) translate(0px,0px)";
    i=(i+2)%3;
}
/*p0.onclick=function()
{
    if(0==i)left();
    if(2==i)right();
};
p1.addEventListener("click",function()
{
    if(2==i)left();
    if(1==i)right();
});
p2.addEventListener("click",function()
{
    if(0==i)right();
    if(1==i)left();
});*/
screenc.addEventListener("click",function(ev)
{
    var oEvent=ev||event;
    var x=oEvent.clientX-frameX,
        y=oEvent.clientY-frameY;
    if(((-0.222*x+193.666)<y)&&((2.038*x-77.54)>y)&&((2.058*x-326.108)<y)&&((-0.288*x+690.04)>y))
    {
        left();
        clearInterval(timer);
    }
        
    if((-0.238*x+218.906)<y&&((1.78*x-763.86)>y)&&((1.777*x-965.876)<y)&&((-0.263*x+672.152)>y))
    {
        right();
        clearInterval(timer);
    }
    //&&((1.78*x-763.86)>y)&&((1.777*x-762.399)<y)&&((-0.263*x+301.848)>y))
        //left();
        
});

var timer=setInterval(function()
{
    left();
},5000);