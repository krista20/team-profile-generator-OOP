const { expect } = require('expect');
const Employee = require('../lib/Employee.js');
const employee = new Employee('Jared', '1', 'jared@fakemail.com');

test ('creates a employee object', () => {
    
    expect(employee.name).toBe('Jared');
    expect(employee.id).toBe('1');
    expect(employee.email).toBe('jared@fakemail.com');
});



