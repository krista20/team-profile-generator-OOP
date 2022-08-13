// const { test } = require('picomatch');
const { expect } = require('expect');
const Manager = require('../lib/Manager.js');
const Employee = require('../lib/Employee.js');

const manager = new Manager('Sara', '4', 'sara@fakemail.com', '3D');

test('test for an Manager employee object', () => {
    expect(manager.name).toBe('Sara');
    expect(manager.id).toBe('4');
    expect(manager.email).toBe('sara@fakemail.com');
  
});


test('test for getOfficeNumber()', () => {
    expect(manager.getOfficeNumber()).toBe('3D');
    console.log(manager.getOfficeNumber());
});

test('test fot getRole()', () => {
    expect(manager.getRole()).toBe("Manager");
    console.log(manager.getRole());
});

