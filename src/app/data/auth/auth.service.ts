import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private isAuthenticat = false;

    login() {
        this.isAuthenticat = true;
    }

    logout() {
        this.isAuthenticat = false;
    }

    public isAuthenticated(): boolean {
        return this.isAuthenticat;
    }
}
