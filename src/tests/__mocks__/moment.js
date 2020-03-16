const moment = require.requireActual('moment')      // to require the original module not the mocked one

export default (timestamp = 0) => {
    return moment(timestamp);
}