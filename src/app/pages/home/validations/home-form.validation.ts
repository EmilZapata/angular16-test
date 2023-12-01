import { create, enforce, test } from 'vest';

export const suite = create((data = {}) => {
  test('firstName', 'FirstName is required', () => {
    enforce(data.firstName).isNotBlank();
  });

  test('firstName', 'FirstName must be at least 3 characters long', () => {
    enforce(data.firstName).longerThan(2);
  });

  test('lastName', 'LastName is required', () => {
    enforce(data.lastName).isNotBlank();
  });

  test('lastName', 'LastName must be at least 3 characters long', () => {
    enforce(data.lastName).longerThan(2);
  });
});
