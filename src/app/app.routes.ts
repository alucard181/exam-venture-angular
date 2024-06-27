import { Routes } from '@angular/router';
import { DetalleComponent } from './components/detalle/detalle.component';
import { MarcaComponent } from './components/marca/marca.component';
import { TableComponent } from './components/table/table.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';

export const routes: Routes = [
    { path: '', component: InicioComponent },
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            { path: 'detalle', component: DetalleComponent },
            { path: 'marca', component: MarcaComponent },
            { path: 'table', component: TableComponent }
        ]
    }
];