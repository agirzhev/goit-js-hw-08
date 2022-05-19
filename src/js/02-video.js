import Vimeo from '@vimeo/player';
import lodash from 'lodash.throttle'

//console.log(lodash)
const iframe = document.querySelector('iframe');


const player = new Vimeo(iframe);


const throttled = function(time) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(time.seconds))
}

player.on('timeupdate', lodash(throttled, 1000));

 
const saveTime = localStorage.getItem('videoplayer-current-time');


player.setCurrentTime(saveTime).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});