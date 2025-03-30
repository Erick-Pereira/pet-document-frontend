import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  title = 'Sobre Nós';
  description =
    'Somos uma empresa dedicada a melhorar a vida dos donos de pets através de tecnologia:';
  aboutPoints: string[] = [];

  ngOnInit(): void {
    this.aboutPoints = [
      'Equipe apaixonada por animais.',
      'Foco em soluções práticas e seguras.',
      'Compromisso com a saúde e bem-estar dos pets.',
    ];
  }
}
