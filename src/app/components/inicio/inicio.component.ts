import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { DetalleComponent } from '../detalle/detalle.component';
import { MarcaComponent } from '../marca/marca.component';
import { TableComponent } from '../table/table.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    DetalleComponent,
    MarcaComponent,
    TableComponent,
    FooterComponent
  ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {

}
