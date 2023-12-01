import { UserForm } from 'src/app/form-models/user-info.form-model';
import { create, enforce, only, test } from 'vest';

export const userFormValidation = create((model: UserForm, field: string) => {
  only(field);

  test('name', 'Name is required', () => {
    enforce(model.name).isNotBlank();
  });
  test('lastName', 'LastName is required', () => {
    enforce(model.lastName).isNotBlank();
  });
  test('address?.departamento', 'Departamento is required', () => {
    enforce(model.address?.departamento).isNotBlank();
  });
  test('address?.distrito', 'Distrito is required', () => {
    enforce(model.address?.distrito).isNotBlank();
  });
});
