var expect = require('expect');

const { Users } = require('./users');

describe('Users', () => {
    var users;

    beforeEach(() => {
        users = new Users();

        users.users = [{
            id: '1',
            name: 'Craig',
            room: 'Node'
        }, {
            id: '2',
            name: 'Matt',
            room: 'React'
        }, {
            id: '3',
            name: 'Jane',
            room: 'Node'
        }];
    });

    it('should add a new user', () => {
        var users = new Users();

        var user = {
            id: '4',
            name: 'Jon',
            room: 'blah blah'
        };

        var result = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should return names for Node course', () => {
        var result = users.getUserList('Node');

        expect(result).toEqual(['Craig', 'Jane']);
    });

    it('should return names for React course', () => {
        var result = users.getUserList('React');

        expect(result).toEqual(['Matt']);
    });

    it('should remove a user', () => {
        var user = users.removeUser('1');

        expect(user.id).toEqual('1');
        expect(users.users.length).toEqual(2);
    });

    it('should not remove a user', () => {
        var user = users.removeUser('123');

        expect(user).toBeUndefined();
        expect(users.users.length).toEqual(3);
    });

    it('should find user', () => {
        var user = users.getUser('1');

        expect(user.id).toEqual('1');
    });

    it('should not find user', () => {
        var user = users.getUser('123');

        expect(user).toBeUndefined();
    });

});