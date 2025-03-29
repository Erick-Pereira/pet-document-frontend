import { NgModule } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { HighlightCardComponent } from './components/highlight-card/highlight-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ResourceCardComponent } from './components/resource-card/resource-card.component';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    ResourceCardComponent,
    HighlightCardComponent,
  ],
  imports: [CommonModule, MatIconModule],
  exports: [
    NavbarComponent,
    FooterComponent,
    ResourceCardComponent,
    HighlightCardComponent,
  ],
})
export class SharedModule {}
