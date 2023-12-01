import { CommonModule, JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserForm } from 'src/app/form-models/user-info.form-model';
import { FormDirective } from 'src/app/template-driven-forms/form.directive';
import { userFormValidation } from 'src/app/validations/user-form.validation';

@Component({
  selector: 'app-contact2',
  standalone: true,
  imports: [CommonModule, FormsModule, JsonPipe, FormDirective],
  templateUrl: './contact2.component.html',
  styleUrls: ['./contact2.component.css']
})
export class Contact2Component {
  protected readonly formValue = signal<UserForm>({});
  protected readonly suite = userFormValidation;
}
