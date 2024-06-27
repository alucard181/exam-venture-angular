import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

interface Marca {
  name: string;
  description: string;
  image: string;
}


@Component({
  selector: 'app-marca',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './marca.component.html',
  styleUrl: './marca.component.scss'
})
export class MarcaComponent implements OnInit {
  marcas: Marca[] = [
    { name: 'Apple', description: 'Save 5% on car rentals', image: '/assets/apple.png' },
    { name: 'baby', description: 'Get $500 in Google ad spend', image: '/assets/baby.png' },
    { name: 'Cinderella', description: 'Spend $200, Get $200', image: '/assets/cinderella.png' },
    { name: 'Gloria', description: 'Save 20% Sitewide at Shutterstock', image: '/assets/gloria.jpeg' },
    { name: 'Lake', description: 'Save 5% on car rentals', image: '/assets/lake.png' },
    { name: 'Macdonald', description: 'Save up to 25%', image: '/assets/macdonals.png' },
    { name: 'Messi', description: 'Get 50% off a 6 month plan', image: '/assets/messi.jpeg' },
    { name: 'Netflix', description: 'Get 20% off', image: '/assets/netflix.png' },
  ];
  displayedMarcas: Marca[] = [];
  pageSize: number = 7;
  currentPage: number = 0;
  view: 'mosaic' | 'gallery' = 'mosaic';
  sortDirection: 'asc' | 'desc' = 'asc';
  sortField: 'name' | 'description' = 'name';
  ngOnInit(): void {
    this.updateDisplayedMarcas();
  }

  updateDisplayedMarcas(): void {
    this.displayedMarcas = this.marcas
      .sort((a, b) => this.sortDirection === 'asc'
        ? a[this.sortField].localeCompare(b[this.sortField])
        : b[this.sortField].localeCompare(a[this.sortField]))
      .slice(0, this.pageSize * (this.currentPage + 1));
  }
  loadMore(): void {
    this.currentPage++;
    this.updateDisplayedMarcas();
  }

  changeView(view: 'mosaic' | 'gallery'): void {
    this.view = view;
  }

  changeSort(field: 'name' | 'description'): void {
    if (this.sortField === field) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortField = field;
      this.sortDirection = 'asc';
    }
    this.updateDisplayedMarcas();
  }
}
