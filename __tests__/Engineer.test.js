const { test } = require('picomatch');
const Engineer = require('../lib/Engineer.js');
// const Employee = require('../lib/Employee.js');
const engineer = new Engineer('Alec', '2', 'alec@fakemail.com');

test('test for an engineer employee object', () => {
    expect(engineer.name).toBe('Alec');
    expect(engineer.id).toBe('2');
    expect(engineer.email).toBe('alec@fakemail.com');
    console.log(expect(engineer.email));
});

test('test for getGithub()', () => {
    expect(engineer.getGitHub()).toBe('ibalec');
    console.log(engineer.getGitHub());
});

test('test fot getRole()', () => {
    expect(engineer.getRole()).toBe("Employee");
    console.log(engineer.getRole());
});

