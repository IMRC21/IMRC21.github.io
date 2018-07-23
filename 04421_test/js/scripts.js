var menuIsOpen;
var windowH;
var headerH;


function openNav() {
    document.getElementById("left-menu").style.width = "80%";
	$("#left-menu").css("display","block");

}

function closeNav() {
    document.getElementById("left-menu").style.width = "0";
		$("#left-menu").css("display","none");

}

$(document).ready(function()
{
	/*menuIsOpen = false;
	$("#open-menu").click(function(){
		$(".push-left").css("display", "block");
		//$("#container").css("filter", "blur(5px)");
	});
	
	
	$("#container").click(function(){
	if($(".push-left").css("display") == "block"){
		$(".push-left").css("display", "none");
		menuIsOpen = false;
	}
	});
*/
	windowH = $(window).height();
	headerH = $("#container").height();
	console.log("Lunghezza finestra = " + windowH + "lunghezza header = " + headerH);
	
	if ($(window).width() <= 600) {  
			$("#mobile").show();
			$("#menu").hide();
		   }else{
			$("#mobile").hide();
		 	$("#menu").show();
		   }
	//if the window is resized I do the same thing
	$(window).resize(function(){
		$("#mobile").hide();
		   if ($(window).width() <= 600) {  
			   $("#mobile").show();
			   $("#menu").hide();
		   }else{
			   $("#mobile").hide();
			   $("#menu").show();
		   }     

	});
});
