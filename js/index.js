$(function () { 
 var swiper = new Swiper('.root-swiper-container', {
        pagination: '#profileNav',
        direction: 'vertical',
        // slidesPerView: 1,
        paginationClickable: true,
        // spaceBetween: 30,
        mousewheelControl: true
    });
  //在导航条填入文字
  var arr = ['个人简介','期望岗位','职业技能','项目经验','自我评价','相关技术']

  for(var i =0 ; i < arr.length ;i++){
    $('#profileNav span').eq(i).html(arr[i])

  }
})