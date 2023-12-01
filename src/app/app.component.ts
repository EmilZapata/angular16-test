import { Component } from '@angular/core';
import { RandomService } from 'src/app/services/random.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomNo!: number;

  constructor(private randomService: RandomService) {
    this.randomNo = randomService.RandomNo;
  }
}
