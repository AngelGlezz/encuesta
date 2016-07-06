$(document).ready(function(){
	resize();
	$(window).resize(resize);
	$("#si").click(function(){
		$("#cover").hide();
		$("#uno").fadeIn();
		$("#index_cont").show();
		$("#fondo").css('background', 'url(/images/juanfutbol/mediakit/encuesta/backs/back2.jpg)');
		resize();
	});
	$("#rifaste").click(click1);
	$("#conquistaste").click(click2);
	$(".pre_1").click(function(){
		var div = '<div class="area_cont"><textarea class="area"></textarea><div class="boton" id="area1"></div></div>';
		var id = $(this).attr('id');
		switch (id) {
			case 'falto':
				$("#falto").unbind('click');
				$("#rifaste").hide();
				$("#desastre").hide();
				$("#ec1").append(div);
				$(this).css('margin-left', '0px');
			break;
			case 'desastre':
				$("#desastre").unbind('click');
				$("#falto").hide();
				$("#rifaste").hide();
				$("#ec1").append(div);
				$(this).css('margin-left', '0px');
			break;
		}
		$("#area1").click(click1);
	});
	$(".pre_2").click(function(){
		var div = '<div class="area_cont"><textarea class="area"></textarea><div class="boton" id="area2"></div></div>';
		var id = $(this).attr('id');
		switch (id) {
			case 'maso':
				$("#maso").unbind('click');
				$("#conquistaste").hide();
				$("#suck").hide();
				$("#ec2").append(div);
				$(this).css('margin-left', '0px');
			break;
			case 'suck':
				$("#suck").unbind('click');
				$("#maso").hide();
				$("#conquistaste").hide();
				$("#ec2").append(div);
				$(this).css('margin-left', '0px');
			break;
		}
		$("#area2").click(click2);
	});
	$(".pre_3").click(function(){
		$("#tres").hide();
		$("#final").fadeIn();
		$("#index_cont").hide();
		$("#fondo").css('background', 'url(/images/juanfutbol/mediakit/encuesta/backs/back.jpg)');
		resize();
	});
	function click1(){
		$("#uno").hide();
		$("#dos").fadeIn();
		$("#i2 > img").attr('src', '/images/juanfutbol/mediakit/encuesta/iconos/ic_active2.png');
		$("#fondo").css('background', 'url(/images/juanfutbol/mediakit/encuesta/backs/back.jpg)');
		$("#i2").css('background-color', '#fff');
		resize();
	};
	function click2(){
		$("#dos").hide();
		$("#tres").fadeIn();
		$("#i3 > img").attr('src', '/images/juanfutbol/mediakit/encuesta/iconos/ic_active3.png');
		$("#fondo").css('background', 'url(/images/juanfutbol/mediakit/encuesta/backs/back2.jpg)');
		$("#i3").css('background-color', '#fff');
		resize();
	};
	function resize(){
		var elem = null;
		$(".inner.abs-center > div").each(function(){
			if($(this).css("display") === "block"){
				elem = $(this);
			}		
		});
		console.log($(elem).height());
		$(".inner.abs-center").height($(elem).height());
	}
});
