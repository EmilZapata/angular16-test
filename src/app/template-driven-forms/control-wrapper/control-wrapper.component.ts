import { CommonModule } from '@angular/common';
import { Component, ContentChild, OnInit, inject } from '@angular/core';
import { NgModel, NgModelGroup } from '@angular/forms';

@Component({
  selector: '[controlWrapper]',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './control-wrapper.component.html',
  styleUrls: ['./control-wrapper.component.scss']
})
export class ControlWrapperComponent implements OnInit {
  @ContentChild(NgModel) ngModel!: NgModel;
  protected readonly ngModelGroup: NgModelGroup | null = inject(NgModelGroup, {
    self: true,
    optional: true
  });

  constructor() {}

  ngOnInit() {}
}
