$(window).load(function(){

  const left = $(".main-left"); // 메인 왼쪽박스
  const right = $(".main-right"); // 메인 오른쪽 박스
  const change = $(".scroll-color"); //scroll할 때 늘어나는 박스
  const sectionNum = $("section").size(); //
  let windowWidth;

  scrollMain();
  scrollEvent();

  function scrollEvent(){
    $(window).on('resize',scrollMain);
    $(window).on('scroll',scrollMain);
    $(window).on('scroll',scrollAni);
  }


  function scrollMain(){
    const windowWidth = $(window).width();
    if (windowWidth > 980){
      const scrollTop = $(this).scrollTop();
      change.css({'width': scrollTop * 1.5});
    }
  }

  
  function scrollAni(){
    const scrollTop = $(this).scrollTop();

    for (i = 0; i < sectionNum; i++){
      if (scrollTop >= $('section').eq(i).offset().top * 0.95){
        $('section').eq(i).find("h2").children('a').animate({'opacity':1}, 500, "easeOutCubic");
      }

    }
  }



 

})
