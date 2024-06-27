import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';

interface OffersCard {
  id: number,
  feature: string;
  noLink: boolean;
  link: boolean;
}

const ELEMENT_DATA: OffersCard[] = [
  { id: 1, feature: "Instant Coupons", noLink: true, link: true },
  { id: 2, feature: "Full access to Visa Saving Edge benefits", noLink: false, link: true },
  { id: 3, feature: "Cashback tracking", noLink: false, link: true },
  { id: 4, feature: "Merchant location search", noLink: false, link: true },
  { id: 5, feature: "Cashback offers", noLink: false, link: true }
]

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatCheckboxModule
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  displayedColumns: string[] = ['feature', 'noLink', 'link'];
  dataSource = ELEMENT_DATA;
}
