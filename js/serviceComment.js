$(function () {
  $.get('http://localhost:3000/item',function (data) {
    let item=JSON.parse(data);
    $('.service-wrap').append(template('order',{data:item}))
    $('.service-item').append(template('detailed',{data:item}))
  });
  let comments=[];
  let currentComments=[];
  $.get('http://localhost:3000/comment',function (data) {
    comments=JSON.parse(data);
    currentComments=comments.slice(0,10);
    $('.comment-list').append(template('fenpage',{data:currentComments}))
  });
  let $header=$('.header-wrap');
  let headerHeight=$header.outerHeight();
  let ishide=false;
  $(window).scroll( function() {
    return;
    if(document.documentElement.scrollTop>headerHeight){
      if(!ishide){
        $header.hide().slideDown('slow').addClass('header-wrap header-fixed');
        ishide=true;
      }
    }else if(document.documentElement.scrollTop<headerHeight){
      if(ishide){
        console.log('a');
        $header.removeClass('header-fixed').prependTo('#app')
        ishide=false;
      }
    }
  });

  let $ellipsis=$('.ellfront');
  $ellipsis.remove()
  $('.pgNumber').click(function (e) {
    document.getElementById('lookcomment').scrollIntoView()
    let pageNum=this.textContent;
    currentComments=comments.slice(pageNum*10-10,pageNum*10);
    $('.comment-list').empty().append(template('fenpage',{data:currentComments}))
    $(this).addClass('pgon').siblings().removeClass('pgon');
    if(pageNum<=8){
      $ellipsis.remove();
    }else{
      $ellipsis.insertAfter(".pgNumber:eq(2)");
      $('.pgNumber:eq(5)').addClass('pgon').siblings().removeClass('pgon');
      let newFirstIndex=pageNum-2;
      $.each( $('.pgNumber:gt(2)'),function (i,n) {
        n.textContent=newFirstIndex++;
      })
      //$('.pgNumber:gt(2)')
    }
  })

});

