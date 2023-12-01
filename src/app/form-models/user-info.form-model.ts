export type UserInfoFormModel = Partial<{
  firstName: string;
  lastName: string;
}>;

export type UserForm = Partial<{
  name: string;
  lastName: string;
  address: Partial<{
    departamento: string;
    distrito: string;
  }>;
}>;
