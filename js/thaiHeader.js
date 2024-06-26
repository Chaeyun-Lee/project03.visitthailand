window.addEventListener("scroll",function(){
    const header = document.querySelector("header");
    const topBtn =document.querySelector(".topBtn");
    console.log(scrollY);
    if(this.window.scrollY > 0) {
        header.style.position = "fixed";
        header.style.top = "0";
        header.style.left = "50%";
        header.style.zIndex = "10";
        header.style.transform = "translateX(-50%)";
        header.style.border = "1px solid #eee";
        header.style.backgroundColor = "#ffffff";
        if(this.window.scrollY > 400){
            topBtn.style.visibility = "visible";
        } else if (this.window.scrollY < 400){
            topBtn.style.visibility = "hidden";
        }
    } else if (this.window.scrollY == 0){
        header.style.border = "none";
        header.style.position ="absolute";
        header.style.left = "50%";
        header.style.transform = 'translateX(-50%)';
    }
});

//드롭다운 메뉴
$(function (){
    $("#mainMenu>li").mouseover(function () {
        $(".secondMenu").stop().slideDown(300);
        console.log('over!');
      });
      $("#mainMenu>li").mouseleave(function () {
        $(".secondMenu").stop().slideUp(100);
      });
});
