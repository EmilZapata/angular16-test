import { JsonPipe, NgFor, NgIf } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PurchaseFormModelV2 } from 'src/app/form-models/purchase.form-model';
import { AddressFromComponent } from 'src/app/pages/about/components/address-form/address-form.components';
import { FormDirective } from 'src/app/template-driven-forms/form.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FormsModule, FormDirective, JsonPipe, NgIf, NgFor, AddressFromComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  protected readonly formValue = signal<PurchaseFormModelV2>({});
  protected readonly viewModel = computed(() => ({
    formValue: this.formValue(),
    showOtherGender: this.formValue().gender === 'other',
    showShippingAddress: this.formValue().addresses?.shippingAddressDifferentFromBillingAddress,
    emergencyContactDisabled: this.formValue().age === 0 || (this.formValue().age ?? 0) > 17
  }));

  protected get vm() {
    return this.viewModel();
  }

  protected submit(): void {
    console.log(this.formValue());
  }
}
