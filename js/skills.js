$(window).load(function(){

  const skills1 = $(".skills1");
  const rightBox = $(".skills-right"); //고정될 박스
  const nextSection = $(".projects");
  const titLi = $(".skills-left-box").children(); // tit 리스트 li
  const titLiNum = titLi.size(); //tit 리스트 li 개수 
  const txtLi = $(".skills-right-box").children(); // txt 리스트 li
  var windowWidth


  Reset();
  skillEvent();

  function Reset(){
    windowWidth = $(window).width();
  }

  function skillEvent(){
    $(window).on('resize',Reset);
    $(window).on('scroll',halfScroll);
  }

  function halfScroll(){

    if (windowWidth > 768) {


      if ($(window).scrollTop() >= skills1.offset().top && $(window).scrollTop() <= $('.skills-left ul li').last().offset().top) {
        //오른쪽 박스(txt) 고정
        rightBox.css({'position': 'fixed', 'top':0, 'right':0});
        txtLi.css({'position':'absolute'});


        for (i = 0; i < titLiNum; i++){
          if ($(window).scrollTop() >= titLi.eq(i).offset().top * 0.9) {
            txtLi.css({'opacity': 0});
            txtLi.eq(i).css({'opacity':1});
          }
        }
      } else {
        rightBox.css({'position': 'relative'});
        txtLi.css({'position': 'relative'});
      }

    } else {
      rightBox.css({'position':'relative'});
      txtLi.css({'position':'relative', 'opacity':1});
    }
  }
})
