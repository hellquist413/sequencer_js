// ----------------------------------------------// 
// Handle preset link updates

function createUserPresetData() {

    if(!initialized) { return; }

    let synth3Vol = Math.round(synth3.volume.value);

    let preset_JSON_Object =
    {
        "rows": rows,
        "steps": steps,
        "stepsData": stepsData,
        "swingValueDef": swingValueDef,
        "swingSubDiv": swingSubDiv,
        "bpm": bpm,
        "currentKitName": currentKitName,
        "vol1": sampler.volume.value,
        "vol2": sampler2.volume.value,
        "vol3": sampler3.volume.value,
        "vol4": sampler4.volume.value,
        "vol5": sampler5.volume.value,
        "vol6": sampler6.volume.value,
        "vol7": sampler7.volume.value,
        "vol8": sampler8.volume.value,
        "vol9": synth3Vol,
        "synthKnobVol": synth3Vol,
        "synthKnob1": synthKnob1,
        "synthKnob2": synthKnob2,
        "synthKnob3": synthKnob3,
        "synthKnob4": synthKnob4,
        "synthKnob5": synthKnob5,
        "synthKnob6": synthKnob6,
        "synthKnob7": synthKnob7,
        "synthKnob8": synthKnob8
    };

    // convert to JSON
    preset_JSON_Object = JSON.stringify(preset_JSON_Object);
    // Base64 ASCII string
    dataToEncode = btoa(preset_JSON_Object);
    // Encode URI
    dataToEncode = encodeURIComponent(dataToEncode);
    presetData = dataToEncode;

    // console.log(atob(dataToEncode));
    // window.history.replaceState("", "", '?d=' + dataToCompress);
    return presetData;
}

function loadUserPresetData() {

    if (lastId == "" && !initialized) {

        // Search URL
        const params = new Proxy(new URLSearchParams(window.location.search), {
            get: (searchParams, prop) => searchParams.get(prop),
        });

        // Get parameter d= from URL & decode to JS Object
        encodedData = params.d;
        if(!encodedData) { return; }
        encodedData = decodeURIComponent(encodedData);
        decodedData = atob(encodedData);
        decodedData = JSON.parse(decodedData);
        
        // Setup data
        rows = decodedData.rows;
        steps = decodedData.steps;
        stepsData = decodedData.stepsData;
        swingValueDef = decodedData.swingValueDef;
        swingSubDiv = decodedData.swingSubDiv;
        bpm = decodedData.bpm;
        currentKitName = decodedData.currentKitName;
        
        vol1 = decodedData.vol1;
        vol2 = decodedData.vol2;
        vol3 = decodedData.vol3;
        vol4 = decodedData.vol4;
        vol5 = decodedData.vol5;
        vol6 = decodedData.vol6;
        vol7 = decodedData.vol7;
        vol8 = decodedData.vol8;
        vol9 = decodedData.vol9;

        synthKnobVol = decodedData.synthKnobVol;
        synthKnob1 = decodedData.synthKnob1;
        synthKnob2 = decodedData.synthKnob2;
        synthKnob3 = decodedData.synthKnob3;
        synthKnob4 = decodedData.synthKnob4;
        synthKnob5 = decodedData.synthKnob5;
        synthKnob6 = decodedData.synthKnob6;
        synthKnob7 = decodedData.synthKnob7;
        synthKnob8 = decodedData.synthKnob8;
     
        // Update values in DOM
        let userPresetIsLoaded = true;
        Tone.Draw.cancel();
        swingSub(swingSubDiv);
        createTable(rows, steps);
        selectKit(uPreKit);
        bpmInput.value = bpm;
        let swingValue = document.getElementById("swingSlider").value = swingValueDef;

        // rowDiv = document.getElementById(id);
        const getAllKitsList = document.querySelectorAll('.kitc');
    
        for (let j = 0; j < getAllKitsList.length; j++) {
            getAllKitsList[j].classList.remove('green');
        }
    
        newActiveKit = document.getElementById('kit' + uPreKit);
        newActiveKit.classList.add('green');
    
        let getKitName = kitNames(uPreKit)
        setPresetKit = document.getElementById('displayKit');
        setPresetKit.innerHTML = 'Kit: ' + getKitName;
    
        // activateHeader.classList.add("presetBox-active");
    
        updateKnobVol(synthKnobVol);
        updateKnob1(synthKnob1);
        updateKnob2(synthKnob2);
        updateKnob3(synthKnob3);
        updateKnob4(synthKnob4);
        updateKnob5(synthKnob5);
        updateKnob6(synthKnob6);
        updateKnob7(synthKnob7);
        updateKnob8(synthKnob8);

        updateVolumeSlider(0, decodedData.vol1);
        updateVolumeSlider(1, decodedData.vol2);
        updateVolumeSlider(2, decodedData.vol3);
        updateVolumeSlider(3, decodedData.vol4);
        updateVolumeSlider(4, decodedData.vol5);
        updateVolumeSlider(5, decodedData.vol6);
        updateVolumeSlider(6, decodedData.vol7);
        updateVolumeSlider(7, decodedData.vol8);
        updateVolumeSlider(8, decodedData.vol9);

    } else {
        return false;
    }
    
    return true;
}