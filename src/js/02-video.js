SECONDS_KEY = 'videoplayer-current-time';

import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

onPageLoading();

player.on('timeupdate', throttle(rememberSecconds, 1000));

function rememberSecconds(data) {
  const time = data.seconds;
  localStorage.setItem(SECONDS_KEY, data.seconds);
  console.log(time);
}

function onPageLoading() {
  const savedTime = localStorage.getItem(SECONDS_KEY);
  if (savedTime) {
    player.setCurrentTime(savedTime);
  }
}
