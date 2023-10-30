import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({

    providedIn: 'root',

})

export class ApiService {
    constructor(private http: HttpClient) {}

    searchByLetter(letter: string) {
        return this.http.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`);
    }
}