//get elements
/* '►' : '❚ ❚' */

const video = document.querySelector('.viewer')
const toggleBtn = document.querySelector('.toggle')
const ranges = document.querySelectorAll('.player__slider')
const skipBtns = document.querySelectorAll('.player__button')
const progress = document.querySelector('.progress')
const progressBar = document.querySelector('.progress__filled')
//build functions
const handleToggle = () => {
  video.paused ? video.play() : video.pause()

  toggleBtn.innerHTML = video.paused ? '►' : '❚ ❚'
}
const skip = (e) => {
  video.currentTime += parseFloat(e.target.dataset.skip)
}
const handleRange = (e) => {
  console.log(e.target.value);
  console.log(e.target.name);
  video[e.target.name] = e.target.value
}
const handleProgress = () => {
  const percent = (video.currentTime / video.duration) * 100
  progressBar.style.flexBasis = `${percent}%`
}
const scrub = (e) => {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration
  video.currentTime = scrubTime
}
//hook up event listeners
toggleBtn.addEventListener('click' , handleToggle);
video.addEventListener('click' , handleToggle)
video.addEventListener('progress' , handleProgress)
skipBtns.forEach(skipBtn => skipBtn.addEventListener('click' , skip))
ranges.forEach(range => range.addEventListener('change' , handleRange))
let mousedown = false;
progress.addEventListener('click' , scrub)
progress.addEventListener('mousemove' , (e) => {
 mousedown && scrub(e)
})
progress.addEventListener('mousedown' , () => mousedown = true)
progress.addEventListener('mouseup' , () => mousedown = false)

