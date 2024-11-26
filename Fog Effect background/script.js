let text=document.getElementById("text");
window.addEventListener('scroll',function(){
    let value=this.window.scrollY;
    text.style.fontSize=value*1+"px";
});