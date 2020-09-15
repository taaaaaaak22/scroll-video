const video = document.getElementById('video')
const totalSec = video.duration
document.getElementById('wrapper').style.height = Math.floor(totalSec) * 500 + 'px'

function scrollVideo() {
  video.currentTime = window.pageYOffset / 500
  window.requestAnimationFrame(scrollVideo)
}
window.requestAnimationFrame(scrollVideo)
