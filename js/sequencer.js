let rows = 9;
let steps = 32;
let isPlaying = false;
let initialized = false;
let stepsData = [];
let swingValueDef = 5;
let swingValue = "";
let swingSubDiv = '32n';
let bpm = 133;
let songsData = [];
let lastId = "";
let currentKitName = "KrumQuist";
let sampleNames = [];
let isRecording = false;

// ----------------------------------// 
// User preset settings

let uPreLoaded = false;
let uPreId = "";
let uPreRating = 0;
let uPreAuthor = "";
let uPreDescription = "";
let uPreKit;
let sampleUrl = 'samples/';
let userPresetIsLoaded = false;
let userPresetIsPressed = false;
let randomizerIsPressed = false;
let randomKit = "";

// let activateHeader = document.querySelector('.presetBox');
let bpmInput = document.getElementById('bpmInput');
bpmInput.value = bpm;
let previousKit = "";

// Kits //
let vol1 = 0;
let vol2 = 0;
let vol3 = 0;
let vol4 = 0;
let vol5 = 0;
let vol6 = 0;
let vol7 = 0;
let vol8 = 0;
let vol9 = 0;

// Default synth values translated to knobs
let synthKnobVol = -10;
let synthKnob1 = 0;
let synthKnob2 = 100;
let synthKnob3 = 30;
let synthKnob4 = 50;
let synthKnob5 = 10;
let synthKnob6 = 30;
let synthKnob7 = 0;
let synthKnob8 = 1;

stepsData = [
  [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1],
  [1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0]
];

let presetData = [];

// ----------------------------------------------// 
// ----------------------------------------------// 
// ----------------------------------------------// 
// Create instruments & samples

let mixer = new Tone.Gain({ value: 0 });
let reverb = new Tone.Reverb({
  wet: 0.3,
  decay: 8,
});

let vol = new Tone.Volume({ volume: -10, });

const pingPong = new Tone.PingPongDelay("16n.", 0.2);
pingPong.wet.value = 0.2;

const filter = new Tone.AutoFilter().start();
filter.baseFrequency = 200;
filter.depth.value = 1;
filter.octaves = 3.8;
filter.wet.value = 0;

pingPong.wet.value = 0.2;
reverb.connect(filter);
pingPong.connect(filter);
mixer.connect(vol);
filter.connect(mixer);

vol.toDestination();

let synths = [];
let notes = [
  "36", "36", "36",
  "36", "36", "36",
  "57", "36", "36"];

// ----------------------------------------------// 
// ----------------------------------------------// 
// ----------------------------------------------// 

function createSynths() {

  selectKit(uPreKit);

  return synths
}

// ----------------------------------------------// 

function createStepsArray() {
  for (let i = 0; i < rows; i++) {
    const arrayRows = new Array(32).fill(0);
    stepsData.push(arrayRows);
  }
}

// ----------------------------------------------// 

function resetStepsArray() {

  if (uPreId != "") {
    let rowDiv = document.getElementById('pId_' + uPreId);
    rowDiv.classList.remove('cellActive');
  }

  uPreLoaded = false;
  uPreId = "";
  uPreRating = 0;
  uPreAuthor = "";
  uPreDescription = "";
  swingValueDef = 8;
  swingSubDiv = "32n";

  vol1 = 0;
  vol2 = 0;
  vol3 = 0;
  vol4 = 0;
  vol5 = 0;
  vol6 = 0;
  vol6 = 0;
  vol7 = 0;
  vol8 = 0;
  vol9 = 0;

  notes = ["36", "36", "36",
    "36", "36", "36",
    "57", "36", "36"];

  userPresetIsLoaded = false;

  selectKit(uPreKit);

  // activateHeader.classList.remove('presetBox-active');
  stepsData = [];
  createStepsArray();
  createTable(rows, steps);
}

// ----------------------------------------------// 

