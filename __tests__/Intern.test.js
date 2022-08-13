// const { test } = require('picomatch');
const { expect } = require('expect');
const Intern = require('../lib/Intern.js');
const Employee = require('../lib/Employee.js');

const intern = new Intern('John', '3', 'john@fakemail.com', '2University');

test('test for an intern employee object', () => {
    expect(intern.name).toBe('John');
    expect(intern.id).toBe('3');
    expect(intern.email).toBe('john@fakemail.com');
  
});


test('test for getSchool()', () => {
    expect(intern.getSchool()).toBe('2University');
    console.log(intern.getSchool());
});

test('test fot getRole()', () => {
    expect(intern.getRole()).toBe("Intern");
    console.log(intern.getRole());
});

