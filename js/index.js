$(function () {

  var menuBtn = $('.menu-btn');//메뉴 버튼
  var menu_Li = $('.menu-list').find('a')//메뉴 글씨
  var on_off = true;
  menuBtn.on('click',menuBtnEffect);

  function menuBtnEffect(e) {
      e.preventDefault();
      
      //메뉴 열리는 효과 함수--------------------------------------------------------------
      if (on_off) { 
          
          $('.menu-wrap').css({'top':0}); //menu_wrap 위치 내림
          $('.menu-trigger, .menu-bg').addClass('active'); //메뉴 버튼 & 배경 생성
          menu_Li.stop().delay(200).animate({'opacity':1},250,"easeOutCubic"); //메뉴 글씨 opacity: 1
          on_off=false;//변수를 false로 초기화
          
          //열린 상태에서 메뉴 a클릭했을 때-------------------------------------------------
          $('.menu-list ul li a').click(function(){
              $('.menu-trigger, .menu-bg').removeClass('active');// 메뉴 버튼 & 배경 제거
              menu_Li.stop().animate({'opacity':0},250,"easeOutCubic",function(){ //메뉴 글씨 opacity: 0
                  
                  setTimeout(function(){//0.5초 있다가 menu_wrap 위치 초기화
                      $('.menu-wrap').css({'top':"-110%"});
                  },500);
                  
                  on_off=true;//변수를 true로 초기화
              });
          });
          
          
      //메뉴 닫히는 효과 함수--------------------------------------------------------------
      }else{
          //제거 과정 (메뉴 배경, 버튼, 글씨 변경)
          $('.menu-trigger, .menu-bg').removeClass('active');// 메뉴 버튼 & 배경 제거
          menu_Li.stop().animate({'opacity':0},250,"easeOutCubic",function(){//메뉴 글씨 opacity: 0

             setTimeout(function(){//0.5초 있다가 menu_wrap 위치 초기화
                      $('.menu-wrap').css({'top':"-110%"});
                  },500);
          });

          on_off=true;//변수를 true로 초기화
      }
  }
});

$(document).ready(function(){

    //팝업창 보여주기
    $("#popup-bg").delay(1500).animate({"opacity":"1"},100,"easeOutCubic");


    $("#close").on("click",close);
    

    function close(){
        $("#popup-bg").hide();
    }

});