function createTable(rows, steps) {

  let seq = document.getElementById('seq');

  if (seq.innerHTML !== '') {
    let rem = document.querySelector('.divTable');
    rem.remove();
  }

  let newTable = document.createElement('div');
  newTable.classList.add('divTable');
  seq.appendChild(newTable);

  let newTableBody = document.createElement('div');
  newTableBody.classList.add('divTableBody');

  seq.querySelector('.divTable').appendChild(newTableBody);

  let newTableHead = document.createElement('div');
  newTableHead.setAttribute('id', 'tableHead');

  newTableBody.appendChild(newTableHead);

  let newTableSpace = document.createElement('div');
  newTableSpace.classList.add('tableSpaceHead');
  newTableSpace.innerHTML = '<span id="headSpan"></span>';
  seq.querySelector('#tableHead').appendChild(newTableSpace);


  // Calculate numbers for table head
  let j = 0;
  let f = 0;

  for (let i = 0; i < steps; i++, j++) {
    let timeHeader = document.createElement('div');
    timeHeader.setAttribute('id', 'divTableHead');
    if (i % 4 === 0) { f++; }
    if (j === 4 || j === 0) { j = 0; timeHeader.classList.add('forthN'); }
    timeHeader.innerHTML = f + '.' + (j + 1);
    seq.querySelector('#tableHead').appendChild(timeHeader);
  }

  // Create table rows [instruments]

  for (let i = 0; i < rows; i++) {

    let forC = 0;
    let newTableRow = document.createElement('div');

    newTableRow.classList.add('divTableRow');
    newTableRow.setAttribute('id', 'row_' + i);

    seq.querySelector('.divTableBody').appendChild(newTableRow);

    instrumentId = i;
    let newTableSpace = document.createElement('div');
    newTableSpace.classList.add('tableSpace');
    newTableSpace.setAttribute('id', 'mix' + i);

    let newSampleName = document.createElement('div');
    newSampleName.classList.add('sampleNames');
    newSampleName.setAttribute('id', 'SN_' + i);

    let newKnob = document.createElement('webaudio-knob');

    if (i === 8) { sampleN = "Monosynth"; } else { sampleN = sampleNames[i]; }
    newTableSpace.innerHTML = `
    <webaudio-knob id="pitchKnob_` + i + `" src="images/fx-2.png" tooltip="%s" min="0" max="127" diameter="32" value="` + notes[i] + `" oninput="pitchChange(` + instrumentId + `)" class="pitchKnob">
    </webaudio-knob>
      <input type="range" min="-50" max="10" value="0" class="slider button-slider" id="volSlider_` + instrumentId + `" oninput="volumeChange(` + instrumentId + `)">
      <img src="img/inst/mix.svg" height="15px" id="inst" onclick="triggerMix('` + instrumentId + `')" class="mixElementFilter">
    `;

    seq.querySelector('#row_' + i).appendChild(newTableSpace);
    newTableSpace.appendChild(newSampleName);

    updateSampleNames(i);

    // Create horizontal steps

    for (let l = 0; l < steps; l++, forC++) {

      let newTableCell = document.createElement('div');
      newTableCell.classList.add('divTableCell');

      newTableCell.classList.add("mix");
      newTableCell.setAttribute('id', 'row_' + i + '_' + l)

      if (l % 4 == 0) {
        newTableCell.classList.add('forth');
      }

      // Keep cells active when zooming
      stepsData.forEach((arrayRows, index) => {
        let active = arrayRows[l];
        if (active === 1 && i == index) {
          newTableCell.classList.add('cellActive');
        }
      });
      newTableRow.appendChild(newTableCell);
    }
  }

  const clickCells = document.querySelectorAll('.divTableCell');

  for (let i = 0; i < clickCells.length; i++) {
    clickCells[i].addEventListener('click', activateSteps);
  }

}

// ----------------------------------------------// 

