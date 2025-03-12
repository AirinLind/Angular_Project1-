import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-trending-earphones',
  imports: [],
  templateUrl: './trending-earphones.component.html',
  styleUrl: './trending-earphones.component.css'
})
export class TrendingEarphonesComponent {

  @Input() headphones4: string = '';
  @Input() headphones2: string = '';
  @Input() headphones5: string = '';

}
