function updateSampleNames(id) {
    getSampleNames = document.getElementById('SN_' + id);
    if (id === 8) {
        sampleN = "Monosynth";
    } else {
        sampleN = sampleNames[id];
        sampleN = sampleN.replace('.wav', '');
        sampleN = sampleN.replace('.mp3', '');
        sampleN = sampleN.replace('.aif', '');
        sampleN = sampleN.replace(/_/g, ' ');
    }
    getSampleNames.innerHTML = sampleN;
}