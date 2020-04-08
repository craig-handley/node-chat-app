var expect = require('expect');
var { isRealString } = require('./validation');

describe('isRealString', () => {
    it('should reject non string', () => {
        var str = 1;

        var result = isRealString(str);

        expect(result).toBe(false);
    });

    it('should reject strings with only spaces', () => {
        var str = '   ';

        var result = isRealString(str);

        expect(result).toBe(false);
    });

    it('should allow strings with non space values', () => {
        var str = '  this is ok ';

        var result = isRealString(str);

        expect(result).toBe(true);
    });
});
