import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  title: string = '';

  showTitle(name: string) {
    this.title = name;
  }

  hideTitle() {
    this.title = '';
  }
}
