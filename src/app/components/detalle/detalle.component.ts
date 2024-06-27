import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

interface Detalle {
  name: string;
  description: string;
  image: string;
  cashback: string;
}

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.scss'
})
export class DetalleComponent {
  detalles: Detalle[] = [
    { name: 'Chevron', description: '2% cashback on all Chevron fuel purchases', image: '/assets/chevron.jpeg', cashback: '2%' },
    { name: 'MGM Grand', description: '5% cashback', image: '/assets/cashback.jpeg', cashback: '5%' },
    { name: 'Panera Bread', description: '2% cashback on purchases of $35 or more', image: '/assets/hamburguesa.jpeg', cashback: '2%' },
    { name: 'Mailchimp', description: '5% cashback on purchases at Mailchimp', image: '/assets/mail.jpeg', cashback: '5%' }

  ]
}
