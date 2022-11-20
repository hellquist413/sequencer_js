function volumeChange(channelId) {
    let getValue = document.getElementById("volSlider_" + channelId).value;
    switch (channelId) {
        case 0:
            sampler.volume.value = getValue;
            vol1 = getValue;
            break;
        case 1:
            sampler2.volume.value = getValue;
            vol2 = getValue;
            break;
        case 2:
            sampler3.volume.value = getValue;
            vol3 = getValue;
            break;
        case 3:
            sampler4.volume.value = getValue;
            vol4 = getValue;
            break;
        case 4:
            sampler5.volume.value = getValue;
            vol5 = getValue;
            break;
        case 5:
            sampler6.volume.value = getValue;
            vol6 = getValue;
            break;
        case 6:
            sampler7.volume.value = getValue;
            vol7 = getValue;
            break;
        case 7:
            sampler8.volume.value = getValue;
            vol8 = getValue;
            break;
        case 8:
            synth3.volume.value = getValue;
            break;
    }
}