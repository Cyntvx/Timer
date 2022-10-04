
const startButton = document.querySelector('#start')
const pauseButton = document.querySelector('#pause')
const durationInput = document.querySelector('#duration')
const circle = document.querySelector('circle')

const perimeter = circle.getAttribute('r') * 2 * Math.PI
circle.setAttribute('stroke-dasharray', perimeter)


let duration
const timer = new Timer (durationInput, startButton, pauseButton, {onStart(totalDuration){
  duration = totalDuration
}, onTick(time){
  circle.setAttribute('stroke-dashoffset', perimeter * time / duration - perimeter)
  // currentOffset = currentOffset - 1
}, onComplete(){
  console.log('We just completed')
}});
