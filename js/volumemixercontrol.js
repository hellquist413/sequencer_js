function updateVolumeSlider(sliderId, volValue) {
    let volSlider = document.getElementById("volSlider_" + sliderId);

    switch (sliderId) {
        case 0:
            sampler.volume.value = vol1;
            volSlider.value = volValue;
            break;
        case 1:
            sampler2.volume.value = vol2;
            volSlider.value = volValue;
            break;
        case 2:
            sampler3.volume.value = vol3;
            volSlider.value = volValue;
            break;
        case 3:
            sampler4.volume.value = vol4;
            volSlider.value = volValue;
            break;
        case 4:
            sampler5.volume.value = vol5;
            volSlider.value = volValue;
            break;
        case 5:
            sampler6.volume.value = vol6;
            volSlider.value = volValue;
            break;
        case 6:
            sampler7.volume.value = vol7;
            volSlider.value = volValue;
            break;
        case 7:
            sampler8.volume.value = vol8;
            volSlider.value = volValue;
            break;
        case 8:
            synth3.volume.value = vol9;
            volSlider.value = volValue;
            break;
    }

}
