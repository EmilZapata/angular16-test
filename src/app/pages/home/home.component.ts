import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserInfoFormModel } from 'src/app/form-models/user-info.form-model';
import { FormDirective } from 'src/app/template-driven-forms/form.directive';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [FormsModule, JsonPipe, FormDirective]
})
export class HomeComponent {
  protected readonly userForm = signal<UserInfoFormModel>({});
}

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css'],
//   standalone: true,
//   imports: [FormsModule, JsonPipe, FormDirective]
// })
// export class HomeComponent implements AfterViewInit {
//   @ViewChild('form') ngForm: NgForm | undefined
//   protected readonly formValue = signal<PurchaseFormModel>({
//   })

//   ngAfterViewInit(): void {
//     this.ngForm!.form.valueChanges.subscribe(v => this.formValue.set(v))
//   }
// }
