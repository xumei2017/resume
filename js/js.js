$(window).ready(function(){
      //回到顶部
    $("#top").click(function () {
        $('html,body').stop().animate({
            scrollTop: 0
        }, 700);
    });
    showScroll();
    var min_height = document.documentElement.clientHeight /2;
    function showScroll() {
        $(window).scroll(function() {
            var s = $(window).scrollTop();
            s > min_height ? $('#top,#down').fadeIn() : $('#top,#down').fadeOut();
        });
    }

/*cover begin*/
	$(".cover").mouseenter(function(){
		var json1 = {"width":400,"height":400,"top":100,"left":100,"border-radius":100,"opacity":0.4};
        var json2 = {"width":100,"height":100,"top":100,"left":400,"border-radius":100,"opacity":0.8};
        var json3 = {"width":1360, "height":600,"top":0,"left":0,"border-radius":0,"opacity":1};
        $("#cover-img").animate(json1,500,function(){
        	$("#cover-img").animate(json2,500,function(){
                $("#cover-img").animate(json3,500);
            });
        });       	
    });
    $('#aboutUs').on('click',function(){
       $('.cover-index').slideDown(1000).slideUp(1000).fadeIn(1000);
    });
/*cover end*/
/*us begin*/
    $('h1').mouseenter(function(){
    	$(this).addClass('green');
    	$(this).next().stop().fadeOut(500);
    });  
    $('h1').mouseleave(function(){
    	$(this).removeClass('green');
    	$(this).next().stop().fadeIn(500);
    });
/*us end*/
/*product begin*/
   $('.product>ul>li').mouseenter(function(){
   	   $(this).css('opacity',0.5).children('div').show().slblings().children('div').hide();
   });
    $('.product>ul>li').mouseleave(function(){
   	   $(this).css('opacity',1).children('div').hide().slblings().children('div').hide();
   });
/*product end*/
/*skill begin*/
   $('.skilles-title li:eq(0)').on('mouseenter',function(){
       $('.skilles-details').show();
       var str = "熟悉W3C规范,能够正确以语义化标签完成页面输出。";
       var arr = str.split('');
       var str2 = "";
       var num = 0;
       var timer = null;
       timer = setInterval(function(){
         if(arr[num]===undefined){
            clearInterval(timer);
         }else{
           str2 += arr[num];
           $('.skilles-details').text(str2);
           num++;
         }
       },40);
   });
     $('.skilles-title li:eq(1)').on('mouseenter',function(){
       $('.skilles-details').show();
       var str = "能够实现CSS常见布局，如响应式布局、三栏布局等。";
       var arr = str.split('');
       var str2 = "";
       var num = 0;
       var timer = null;
       timer = setInterval(function(){
         if(arr[num]===undefined){
            clearInterval(timer);
         }else{
           str2 += arr[num];
           $('.skilles-details').text(str2);
           num++;
         }
       },40);
   });
       $('.skilles-title li:eq(2)').on('mouseenter',function(){
        $('.skilles-details').show();
       var str = "熟练掌握js的基本语法、函数、流程结构等基础知识，能够用js做出一些动画效果。";
       var arr = str.split('');
       var str2 = "";
       var num = 0;
       var timer = null;
       timer = setInterval(function(){
         if(arr[num]===undefined){
            clearInterval(timer);
         }else{
           str2 += arr[num];
           $('.skilles-details').text(str2);
           num++;
         }
       },40);
   });
        $('.skilles-title li:eq(3)').on('mouseenter',function(){
       $('.skilles-details').show();
       var str = "熟练使用jQuery，实现懒加载、瀑布流等常见效果。";
       var arr = str.split('');
       var str2 = "";
       var num = 0;
       var timer = null;
       timer = setInterval(function(){
         if(arr[num]===undefined){
            clearInterval(timer);
         }else{
           str2 += arr[num];
           $('.skilles-details').text(str2);
           num++;
         }
       },40);
   });

   $('.skilles-title li').on('mouseleave',function(){
       $('.skilles-details').hide();
   });
/*skill end*/
$('.cover-index>li').on('click',function(){
   var index = $(this).index(); //获取索引号
   _top = $('.floor').eq(index).offset().top; //获取对应div距离高度
   moveTo();
});
 function moveTo() {
    $('html,body').animate({
        scrollTop:_top-10
    },500);
 }
 
});

