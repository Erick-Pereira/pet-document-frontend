import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resource-card',
  templateUrl: './resource-card.component.html',
  styleUrls: ['./resource-card.component.scss'],
})
export class ResourceCardComponent {
  @Input() title = ''; // Título do card
  @Input() link = ''; // Link para o qual o card aponta
  @Input() icon = 'info'; // Ícone exibido no card
}
