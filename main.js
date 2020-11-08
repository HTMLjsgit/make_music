const Tone = require('tone');


var synth = new Tone.Synth().toMaster();
var number_piano;
var number_string;
var pianos = document.getElementsByClassName("pianos");
var select_box = document.getElementById("select_box");
var change_button = document.getElementById("change-button");
var select_limit = 1;
var contents = document.getElementsByClassName("contents");
var once;
function play(c, n){
	synth.triggerAttackRelease(c, n);
}
for(var i = 0; i < pianos.length; i++){
	pianos[i].addEventListener('mousedown', function(event){
		synth.triggerAttackRelease(event.target.dataset.piano, "8n")
	});
}
contents[select_limit - 1].style.display = "block";
document.onkeydown = function(e){

	number_piano = select_limit;
	if(e.key == "z"){
		number_string = "C"; //ド
	}
	else if(e.key == "x"){
		number_string = "D";　//レ
	}
	else if(e.key == "c"){
		number_string = "E";　//ミ
	}
	else if(e.key == "v"){
		number_string = "F";　//ファ
	}
	else if(e.key == "b"){
		number_string = "G";　//ソ
	}
	else if(e.key == "n"){
		number_string = "A";　//ラ
	}
	else if(e.key == "m"){
		number_string = "B";　//シ
	}
	if(number_string && number_piano != null){
		synth.triggerAttackRelease(number_string + number_piano, "8n");
	}	
	// if(e.keyCode == )
}
document.onkeyup = function(e){
	number_piano = null;
	number_string = null;
}
select_box.addEventListener('change', function(event){
	contents[select_limit - 1].style.display = "none";
	select_limit = event.target.value;
	console.log(select_limit);
	console.log(event.target.value);
	contents[select_limit - 1].style.display = "block";
});

function change(c){
	if(c == "synth"){
		synth = new Tone.Synth().toMaster();
	}else if(c == "synth2"){
		synth = new Tone.MonoSynth().toMaster();
	}
}

