function randomizer() {
    userPresetIsPressed = true;
    randomizerIsPressed = true;


    // Random INT value
    function randomInt(min, max) {
        return Math.round(Math.random() * (max - min + 1)) + min;
    }
    function randomZeroOne() {
        return Math.round(Math.random() * Math.random());
    }

    // Even detune number
    function detuneValueMath() {
        let number = randomInt(-2400, 2400);
        // Even 1000s
        number = Math.round(number / 100) * 100;
        // Get remainder of division by 200
        remainder = (number % 200);
        if (remainder !== 0) {
            if (number > 2500) { number = number - remainder; }
            else { number = number + remainder; }
        }
        return number;
    }

    // Random Subdivision
    const subdivisions = ["4n", "4n.", "4t", "8n", "8n.", "8t", "16n", "16n.", "16t", "32n", "32n.", "32t"];
    let randomSubdivID = randomInt(0,10);
    swingSubDiv = subdivisions[randomSubdivID];

    // Random steps array
    stepsData = [];
    for (let i = 0; i < rows; i++) {
        arrayRows = [];
        for (let i = 0; i < steps; i++) {
            // Random 0 or 1
            let randOnZe = randomZeroOne()
            arrayRows.push(randOnZe);
        }
        stepsData.push(arrayRows);
    }

    // Random notes array
    notes = [];
    for (let i = 0; i < rows; i++) {
        notes[i] = randomInt(0, 126);
    }

    bpm = randomInt(20, 300);
    uPreKit = randomInt(1, 2).toString();

    //Synth Semitone
    synthKnob1 = detuneValueMath();
    synthKnob2 = randomInt(0, 999);
    synthKnob3 = randomInt(0, 99);
    synthKnob4 = randomInt(0, 99);
    synthKnob5 = randomInt(0, 99);
    synthKnob6 = randomInt(0, 99);
    synthKnob7 = randomInt(0, 99);
    synthKnob8 = randomInt(0, 99);
    swingValue = randomInt(0, 49);

    let synth3Vol = Math.round(synth3.volume.value);
    let preset_JSON_Object =
    {
        "rows": rows,
        "steps": steps,
        "notes": notes,
        "stepsData": stepsData,
        "swingValue": swingValue,
        "swingSubDiv": swingSubDiv,
        "bpm": bpm,
        "currentKitName": uPreKit,
        "vol1": sampler.volume.value,
        "vol2": sampler2.volume.value,
        "vol3": sampler3.volume.value,
        "vol4": sampler4.volume.value,
        "vol5": sampler5.volume.value,
        "vol6": sampler6.volume.value,
        "vol7": sampler7.volume.value,
        "vol8": sampler8.volume.value,
        "vol9": synth3Vol,
        "synthKnob1": synthKnob1,
        "synthKnob2": synthKnob2,
        "synthKnob3": synthKnob3,
        "synthKnob4": synthKnob4,
        "synthKnob5": synthKnob5,
        "synthKnob6": synthKnob6,
        "synthKnob7": synthKnob7,
        "synthKnob8": synthKnob8
    };

    // Convert to JSON
    preset_JSON_Object = JSON.stringify(preset_JSON_Object);
    // Base64 ASCII string
    dataToEncode = btoa(preset_JSON_Object);
    // Encode URI
    dataToEncode = encodeURIComponent(dataToEncode);
    presetData = dataToEncode;

    loadUserPresetData(presetData);
    startPlaying();

    const playBtn = document.getElementById('playBtn');
    playBtn.classList.add('green');
    playBtn.innerHTML = `Stop`;

    randomizerIsPressed = false;
}