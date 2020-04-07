var expect = require('expect');
var { generateMessage } = require('./message');

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