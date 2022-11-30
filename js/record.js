function record() {

    if (initialized) {
        if(isPlaying === true) {
            return;
        }
        isRecording = true;
        stopPlaying();
        repeat.stop();
        Tone.Transport.start();
        recordSeq = recordNow();
        recordSeq.start();
    } else {
        return;
    }
}