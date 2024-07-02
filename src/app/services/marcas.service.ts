import { Injectable, OnInit } from "@angular/core";
import { environment } from "../environments/environment"
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, catchError, map, retry, throwError } from "rxjs";

export interface Marca {
    idItem: number,
    nombreMarca: string,
    descripcion: string,
    imagen: string
}

export interface Categories {
    idMenu: number,
    descripcion: string
}


@Injectable({
    providedIn: 'root'
})
export class MarcasService {
    private apiUrl: string = environment.apiUrl;
    constructor(private http: HttpClient) { }




    getMarcas(idMenu: number = 2100): Observable<Marca[]> {
        return this.http.get<{ menuItems: any[] }>(`${this.apiUrl}Marcas?idMenu=${idMenu}`).pipe(
            retry(2), // Reintentar hasta 2 veces en caso de error
            map(response => response.menuItems.map(item => ({
                ...item,
                descripcion: item['descripción']
            }))),
            catchError(this.handleError) // Manejo de errores
        );
    }

    getCategories(): Observable<Categories[]> {
        return this.http.get<{ menuItems: any[] }>(`${this.apiUrl}Categorias`).pipe(
            retry(2),
            map(response => response.menuItems.map(item => ({
                ...item,
                descripcion: item['descripción']
            })))
        )
    }

    private handleError(error: HttpErrorResponse): Observable<never> {
        if (error.error instanceof ErrorEvent) {
            console.error('Ocurrió un error:', error.error.message);
        } else {
            console.error(`Backend retornó el código ${error.status}, body fue: ${error.error}`);
        }
        return throwError(() => new Error('Algo malo sucedió; por favor, intenta de nuevo más tarde.'));
    }

}