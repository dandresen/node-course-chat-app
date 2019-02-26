var generateMessage = (from, text) => {
    return {
        from,
        text,
        createdAt: new Date().getTime()
    };
};

var generateLocationMessage = (from, laitude, longitude) => {
    return {
        from,
        url: `https://www.google.com/maps?q=${laitude},${longitude}`,
        createdAt: new Date().getTime()
    };
};


module.exports = {generateMessage, generateLocationMessage};