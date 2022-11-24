function updateSampleNames(id) {
    getSampleNames = document.getElementById('SN_' + id);
    if (id === 8) {
        sampleN = "Monosynth";
    } else {
        sampleN = sampleNames[id];
        sampleN = sampleN.replace('.wav', '');
        sampleN = sampleN.replace(/_/g, '&nbsp;');
    }
    getSampleNames.innerHTML = sampleN;
}