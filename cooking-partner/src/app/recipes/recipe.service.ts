import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe-list/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'this is a simple test',
      'https://storage.needpix.com/rsynced_images/dishes-1175495_1280.jpg',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
    new Recipe(
      'A test recipe2',
      'this is a simple test',
      'https://storage.needpix.com/rsynced_images/dishes-1175495_1280.jpg',
      [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]
    )
  ];
  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
