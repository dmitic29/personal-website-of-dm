import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dimitrije Mitic';
  opened = true;
  buttonIcon = '←';

  menuOpen(): boolean {
    this.opened = !this.opened;
    this.buttonIcon = this.buttonIcon === '←' ? '→' : '←';

    return this.opened;
  }
}
