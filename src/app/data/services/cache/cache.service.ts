import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class CacheService {
    set(key: string, value: any): void {
        localStorage.setItem(key, JSON.stringify(value));
    }

    get(key: string): any {
        const cachedValue = localStorage.getItem(key);
        return cachedValue ? JSON.parse(cachedValue) : null;
    }
}
