import { Component } from '@angular/core';
import { SnackOrderService } from '../snackOrder.service';
import { ApiHandler } from 'src/app/providers/api-provider';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-lunch',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})

export class OrderComponent {
  snacks: any[] = [];
  ingredients: any[];
  totalCost = 0;

  constructor(_snackServiceService: SnackOrderService, private _apiHandler: ApiHandler, private _router: Router) {
    this.snacks = _snackServiceService.snacks;

    _apiHandler.getAll('Ingredient').subscribe(data => {
      this.ingredients = data;
    });
  }

  calculatePrice(snacks: any[]) {
    this.totalCost = 0;
    snacks.forEach(snack => {
      snack.ingredients.forEach(ingredient => {
        this.totalCost += ingredient.quantity * ingredient.ingredient.price;
      })
    });
  }

  newOrder() {
    this._router.navigate(['../snacks']);
  }

  save(snacks: any) {
    const isValid = this.validateIngredientsLunch(snacks);

    if (!isValid) {
      alert('Alguns lanches não possuem ingredientes');
    } else {
      let order = { snacks: this.formatData(snacks) }
      console.log(order);
      this._apiHandler.post('Order', order).subscribe(data => {
        this.totalCost = data.totalPrice
      });
    }
  }

  formatData(snacks: any): any {
    let dataFormatted = [];
    
    snacks.forEach(snack => {
      let snackData = {
        id: snack.id,
        ingredients: []
      };

      snack.ingredients.forEach(ingredient => {
        snackData.ingredients.push({
          quantity: ingredient.quantity,
          ingredientId: ingredient.ingredient.id
        })
      });

      dataFormatted.push(snackData);
    });

    return dataFormatted;
  }

  validateIngredientsLunch(snacks: any): boolean {
    let hasIngredient: boolean = false;
    snacks.forEach(snack => {
      snack.ingredients.forEach(ingredient => {
        if (ingredient.quantity > 0) {
          hasIngredient = true;
          return;
        }
      })
    });

    return hasIngredient;
  }

  quantityIngredientChange(qtd, indiceLanche, indiceIngredient) {
    this.snacks[indiceLanche].ingredients[indiceIngredient].quantity = qtd.target.value;
    console.log(this.snacks);
  }
}

