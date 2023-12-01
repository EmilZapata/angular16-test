import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ControlContainer, FormsModule, NgForm } from '@angular/forms';
import { AddressFormModel } from 'src/app/form-models/address.form-model';
import { formViewProvider } from 'src/app/template-driven-forms/form-view-provider';

export const templateDrivenFormsViewProviders = [
  { provide: ControlContainer, useExisting: NgForm },
  formViewProvider // very important if we want nested components with ngModelGroup
];

@Component({
  selector: 'app-address-form',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss'],
  viewProviders: [...templateDrivenFormsViewProviders]
})
export class AddressFromComponent {
  @Input() address?: AddressFormModel | null;
}
