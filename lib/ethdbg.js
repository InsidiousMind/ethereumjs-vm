/**
 *
 */
function stepHookEvents(eventObj) {
  console.log('freezing execution inside stepHookEvents')
  console.log(typeof this.__ethdbg)
    process.nextTick(() => {
      // process.kill(process.pid, 'SIGSTOP')
      console.log('Process would halt here')
      console.log('emit events and awaits here')
    });
}

module.exports = {
  stepHookEvents
}
