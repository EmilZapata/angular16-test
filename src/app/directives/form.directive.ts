import { Directive, Output, inject } from '@angular/core';
import { NgForm } from '@angular/forms';

@Directive({
  standalone: true,
  selector: 'form'
})
export class FormDirective {
  ngForm = inject(NgForm, { self: true });

  @Output() formValueChange = this.ngForm.form.valueChanges;
}