function minusBar() {
  if (steps <= 4) return;
  steps -= 4;
  Tone.Draw.cancel();
  createTable(rows, steps);
}

// ----------------------------------------------// 

function plusBar() {
  if (steps >= 32) return;
  steps += 4;
  Tone.Draw.cancel();
  createTable(rows, steps);
}

// ----------------------------------------------// 

function activateSteps() {
  this.classList.toggle('cellActive');

  // Get Row & Step ID of clicked step
  let getId = this.id.split("_")
  const rowId = getId[1];
  const stepId = getId[2];
  let newValue = 0;

  const getArrayDataRow = stepsData[rowId];

  if (stepsData[rowId][stepId] === 0) {
    newValue = 1;
    triggerMix(rowId);
  } else {
    newValue = 0;
  }

  getArrayDataRow.splice(stepId, 1, newValue);
}

// ----------------------------------------------// 
// Swing stuff 

swingValue = swingValue = document.getElementById("swingSlider").value;
const slider = document.getElementById("swingSlider");

slider.oninput = function () {
  swingValue = slider.value;
  var swing = (swingValue / 100);
  Tone.Transport.swing = swing;
}

function changeSwing() {
  var swing = (swingValue / 100);
  Tone.Transport.swing = swing;
}

// ----------------------------------------------// 

function swingSub(value) {
  const currentSwingSub = document.getElementById("displaySwing");
  const subDisplaySelected = document.getElementById(value);
  subDisplaySelected.classList.add('green');

  if (value !== currentSwingSub.innerHTML) {
    subDisplayPrev = document.getElementById(currentSwingSub.innerHTML);
    subDisplayPrev.classList.remove('green');
  }

  currentSwingSub.innerHTML = value;
  swingSubDiv = value;

  if (isPlaying === true) {
    Tone.Transport.swingSubdivision = swingSubDiv;
    startNow();
  }
}

// ----------------------------------------------// 

function activeKit(value) {
  const grabCurrentKitDOM = document.getElementById('displayKit');
  const grabSelectedKitClick = document.getElementById("kit" + value);
  grabSelectedKitClick.classList.add('green');

  if (previousKit !== undefined) {
    if (value !== previousKit) {
      grabPreviousKitDOM = document.getElementById("kit" + previousKit);
      grabPreviousKitDOM.classList.remove('green');
    }
  }

  grabCurrentKitDOM.innerHTML = ('Kit: ' + currentKitName);

}

// ----------------------------------------------// 

function startLoop() {

  let beat = 0;
  for (let i = 0; i < 8; i++) {
    updateSampleNames(i);
  }

  var repeat = new Tone.Loop(function (time) {
    stepsData.forEach((arrayRows, index) => {
      let synth = synths[index];
      let note = arrayRows[beat];
      if (note === 1) {

        if (index == 8) {
          synth3.triggerAttackRelease(Tone.Midi(notes[index]), '16n', time + 0.1);
          // synth.triggerAttackRelease(notes[index], '16n', time + 0.1);
        } else if (index == 7) {
          synth.triggerAttackRelease(Tone.Midi(notes[index]), '1n', time + 0.1);
        } else {
          synth.triggerAttackRelease(Tone.Midi(notes[index]), '1n', time + 0.1);
        }
      }

      Tone.Draw.schedule(function () {
        let getDrawCell = document.querySelector('#row_' + index + '_' + beat);

        if (!getDrawCell) return
        const getId = getDrawCell.id.split("_")
        const rowId = getId[1];
        const stepId = getId[2];

        if (getDrawCell.classList.contains('cellActive')) {
          paintActive(index, beat, true);

        } else {
          paintActive(index, beat, false);
        }
      }, time);

    });
    beat = (beat + 1) % steps;
  }, "16n");
  return repeat;
}

