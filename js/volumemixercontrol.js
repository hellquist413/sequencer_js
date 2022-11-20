function updateVolumeSlider(sliderId, value) {
    let volSlider = document.getElementById("volSlider_" + sliderId);
    switch (sliderId) {
        case 0:
            sampler.volume.value = vol1;
            if(value !== null) { volSlider.value = value; } else { volSlider.value = vol1; }
            break;
        case 1:
            sampler2.volume.value = vol2;
            if(value) { volSlider.value = value; } else { volSlider.value = vol2; }
            break;
        case 2:
            sampler3.volume.value = vol3;
            if(value) { volSlider.value = value; } else { volSlider.value = vol3; }
            break;
        case 3:
            sampler4.volume.value = value;
            if(value) { volSlider.value = value; } else { volSlider.value = vol4; }
            break;
        case 4:
            sampler5.volume.value = value;
            if(value) { volSlider.value = value; } else { volSlider.value = vol5; }
            break;
        case 5:
            sampler6.volume.value = value;
            if(value) { volSlider.value = value; } else { volSlider.value = vol6; }
            break;
        case 6:
            sampler7.volume.value = value;
            if(value) { volSlider.value = value; } else { volSlider.value = vol7; }
            break;
        case 7:
            sampler8.volume.value = value;
            if(value) { volSlider.value = value; } else { volSlider.value = vol8; }
            break;
        case 8:
            synth3.volume.value = value;
            if(value) { volSlider.value = value; } else { volSlider.value = vol9; }
            break;
    }

}
