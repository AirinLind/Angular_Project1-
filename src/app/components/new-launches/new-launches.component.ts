import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-new-launches',
  imports: [],
  templateUrl: './new-launches.component.html',
  styleUrl: './new-launches.component.css'
})
export class NewLaunchesComponent {

  @Input() headphones6: string = '';
  @Input() headphones7: string = '';

  selectedColor: string = 'black';

  selectColor(color: string): void {
    this.selectedColor = color;
  }
}
