const EventEmitter = require('../../lib/event_manager');

class Ethdbg {
  constructor() {
    let event = new EventEmitter();

    event.on('hitBreakpoint', () => {});
    event.on('stepForward', () => {});
    event.on('stepBackward', () => {});
    event.on('getLocal', (name) => {
      /**
       * Request local variables. This should probably return *all* of them
       * then just let us get the ones we want clientside.
       */
    });
  }

  stepHookEvents(eventObj) {
    console.log('freezing execution inside stepHookEvents');
    console.log(typeof this.__ethdbg);
    process.nextTick(() => {
      // process.kill(process.pid, 'SIGSTOP')
      console.log('Process would halt here');
      console.log('emit events and awaits here');
    });
  }
}

module.exports = {
  Ethdbg,
};
