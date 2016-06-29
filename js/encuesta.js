$(document).ready(function(){
	$("#si").click(function(){
		$("#cover").fadeOut();
		$("#uno").fadeIn();
		$("#index_cont").show();
		$("#fondo").css('background', 'url(images/backs/back2.jpg)');
	});
	$(".pre_1").click(function(){
		var div = '<div class="area_cont"><textarea class="area"></textarea><div class="boton" id="area1">ENVIAR</div></div>';
		var id = $(this).attr('id');
		switch (id) {
			case 'rifaste':
				$("#rifaste").addClass('uno');
				$("#falto").hide();
				$("#desastre").hide();
				$("#ec1").append(div);
				$(this).css('margin-left', '0px');
			break;
			case 'falto':
				$("#falto").addClass('uno');
				$("#rifaste").hide();
				$("#desastre").hide();
				$("#ec1").append(div);
				$(this).css('margin-left', '0px');
			break;
			case 'desastre':
				$("#desastre").addClass('uno');
				$("#falto").hide();
				$("#rifaste").hide();
				$("#ec1").append(div);
				$(this).css('margin-left', '0px');
			break;
		}
		$("#area1").click(click1);
	});
	$(".pre_2").click(function(){
		var div = '<div class="area_cont"><textarea class="area"></textarea><div class="boton" id="area2">ENVIAR</div></div>';
		var id = $(this).attr('id');
		switch (id) {
			case 'conquistaste':
				$("#conquistaste").addClass('uno');
				$("#maso").hide();
				$("#suck").hide();
				$("#ec2").append(div);
				$(this).css('margin-left', '0px');
			break;
			case 'maso':
				$("#maso").addClass('uno');
				$("#conquistaste").hide();
				$("#suck").hide();
				$("#ec2").append(div);
				$(this).css('margin-left', '0px');
			break;
			case 'suck':
				$("#suck").addClass('uno');
				$("#maso").hide();
				$("#conquistaste").hide();
				$("#ec2").append(div);
				$(this).css('margin-left', '0px');
			break;
		}
		$("#area2").click(click2);
	});
	$(".pre_3").click(function(){
		$("#tres").fadeOut();
		$("#final").fadeIn();
		$("#index_cont").hide();
		$("#fondo").css('background', 'url(images/backs/back.jpg)');
	});
	function click1(){
		$("#uno").fadeOut();
		$("#dos").fadeIn();
		$("#i2 > img").attr('src', 'images/iconos/ic_active2.png');
		$("#fondo").css('background', 'url(images/backs/back.jpg)');
	};
	function click2(){
		$("#dos").fadeOut();
		$("#tres").fadeIn();
		$("#i3 > img").attr('src', 'images/iconos/ic_active3.png');
		$("#fondo").css('background', 'url(images/backs/back2.jpg)');
		$("#i3").css('background', '#adf21f');
	};
});

		

		

		