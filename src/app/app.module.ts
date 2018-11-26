import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './Shopping_List/shopping-list/shopping-list.component';
import { RecipeBookComponent } from './Recipe_Book/recipe-book/recipe-book.component';
import { ComponentComponent } from './Feature/component/component.component';
import { ShoppingListEditComponent } from './Shopping_List/shopping-list-edit/shopping-list-edit.component';
import { RecipeItemComponent } from './Recipe_Book/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './Recipe_Book/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './Recipe_Book/recipe-list/recipe-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    RecipeBookComponent,
    ComponentComponent,
    ShoppingListEditComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
