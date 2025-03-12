import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

    @Input() facebook: string = '';
    @Input() twitter: string = '';
    @Input() instagram: string = '';

}