function recordNow() {

  let beat = 0;
  for (let i = 0; i < 8; i++) {
    updateSampleNames(i);
  }

  // Recorder
  const audio = document.getElementById('recorder');
  const actx = Tone.context;
  const dest = actx.createMediaStreamDestination();
  const recorder = new MediaRecorder(dest.stream);
  const recordData = [];
  const playBtn = document.getElementById('playBtn');
  playBtn.classList.add('red');
  playBtn.innerHTML = `Rec`;

  vol.connect(dest);

  // Start recording
  recorder.start();

  var recordSeq = new Tone.Loop(function (time) {

    // Play if current beat is less than sequencer total steps
    if (beat < (steps - 1)) {
      isPlaying = true;
      stepsData.forEach((arrayRows, index) => {

        let synth = synths[index];
        let note = arrayRows[beat];
        if (note === 1) {

          if (index == 8) {
            synth3.triggerAttackRelease(Tone.Midi(notes[index]), '16n', time + 0);
            // synth.triggerAttackRelease(notes[index], '16n', time + 0.1);
          } else if (index == 7) {
            synth.triggerAttackRelease(Tone.Midi(notes[index]), '1n', time + 0);
          } else {
            synth.triggerAttackRelease(Tone.Midi(notes[index]), '1n', time + 0);
          }
        }

        Tone.Draw.schedule(function () {
          let getDrawCell = document.querySelector('#row_' + index + '_' + beat);

          if (!getDrawCell) return
          const getId = getDrawCell.id.split("_")
          const rowId = getId[1];
          const stepId = getId[2];

          if (getDrawCell.classList.contains('cellActive')) {
            paintActive(index, beat, true);

          } else {
            paintActive(index, beat, false);
          }
        }, time);

      });

      // Stop recording
    } else {
      recordSeq.stop();
      isRecording = false;
      isPlaying = false;
      beat = 0;
      setTimeout(function () {
        recorder.stop();
        playBtn.classList.remove('red');
        playBtn.innerHTML = `Play`;
      }, 1000);

      recorder.ondataavailable = evt => recordData.push(evt.data);
      recorder.onstop = evt => {
        let blob = new Blob(recordData, { type: 'audio/ogg; codecs=opus' });
        audio.src = URL.createObjectURL(blob);
      }
    }

    beat = (beat + 1) % steps;
  }, "16n");

  return recordSeq;
}

// ----------------------------------------------// 

function startNow() {
  Tone.Transport.bpm.value = bpm;
  Tone.Transport.subdivision = swingSubDiv;
  Tone.Transport.start();
}

// ----------------------------------// 
// Manage play/pause state

function initialize() {
  Tone.start();
  repeat = startLoop();
  startNow();
  initialized = true;
  copyButton.innerHTML = `Generate preset link & copy!`;
}

function stopPlaying() {
  repeat.stop();
  Tone.Transport.stop();
  isPlaying = false;
}

function startPlaying() {
  Tone.Transport.start();
  setTimeout(function () {
    repeat.start();
  }, 100);
  isPlaying = true;
}

// ----------------------------------------------// 
// Paint DIV colors when playing

function paintActive(index, beat, active) {
  const getDrawCell = document.querySelector('#row_' + index + '_' + beat);

  if (!active) {
    getDrawCell.classList.add('activeStep');
    setTimeout(function () { getDrawCell.classList.remove('activeStep'); }, 150);
  } else {
    getDrawCell.classList.add('invertStep');
    setTimeout(function () { getDrawCell.classList.remove('invertStep'); }, 150);
  }
}

// ----------------------------------------------// 
// Play from instrument rows

function triggerMix(index) {
  if (initialized === true) {
    synths[index].triggerAttackRelease(Tone.Midi(notes[index]), '4n');
  } else {
    initialize();
    stopPlaying();
    triggerMix(index);
  }
}

// ----------------------------------------------// 
// Play button

