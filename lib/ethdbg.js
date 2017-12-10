const EventManager = require('../../lib/event_manager').ethdbgEv;
const {waitForEventIndefinitely} = require('./../../lib/utils');
const {events} = require('./../../lib/types');


async function stepHookEvents(eventObj) {

  EventManager.emit(events.VMStep, eventObj);
  await waitForEventIndefinitely(EventManager,
    events.debugContinueExec,
    'Could not wait for event in VM')
}

module.exports = {
  stepHookEvents
}
