var moment = require('moment');

var generateMessage = (from, text) => {
    return {
        from,
        text,
        createdAt: moment().valueOf()
    };
};

var generateLocationMessage = (from, laitude, longitude) => {
    return {
        from,
        url: `https://www.google.com/maps?q=${laitude},${longitude}`,
        createdAt: moment().valueOf()
    };
};


module.exports = {generateMessage, generateLocationMessage};