function handlePlay() {
  const button = document.getElementById('playBtn');
  button.addEventListener('click', () => {
    if (!initialized) {
      initialize();
    }
    if (isPlaying) {
      stopPlaying();
      button.innerHTML = 'Play';
      button.classList.remove('green');
    } else {
      startPlaying();
      button.innerHTML = 'Stop';
      button.classList.add('green');
    }

  });
}

// ----------------------------------------------// 
// Play with spacebar

document.addEventListener('keydown', function (e) {
  if (e.code == "Space" && e.target == document.body) {
    e.preventDefault();

    const button = document.getElementById('playBtn');

    if (!initialized) {
      initialize();
    }
    if (isPlaying) {
      stopPlaying();
      button.innerHTML = 'Play';
      button.classList.remove('green');
    } else {
      startPlaying();
      button.innerHTML = 'Stop';
      button.classList.add('green');
    }
  }
});

// ----------------------------------------------// 
// Inputs for BPM value

const minusBpmBtn = document.querySelector('.minus');
minusBpmBtn.addEventListener("click", function () {
  bpm = bpmInput.value;
  Tone.Transport.bpm.value = bpm;
});

const plusBpmBtn = document.querySelector('.plus');
plusBpmBtn.addEventListener("click", function () {
  bpm = bpmInput.value;
  Tone.Transport.bpm.value = bpm;
});

// ----------------------------------// 

function isNumberKey(evt) {
  var charCode = (evt.which) ? evt.which : evt.key
  if (charCode > 31 && (charCode < 48 || charCode > 57))
    return false;
  return true;
}

// ----------------------------------// 
// BPM STUFF

bpmInput.addEventListener("change", function () {
  let v = parseInt(this.value);
  if (v <= 20) {
    this.value = 20;
    bpm = 20;
    Tone.Transport.bpm.value = bpm;
  } else if (v >= 300) {
    this.value = 300;
    bpm = 300;
    Tone.Transport.bpm.value = bpm;
  } else {
    bpm = this.value;
    Tone.Transport.bpm.value = bpm;
  }
});

// ----------------------------------// 
// Longpress bpm

let timer;
let wait;
const tempo = 60;

function mouseDown(id) {

  if (bpm <= 20 || bpm >= 300) { return }
  wait = setTimeout(function () {
    timer = setInterval(function () {
      if (id === 'min') {
        bpm = --bpmInput.value;
      } else {
        bpm = ++bpmInput.value;
      }
      if (bpm === 20 || bpm === 300) mouseUp();
      bpmInput.value = bpm;
      Tone.Transport.bpm.value = bpm;
    }, tempo);
  }, 300);
}

const mouseUp = () => {
  clearInterval(wait);
  clearInterval(timer);
};

function addgreenPlay() {
  const button = document.getElementById('playBtn');
  if (initialized && !isPlaying) {
    button.innerHTML = 'Stop';
    button.classList.add('green');
  }
}

function sanitizeString(str) {
  str = str.replace(/[^a-z0-9?????????????? \.,_-]/gim, "");
  return str.trim();
}

// ----------------------------------------------// 
// Create short URL

const copyButton = document.getElementById("urlCopyButton");
copyButton.addEventListener('click', function () {
  let generatedData = createUserPresetData();
  if (!generatedData) {
    copyButton.innerHTML = `You must make a sequence before sharing it!`;
  } else {
    copyButton.classList.add('green');
    copyButton.innerHTML = `Copied to clipboard!`;
    setTimeout(function () {
      copyButton.classList.remove('green');
      copyButton.innerHTML = `Generate preset link & copy!`;
    }, 5000);
    let getUrl = window.location.origin + '/?d=' + generatedData;
    let shortIOresponse = createShortIO(getUrl);
    navigator.clipboard.writeText(shortIOresponse);
  }
});


window.addEventListener('load', function () {
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });

  if (params.d) { userPresetIsLoaded = true; }

  createSynths();
  createTable(rows, steps);
  handlePlay();
  loadUserPresetData();
  activeKit(uPreKit);
  getShortIOBulk();
});