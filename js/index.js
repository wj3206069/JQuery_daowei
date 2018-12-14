$(function(){
 $.get('http://localhost:3000/home',(data)=>{
 let services = JSON.parse(data);
 $('.service-items').append(template('left-nav',{data:services}));
 $('.service-wrap').append(template('service-list',{data:services}))
 })

 //轮播图
  new Swiper ('.swiper-container', {
    autoplay:true,
    effect : 'fade',
    pagination: {
      el: '.swiper-pagination',
      clickable:true
    }
  });

 //头部显示与隐藏
 let $header = $('.header-wrap');
 let headerHeight = $header.outerHeight();
 let ishide = false
 $(window).scroll(function(){
 if(document.documentElement.scrollTop>headerHeight){
  if(!ishide){
    $header.hide().slideDown('slow').addClass('header-wrap header-fixed');
    ishide=true;
  }
 }else if(document.documentElement.scrollTop<headerHeight){
   if(ishide){
     $header.removeClass('header-fixed').prependTo('#app')
     ishide=false
   }
 }
 })
});