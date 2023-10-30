import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Drink } from '../model/drink.interface';
import { ActivatedRoute } from '@angular/router';
import { DrinkService } from '../_services/drink.service';
import { DrinksComponent } from '../drinks/drinks.component';

@Component({
  selector: 'app-detail-drink',
  templateUrl: './detail-drink.component.html',
})

export class DetailDrinkComponent implements OnInit {
  detailDrink: Drink | null = null; 
  errore: string = "";
  scelta: string = "IT";
  id: string | null = '';
  
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private drinkService: DrinkService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
        this.id = params.get('id');
    });

    this.http.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${this.id}`).subscribe( (response: any) => {
      if(response.drinks === null){
        this.errore = "Nessun cocktail";
      }
      else{
        this.detailDrink = response.drinks[0];
      }
    })

  }

  changeLang(lang: string = '') {
    this.scelta = lang;
  }
  
}