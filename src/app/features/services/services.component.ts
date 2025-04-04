import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  title = 'Nossos Serviços';
  description =
    'Oferecemos uma ampla gama de serviços para facilitar a vida dos donos de pets:';
  services: string[] = [];

  ngOnInit(): void {
    this.services = [
      'Organização de documentos veterinários.',
      'Agendamento de consultas e lembretes.',
      'Armazenamento seguro de informações sobre vacinas.',
      'Compartilhamento de dados com profissionais de saúde animal.',
    ];
  }
}
