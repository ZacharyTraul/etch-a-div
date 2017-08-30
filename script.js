var side = 6;

$(document).ready(function(){
	createTiles();
	startFade();
	
	$("#change").click(function(){
		side = $("input[type=number]").val();
		createTiles();
	});
	
	$("#reset").click(function(){
		console.log("hmm");
		$(".tile").css("background-color", "white");
	});
	
	$(document).on("mouseenter", ".tile", function(){
		$(this).css("background-color", "#" + Math.floor(Math.random() * 16777215).toString(16));
	});
		
});

function createTiles(){
	$("#etcher").empty();
	
	for(var i = 0; i < side; i++){
		for(var j = 0; j < side; j++){
			$("#etcher").append("<div class=\"tile\"></div>");
		}
	}
	$(".tile").css("width", 720/side);
	$(".tile").css("height", 720/side);
}

var color_stage = 0;

function startFade(){
	setInterval(function(){
		if(color_stage % 3 === 0){
			$("#etcher").removeClass("blue-shadow");
			$("#etcher").addClass("red-shadow");
		}else if(color_stage % 3 === 1){
			$("#etcher").removeClass("red-shadow");
			$("#etcher").addClass("green-shadow");
		}else if(color_stage % 3 === 2){
			$("#etcher").removeClass("green-shadow");
			$("#etcher").addClass("blue-shadow");
		}
		color_stage += 1;
	}, 1000);
}
