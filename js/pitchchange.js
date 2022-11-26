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
    let getKnob = document.getElementById("pitchKnob_" + knobId);
    switch (knobId) {
        case 0:
            getKnob.value = pitchValue;
            notes[0] = pitchValue;
            break;
        case 1:
            getKnob.value = pitchValue;
            notes[1] = pitchValue;
            break;
        case 2:
            getKnob.value = pitchValue;
            notes[2] = pitchValue;
            break;
        case 3:
            getKnob.value = pitchValue;
            notes[3] = pitchValue;
            break;
        case 4:
            getKnob.value = pitchValue;
            notes[4] = pitchValue;
            break;
        case 5:
            getKnob.value = pitchValue;
            notes[5] = pitchValue;
            break;
        case 6:
            getKnob.value = pitchValue;
            notes[6] = pitchValue;
            break;
        case 7:
            getKnob.value = pitchValue;
            notes[7] = pitchValue;
            break;
        case 8:
            getKnob.value = pitchValue;
            notes[8] = pitchValue;
            break;
    }

}