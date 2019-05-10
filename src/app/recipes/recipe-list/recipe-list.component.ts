import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('name',
      'Descr',
      'https://images.media-allrecipes.com/images/54926.jpg')
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
