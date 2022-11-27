// Knob 1 : Semitone
const knob1 = document.getElementById("knob1");
const param1 = document.getElementById("param_1");
knob1.addEventListener("input", (event) => {
    synthKnob1 = event.target.value;
    synth3.detune.value = synthKnob1;
});

function updateKnob1(value) {
    knob1.value = value;
    param1.value = value;
    synth3.detune.value = value;
}

// Knob 2 : Filter Cutoff
const knob2 = document.getElementById("knob2");
const param2 = document.getElementById("param_2");
knob2.addEventListener("input", (event) => {
    synthKnob2 = event.target.value;
    synth3.filterEnvelope.baseFrequency = synthKnob2;
});

function updateKnob2(value) {
    knob2.value = value;
    param2.value = value;
    synth3.filterEnvelope.baseFrequency = value;
}

// Knob 4 : Sustain
const knob3 = document.getElementById("knob3");
const param3 = document.getElementById("param_3");
knob3.addEventListener("input", (event) => {
    synthKnob3 = event.target.value;
    synth3.filterEnvelope.sustain = synthKnob3 * 0.01;
    synth3.filterEnvelope.decay = synthKnob3 * 0.01;
    synth3.filterEnvelope.release = synthKnob3 * 0.1;
});

function updateKnob3(value) {
    knob3.value = value;
    param3.value = value;
    value *= 0.01;
    synth3.filterEnvelope.sustain = value;
    synth3.filterEnvelope.decay = value;
    synth3.filterEnvelope.release = value * 10;
}

// Knob 4 : Ping Pong
const knob4 = document.getElementById("knob4");
const param4 = document.getElementById("param_4");
knob4.addEventListener("input", (event) => {
    synthKnob4 = event.target.value;
    synth3.envelope.sustain = synthKnob4 * 0.01;
    synth3.envelope.decay = synthKnob4 * 0.01;
});

function updateKnob4(value) {
    knob4.value = value;
    param4.value = value;
    value *= 0.01;
    synth3.envelope.sustain = value;
    synth3.envelope.decay = value;
}

// Knob 5 : Reverb
const knob5 = document.getElementById("knob5");
const param5 = document.getElementById("param_5");
knob5.addEventListener("input", (event) => {
    synthKnob5 = event.target.value;
    pingPong.wet.value = synthKnob5 * 0.01;
});

function updateKnob5(value) {
    knob5.value = value;
    param5.value = value;
    value *= 0.01;
    pingPong.wet.value = value;
}

// Knob 6 : LFO Amount
const knob6 = document.getElementById("knob6");
const param6 = document.getElementById("param_6");
knob6.addEventListener("input", (event) => {
    synthKnob6 = event.target.value;
    reverb.wet.value = synthKnob6 * 0.01;
});

function updateKnob6(value) {
    knob6.value = value;
    param6.value = value;
    value *= 0.01;
    pingPong.wet.value = value;
}

// Knob 7 LFO Freq
const knob7 = document.getElementById("knob7");
const param7 = document.getElementById("param_7");
knob7.addEventListener("input", (event) => {
    synthKnob7 = event.target.value;
    filter.wet.value = synthKnob7 * 0.01;
});
function updateKnob7(value) {
    knob7.value = value;
    param7.value = value;
    value *= 0.01;
    filter.wet.value = value;
}

// Knob 8
const knob8 = document.getElementById("knob8");
const param8 = document.getElementById("param_8");
knob8.addEventListener("input", (event) => {
    synthKnob8 = event.target.value;
    filter.frequency.value = synthKnob8;
})

function updateKnob8(value) {
    knob8.value = value;
    filter.frequency.value = value;
    param8.value = value;
}