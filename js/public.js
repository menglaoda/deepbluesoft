$(function(){
    //加载头部
    $(".myheader").load("header.html");
    //加载尾部
    $(".myfooter").load("footer.html");
    //首页启动动画
    setTimeout(function(){
    	$("body").css("overflow","visible");
    	$(".content").css("display","block");
    },3000)
    
})
