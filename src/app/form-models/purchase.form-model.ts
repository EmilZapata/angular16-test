import { AddressFormModel } from "src/app/form-models/address.form-model";

export type PurchaseFormModelV1 = Partial<{
  firstName: string;
  lastName: string;
}>;

export type PurchaseFormModelV2 = Partial<{
  firstName: string;
  lastName: string;
  gender: 'male' | 'female' | 'other';
  genderOther?: string;
  age: number;
  emergencyContactNumber: string;
  addresses: Partial<{
    billingAddress: AddressFormModel;
    shippingAddress: AddressFormModel;
    shippingAddressDifferentFromBillingAddress: boolean;
  }>;
}>;
