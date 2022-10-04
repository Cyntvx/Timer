class Timer{
  constructor (durationInput, startButton, pauseButton, callbacks){
     this.durationInput = durationInput
     this.startButton = startButton
     this.pauseButton = pauseButton
    if(callbacks){
      this.onStart = callbacks.onStart
      this.onTick = callbacks.onTick
      this.onComplete = callbacks.onComplete
    }
    


     this.startButton.addEventListener('click', this.start)
     this.pauseButton.addEventListener('click', this.pause)

  }

  start = () => {
    if(this.onStart){
      this.onStart(this.time)
    }
    this.tick();
    this.interval = setInterval(this.tick, 50)
  };      

  pause = () => {
    clearInterval(this.interval)
  };

  tick = () => {
    if(this.time <= 0){
      this.pause(); 
      if(this.onComplete){
        this.onComplete()
      }
    }
    else{
      
      // const timeRemaining = this.time
      //  this.time = timeRemaining -1
  
      //  OR 
  
       this.time= this.time - .05
       if(this.onTick){
        this.onTick(this.time)
       }
     }

  }

  get time(){
   return   parseFloat(this.durationInput.value )
  }
  set time(val){
      this.durationInput.value = val.toFixed(2)
  }
}