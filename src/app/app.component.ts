import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  menuItems = [
    { label: 'Início', path: '/' },
    { label: 'Sobre', path: '/about' },
    { label: 'Serviços', path: '/services' },
    { label: 'Login', path: '/login' },
  ];
}
