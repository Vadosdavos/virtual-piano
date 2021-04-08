const pianoKeys = document.querySelectorAll('.piano-key');
const piano = document.querySelector('.piano');
const buttons = document.querySelectorAll('.btn');
const buttonsContainer = document.querySelector('.btn-container');

function playAudio(src) {
  const audio = new Audio();
  audio.src = src;
  audio.currentTime = 0;
  audio.play();
}

piano.addEventListener('mousedown', function (evt) {
  if (evt.target.classList.contains('piano-key')) {
    let note = evt.target.dataset.note;
    let src = `assets/audio/${note}.mp3`;
    playAudio(src);
    pianoKeys.forEach((el) => {
      if (el.classList.contains('piano-key-active')) {
        el.classList.remove('piano-key-active');
      }
    });
    evt.target.classList.add('piano-key-active');

    piano.addEventListener('mouseup', function (evt) {
      pianoKeys.forEach((el) => {
        if (el.classList.contains('piano-key-active')) {
          el.classList.remove('piano-key-active');
        }
      });
    });
  }
});
/* piano.addEventListener('mouseover', function (evt) {
    if (evt.target.classList.contains('piano-key')) {
      let note = evt.target.dataset.note;
      let src = `assets/audio/${note}.mp3`;
      playAudio(src);
    }
  }); */

window.addEventListener('keydown', function (evt) {
  if (evt.repeat) {
    return;
  }
  let letter = evt.code.charAt(evt.code.length - 1);
  for (let pianoKey of pianoKeys) {
    if (letter === pianoKey.dataset.letter) {
      let note = pianoKey.dataset.note;
      let src = `assets/audio/${note}.mp3`;
      playAudio(src);
      pianoKey.classList.add('piano-key-active');
    }
  }
  window.addEventListener('keyup', function (evt) {
    pianoKeys.forEach((el) => {
      if (el.classList.contains('piano-key-active')) {
        el.classList.remove('piano-key-active');
      }
    });
  });
});

buttonsContainer.addEventListener('click', function (evt) {
  if (evt.target.classList.contains('btn')) {
    buttons.forEach((bt) => {
      if (bt.classList.contains('btn-active')) {
        bt.classList.remove('btn-active');
      }
    });
    evt.target.classList.add('btn-active');
    if (evt.target.classList.contains('btn-letters')) {
      pianoKeys.forEach((el) => {
        el.classList.add('piano-key-letter');
      });
    } else {
      pianoKeys.forEach((el) => {
        el.classList.remove('piano-key-letter');
      });
    }
  }
});
