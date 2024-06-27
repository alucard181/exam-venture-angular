import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private loggedIn = new BehaviorSubject<boolean>(this.hasUser());
    private username = new BehaviorSubject<string>(this.getUsername());

    get isLoggedIn() {
        return this.loggedIn.asObservable();
    }

    get currentUserName() {
        return this.username.asObservable();
    }

    private hasUser(): boolean {
        return !!localStorage.getItem("usuario");
    }

    private getUsername(): string {
        const currentUser = localStorage.getItem("usuario");
        return currentUser ? JSON.parse(currentUser).username : '';
    }

    login(username: string): void {
        localStorage.setItem("usuario", JSON.stringify({ username }));
        this.loggedIn.next(true);
        this.username.next(username);
    }
    logout(): void {
        localStorage.removeItem('usuario');
        this.loggedIn.next(false);
        this.username.next('');
    }

}
