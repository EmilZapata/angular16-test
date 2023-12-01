import { Component } from '@angular/core';
import { RandomService } from 'src/app/services/random.service';

@Component({
  selector: 'my-child',
  template: `
    <div class="box">
      <p>ChildComponent => {{ randomNo }}</p>

      <my-grandChild></my-grandChild>
    </div>
  `,
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  randomNo;
  constructor(private randomService: RandomService) {
    this.randomNo = randomService.RandomNo;
  }
}
