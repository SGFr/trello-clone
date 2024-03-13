import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [NgClass],
  templateUrl: './btn.component.html',
})
export class BtnComponent {
  @Input() typeBtn: 'button' | 'reset' | 'submit' = 'button';
  @Input() color: string = 'primary';

  get colors() {
    let classes: string = '';
    switch (this.color) {
      case 'primary':
        classes = 'text-white bg-primary-700 hover:bg-primary-800 focus:ring-primary-300';
        break;
      case 'success':
        classes = 'text-white bg-success-700 hover:bg-success-800 focus:ring-success-300';
        break;
      case 'danger':
        classes = 'text-white bg-danger-700 hover:bg-danger-800 focus:ring-danger-300';
        break;
      case 'gray-light':
        classes =
          'bg-gray-200 hover:bg-gray-500 focus:ring-gray-50';
        break;
    }
    return classes;
  }
}
