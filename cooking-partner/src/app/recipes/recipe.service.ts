import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe-list/recipe.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'this is a simple test',
      'https://storage.needpix.com/rsynced_images/dishes-1175495_1280.jpg'
    ),
    new Recipe(
      'A test recipe2',
      'this is a simple test',
      'https://storage.needpix.com/rsynced_images/dishes-1175495_1280.jpg'
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
