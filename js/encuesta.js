$(document).ready(function(){
	$("#si").click(function(){
		$("#cover").fadeOut();
		$("#uno").fadeIn();
		$("#index_cont").show();
		$("#i1").css('background', '#adf21f');
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
			break;
			case 'falto':
				$("#falto").addClass('uno');
				$("#rifaste").hide();
				$("#desastre").hide();
				$("#ec1").append(div);
			break;
			case 'desastre':
				$("#desastre").addClass('uno');
				$("#falto").hide();
				$("#rifaste").hide();
				$("#ec1").append(div);
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
			break;
			case 'maso':
				$("#maso").addClass('uno');
				$("#conquistaste").hide();
				$("#suck").hide();
				$("#ec2").append(div);
			break;
			case 'suck':
				$("#suck").addClass('uno');
				$("#maso").hide();
				$("#conquistaste").hide();
				$("#ec2").append(div);
			break;
		}
		$("#area2").click(click2);
	});
	$(".pre_3").click(function(){
		var div = '<div class="area_cont"><textarea class="area"></textarea><div class="boton" id="area3">ENVIAR</div></div>';
		var id = $(this).attr('id');
		switch (id) {
			case 'nunca':
				$("#nunca").addClass('uno');
				$("#otra").hide();
				$("#mejor").hide();
				$("#ec3").append(div);
			break;
			case 'otra':
				$("#otra").addClass('uno');
				$("#nunca").hide();
				$("#mejor").hide();
				$("#ec3").append(div);
			break;
			case 'mejor':
				$("#mejor").addClass('uno');
				$("#otra").hide();
				$("#nunca").hide();
				$("#ec3").append(div);
			break;
		}
		$("#area3").click(click3);
	});
	function click1(){
		$("#uno").fadeOut();
		$("#dos").fadeIn();
		$("#i2").css('background', '#adf21f');
	};
	function click2(){
		$("#dos").fadeOut();
		$("#tres").fadeIn();
		$("#i3").css('background', '#adf21f');
	};
	function click3(){
		$("#tres").fadeOut();
		$("#final").fadeIn();
		$("#index_cont").hide();
	};
});

		

		

		