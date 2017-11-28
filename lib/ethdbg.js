/**
 *
 */
function stepHookEvents(eventObj) {
    process.nextTick(() => {
      // process.kill(process.pid, 'SIGSTOP')
    })
}

module.exports = {
  stepHookEvents
}
