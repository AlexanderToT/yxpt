$(document).ready(function(){
		  var slideShow=$(".banner")
		  ul=slideShow.find("ul") 
		  showNumber=slideShow.find(".show_nav span"),
		  oneHeight=slideShow.find("ul li").eq(0).height(); 
		  var timer=null; 
		  var iNow=0;  
		  
		  showNumber.on("click",function(){
		   $(this).addClass("active").siblings().removeClass("active");
		   var index=$(this).index(); 
		   iNow=index;
		   ul.animate({
		    "top":-oneHeight*iNow,
		   })
		  });
	
	function autoPlay(){
	   timer=setInterval(function(){  
	   iNow++;  
	   if(iNow>showNumber.length-1){ 
	    iNow=0;
	   }
	   showNumber.eq(iNow).trigger("click"); 
	   },3000)
	  }
	  autoPlay();
	 
	  slideShow.hover(
	   function(){
	    clearInterval(timer);
	   },autoPlay
	  );
	  
})

$(document).ready(function(){
		  var oDiv=$(".box")
		  var banner=$(".job_banner")
		  oUl=oDiv.find("ul") 
		  jobNumber=banner.find(".show_nav span"),
		  oneWidth=oDiv.find("ul li").eq(0).width();
		  
		  var timer=null; 
		  var iNum=0;  
		  
		  jobNumber.on("click",function(){
		   $(this).addClass("active").siblings().removeClass("active");
		   var index=$(this).index(); 
		   iNum=index;
		   oUl.animate({
		    "left":-oneWidth*iNum,
		   })
		  });
		  
		function AUtoba(){
		   timer=setInterval(function(){  
		   iNum++;  
		   if(iNum>jobNumber.length-1){ 
		    iNum=0;
		   }
		   jobNumber.eq(iNum).trigger("click"); 
		   },2000)
		  }
		  AUtoba();
		  oUl.hover(
		   function(){
		    clearInterval(timer);
		   },AUtoba
		  );
})
/*人才招聘 轮播图结束*/