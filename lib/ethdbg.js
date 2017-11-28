/**
 *
 */
function stepHookEvents(eventObj) {
  console.log('freezing execution inside stepHookEvents')
    process.nextTick(() => {
      // process.kill(process.pid, 'SIGSTOP')
    });
}

module.exports = {
  stepHookEvents
}
