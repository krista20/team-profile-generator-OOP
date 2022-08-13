// const { test } = require('picomatch');
const { expect } = require('expect');
const Engineer = require('../lib/Engineer.js');

const engineer = new Engineer('Alec', '2', 'alec@fakemail.com', 'alec20');

test('test for an engineer employee object', () => {
    expect(engineer.name).toBe('Alec');
    expect(engineer.id).toBe('2');
    expect(engineer.email).toBe('alec@fakemail.com');
  
});


test('test for getGithub()', () => {
    expect(engineer.getGithub()).toBe('alec20');
    console.log(engineer.getGithub());
});

test('test fot getRole()', () => {
    expect(engineer.getRole()).toBe("Engineer");
    console.log(engineer.getRole());
});

