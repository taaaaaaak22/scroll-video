const video = document.getElementById('video')
video.addEventListener('loadeddata', () => {
  const totalSec = video.duration
  document.getElementById('wrapper').style.height = Math.floor(totalSec) * 500 + 'px'
  window.requestAnimationFrame(scrollVideo)
})

function scrollVideo() {
  video.currentTime = window.pageYOffset / 500
  window.requestAnimationFrame(scrollVideo)
}
