import { Component, Optional, Self } from '@angular/core';
import { RandomService } from 'src/app/services/random.service';

@Component({
  selector: 'my-grandChild',
  template: `
    <div class="box">
      GrandChildComponent => {{ randomNo }}
      <div class="dirbox" testDirective></div>
    </div>
  `,
  styleUrls: ['./grand-child.component.css']
  // providers: [RandomService]
})
export class GrandChildComponent {
  randomNo;
  constructor(@Optional() @Self() private randomService: RandomService) {
    this.randomNo = this.randomService?.RandomNo;
  }
}
