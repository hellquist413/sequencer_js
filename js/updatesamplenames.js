function updateSampleNames(id) {

    getSampleNames = document.getElementById('SN_' + id);
    console.log(getSampleNames);

    if (id === 8) { sampleN = "Monosynth"; } else { sampleN = sampleNames[id]; }
    getSampleNames.innerHTML = sampleN;
}