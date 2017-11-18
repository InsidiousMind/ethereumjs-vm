module.exports = {

  stepHookEvents: async (eventObj) => {
    console.log('freezing execution inside stepHookEvents')
    // console.log(this.listeners('thisLine').length)
    // console.log(this.listeners('nextLine').length)
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
      process.kill(process.pid, 'SIGSTOP')
    }
    this.runNextLine = false
  }
}
