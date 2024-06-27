import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog'
import { LoginComponent } from '../login/login.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../services/auth.service';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    LoginComponent,
    TranslateModule,
    MenuComponent
  ]
})
export class HeaderComponent implements OnInit {
  loggedIn: boolean = false;
  username: string = "";
  currentLanguage: string = 'en';

  constructor(
    public dialog: MatDialog,
    private authService: AuthService,
    private languajeService: LanguageService,
  ) { }

  ngOnInit(): void {
    this.authService.isLoggedIn.subscribe({
      next: (loggedIn) => {
        this.loggedIn = loggedIn;
      },
      error: (err) => {
        console.error('Error en la suscripcion a isloggedIn', err);
      },
      complete: () => {
        console.log('Suscripcion a isloggedIn completada');
      }
    });
    this.authService.currentUserName.subscribe({
      next: (username) => {
        this.username = username;
      },
      error: (err) => {
        console.error('Error en la suscripcion a username', err);
      },
      complete: () => {
        console.log('Suscripcion a currentUseraname completado');
      }
    })
    this.languajeService.currentLanguageSubject$.subscribe({
      next: (language) => {
        this.currentLanguage = language;
      },
      error: (err) => {
        console.error('Error en la suscripcion a currentLanguage');
      },
      complete: () => {
        console.log("Suscripcion a currentLanguage completado");
      }
    })
  }

  openLoginModal(): void {
    this.dialog.open(LoginComponent);
  }

  logout(): void {
    this.authService.logout();
  }

  changeLanguage(event: Event): void {
    this.languajeService.changeLanguage(event);
  }
}
