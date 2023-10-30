import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({

    providedIn: 'root',

})

export class DrinkService {
    constructor(
        private apiService: ApiService,
    ){}
    
    arrayId: Array<number> = [];

    getDrinksList (letter: string) {
        return this.apiService.searchByLetter(letter);
    }

}