import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { TableComponent } from './components/table/table.component';
import { MarcaComponent } from './components/marca/marca.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { FooterComponent } from './components/footer/footer.component';
import { InicioComponent } from './components/inicio/inicio.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    RouterOutlet,
    HeaderComponent,
    TableComponent,
    MarcaComponent,
    DetalleComponent,
    FooterComponent,
    InicioComponent
  ],
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'examen';
}
