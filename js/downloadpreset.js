function downloadPreset() {
    let date = new Date();
    let presetFile = document.createElement('a');

    presetFile.href = window.URL.createObjectURL(new Blob([createUserPresetData()], {type: 'text/csv'}));
    presetFile.download = "sqr" + date.getTime();

    document.body.appendChild(presetFile);
    presetFile.click();

    console.log("Download file");
}