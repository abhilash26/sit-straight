let audioContext, osc, lfo;

function init_sound() {
	try {
		// Fix up for prefixing
		window.AudioContext = window.AudioContext || window.webkitAudioContext;
		audioContext = new AudioContext();

		var real = new Float32Array([ 0, 0.4, 0.4, 1, 1, 1, 0.3, 0.7, 0.6, 0.5, 0.9, 0.8 ]);

		var imag = new Float32Array(real.length);
		var hornTable = audioContext.createPeriodicWave(real, imag);

		osc = audioContext.createOscillator();
		osc.type = 'sawtooth';
		osc.setPeriodicWave(hornTable);
		osc.frequency.value = 160;
		osc.connect(audioContext.destination);
		osc.start();
	} catch (e) {
		console.log(e);
		alert('Web Audio API is not supported in this browser');
	}
}

function start_alarm() {
	try {
		if (osc != undefined) {
			osc.connect(audioContext.destination);
		}
	} catch (e) {}
}

function stop_alarm() {
	try {
		if (osc != undefined) {
			osc.disconnect(audioContext.destination);
		}
	} catch (e) {}
}
