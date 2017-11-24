module.exports = {

  stepHookEvents: (eventObj) => {
    console.log('freezing execution inside stepHookEvents')
    console.log(this.listeners('thisLine').length)
    console.log(this.listeners('nextLine').length)
    console.log(typeof this.__ethdbg)
    if (
    typeof this.__ethdbg !== 'undefined' &&
    this.listeners('thisLine').length === 0 &&
    this.listeners('nextLine').length === 0) {
      this.__runNextLine = false
      this.__ethdbg.on('thisLine', () => {

      })
      this.__ethdbg.on('nextLine', () => {
        this.__runNextLine = true
      })
    }
    if (!this.__runNextLine) {
      process.nextTick(() => {
        // process.kill(process.pid, 'SIGSTOP')
        console.log('Process would halt here')
        console.log('emit events and awaits here')
      })
    }
    this.runNextLine = false
  }
}
