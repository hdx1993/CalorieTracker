import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { foodsComponent } from './foods/foods.component';
import { foodService } from './foods/food.service';
import { foodComponent } from './food/food.component';

@NgModule({
  declarations: [
    AppComponent,
    foodsComponent,
    foodComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
    // InMemoryWebApiModule.forRoot(InMemoryDataService)
    // AppRoutingModule
  ],
  providers: [ foodService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
