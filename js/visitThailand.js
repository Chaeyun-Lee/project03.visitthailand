window.onload = function () {
    //페이지 로드 시 잠깐 보이는 트랜지션 없애는 용도
    document.querySelector("body").classList.remove("preload");
  
//스크롤 시 헤더 fixed, topBtn 생성, mainPage 풀페이지 바뀌기
window.addEventListener("scroll",function(){
    const header = document.querySelector("header");
    const mainBox = document.querySelector("#mainBox");
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
            mainBox.style.width = '100%';
            mainBox.style.borderRadius = "0";
            topBtn.style.visibility = "visible";
        } else if (this.window.scrollY < 400){
            topBtn.style.visibility = "hidden";
            mainBox.style.width = '80vw';
            mainBox.style.borderRadius = "100px";
        }
    } else if (this.window.scrollY == 0){
        header.style.border = "none";
        header.style.position ="absolute";
        header.style.left = "50%";
        header.style.transform = 'translateX(-50%)';
    }
})
};

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

//mainpage 페이드 인아웃 슬라이드
$(function () {
    let num = 1;
    function slideCover() {
      if(num < 2){
        num++
      } else {
        num = 0
      }
      $(".mainPage").eq(num).siblings().fadeOut(1000);
      $(".mainPage").eq(num).fadeIn(1000)
    }
    setInterval(slideCover, 4000);
  });