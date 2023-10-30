import { Component, OnInit } from '@angular/core';
import { Drink } from '../model/drink.interface';
import { DrinkService } from '../_services/drink.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
})

export class DrinksComponent implements OnInit {
  constructor(
    private drinkService: DrinkService,
    private router: Router
  ) {}
  
  drinks: Array<Drink> = [];
  category: string = 'All';
  alphabet: Array<string> = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  titleLetter: string = 'A';

  ngOnInit(): void {
    this.getList();
  }

  getList(letter: string = 'A') {
    
    this.drinkService.getDrinksList(letter). subscribe((response: any) => {
      this.drinks = response.drinks;
    })

    this.titleLetter = letter;
  }

  changeCategory(selCategory: string){
    this.category = selCategory;
  }
  
  selectDrink(id: number) {
    this.router.navigate(['detail/drink', id]);
  }
}