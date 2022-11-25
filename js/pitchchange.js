function pitchChange(instId) {
    let getValue = document.getElementById("pitchKnob_" + instId).value;
    switch (instId) {
        case 0:
            notes[0] = getValue;
            break;
        case 1:
            notes[1] = getValue;
            break;
        case 2:
            notes[2] = getValue;
            break;
        case 3:
            notes[3] = getValue;
            break;
        case 4:
            notes[4] = getValue;
            break;
        case 5:
            notes[5] = getValue;
            break;
        case 6:
            notes[6] = getValue;
            break;
        case 7:
            notes[7] = getValue;
            break;
        case 8:
            notes[8] = getValue;
            break;
    }
}


function updatePitchKnobs(knobId, pitchValue) {
    let getKnob = document.getElementById("pitchKnob_" + knobId).value;
    switch (knobId) {
        case 0:
            notes[0] = pitchValue;
            getKnob.value = pitchValue;
            break;
        case 1:
            notes[1] = pitchValue;
            getKnob.value = pitchValue;
            break;
        case 2:
            notes[2] = pitchValue;
            getKnob.value = pitchValue;
            break;
        case 3:
            notes[3] = pitchValue;
            getKnob.value = pitchValue;
            break;
        case 4:
            notes[4] = pitchValue;
            getKnob.value = pitchValue;
            break;
        case 5:
            notes[5] = pitchValue;
            getKnob.value = pitchValue;
            break;
        case 6:
            notes[6] = pitchValue;
            getKnob.value = pitchValue;
            break;
        case 7:
            notes[7] = pitchValue;
            getKnob.value = pitchValue;
            break;
        case 8:
            notes[8] = pitchValue;
            getKnob.value = pitchValue;
            break;
    }

}