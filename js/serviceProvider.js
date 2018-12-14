$(function(){
 $.get('http://localhost:3000/service',(data)=>{
 let services = JSON.parse(data);
 $('.shoplist').append(template('content-list',{data:services}));
 })

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