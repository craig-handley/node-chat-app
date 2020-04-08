var expect = require('expect');
var { generateMessage, generateLocationMessage } = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var from = 'Craig';
        var text = 'Some text';

        var message = generateMessage(from, text);

        expect(message.createdAt).toBeGreaterThanOrEqual(0);
        expect(message.from).toBe(from);
        expect(message.text).toBe(text);
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var from = 'Craig';
        var lat = 15;
        var long = 19;
        var url = 'https://www.google.com/maps?q=15,19';

        var message = generateLocationMessage(from, lat, long);

        expect(message.createdAt).toBeGreaterThanOrEqual(0);
        expect(message.from).toBe(from);
        expect(message.url).toBe(url);
    });
});