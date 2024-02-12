import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';
import { CardDireComponent } from './card-dire/card-dire.component';
import { CreditCardDirective } from './directive/credit-card.directive';
import { AdvancesCssDirective } from './directive/advances-css.directive';
import { BasicCssDirective } from './directive/basic-css.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CardDireComponent,
    CreditCardDirective,
    AdvancesCssDirective,
    BasicCssDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
