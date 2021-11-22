const sound = {
  audio: null,
  playSound(path, volume) {
    const audio = new Audio(path);
    audio.volume = volume;
    if (this.audio && audio.onended) {
      this.audio.pause();
    }
    const promise = audio.play();
    this.audio = audio;
    promise.catch((error) => {
      // eslint-disable-next-line no-console
      console.log(error);
    });
  },
};

export default sound;
