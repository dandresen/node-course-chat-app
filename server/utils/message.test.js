var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate a message', () => {
        var from = 'Me';
        var text = 'This is';

        var message = generateMessage(from, text);

        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({from,text});

    });
});

describe('generageLocationMessage', () => {
    it('should generate correct location ', () =>{
        var from = 'Angie';
        var lat = 30;
        var long = 98;
        var url = 'https://www.google.com/maps?q=30,98';
        var message = generateLocationMessage(from, lat, long);

        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({from, url});
    });
});