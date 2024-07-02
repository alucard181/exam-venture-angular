import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MarcasService, Marca, Categories } from '../../services/marcas.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-marca',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    TranslateModule
  ],
  templateUrl: './marca.component.html',
  styleUrls: ['./marca.component.scss']
})
export class MarcaComponent implements OnInit {
  marcas: Marca[] = [];
  categories: Categories[] = [];
  displayedMarcas: Marca[] = [];
  errorMessage: string = '';
  pageSize: number = 7;
  currentPage: number = 0;
  view: 'mosaic' | 'gallery' = 'mosaic';
  sortDirection: 'asc' | 'desc' = 'asc';
  sortField: keyof Marca = 'nombreMarca';

  constructor(private marcasService: MarcasService) { }

  ngOnInit(): void {
    this.marcasService.getCategories().subscribe({
      next: (data) => {
        if (Array.isArray(data)) {
          this.categories = data;
        } else {
          this.errorMessage = 'La respuesta de la API no es un array';
        }
      }
    })


    this.marcasService.getMarcas().subscribe({
      next: (data) => {
        if (Array.isArray(data)) {
          this.marcas = data;
          this.updateDisplayedMarcas();
        } else {
          this.errorMessage = 'La respuesta de la API no es un array';
        }
      },
      error: (error) => {
        this.errorMessage = error.message;
      }
    });
  }

  updateDisplayedMarcas(): void {
    if (this.marcas.length > 0) {
      this.displayedMarcas = this.marcas
        .sort((a, b) => this.sortDirection === 'asc'
          ? (a[this.sortField] as string).localeCompare(b[this.sortField] as string)
          : (b[this.sortField] as string).localeCompare(a[this.sortField] as string))
        .slice(0, this.pageSize * (this.currentPage + 1));
    }
  }

  loadMore(): void {
    this.currentPage++;
    this.updateDisplayedMarcas();
  }

  changeView(view: 'mosaic' | 'gallery'): void {
    this.view = view;
  }

  changeSort(field: keyof Marca): void {
    if (this.sortField === field) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortField = field;
      this.sortDirection = 'asc';
    }
    this.updateDisplayedMarcas();
  }


  public changeCategory(idMenu: number) {
    this.marcasService.getMarcas(idMenu).subscribe({
      next: (data) => {
        if (Array.isArray(data)) {
          this.marcas = data;
          this.updateDisplayedMarcas();
        } else {
          this.errorMessage = 'La respuesta de la API no es un array';
        }
      },
      error: (error) => {
        this.errorMessage = error.message;
      }
    });
  }
}
