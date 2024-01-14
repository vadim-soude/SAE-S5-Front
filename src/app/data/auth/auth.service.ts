import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private isLoggedIn = false;
    private isSub= true;

    login() {
        this.isLoggedIn = true;
    }

    logout() {
        this.isLoggedIn = false;
    }

    setSub(){
        this.isSub = false;
    }

    removeSub(){
        this.isSub = true;
    }

    public isAuthenticated(): boolean {
        return this.isLoggedIn;
    }

    public isSubscribe(): boolean{
        return this.isSub;
    }
}
