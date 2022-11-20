function volumeChange(channelId) {
    let getValue = document.getElementById("volSlider_" + channelId).value;
    switch (channelId) {
        case 0:
            sampler.volume.value = getValue;
            break;
        case 1:
            sampler2.volume.value = getValue;
            break;
        case 2:
            sampler3.volume.value = getValue;
            break;
        case 3:
            sampler4.volume.value = getValue;
            break;
        case 4:
            sampler5.volume.value = getValue;
            break;
        case 6:
            sampler6.volume.value = getValue;
            break;
        case 7:
            sampler7.volume.value = getValue;
            break;
        case 8:
            sampler8.volume.value = getValue;
            break;
    }
}