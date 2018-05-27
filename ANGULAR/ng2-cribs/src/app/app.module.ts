import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http ,HttpModule} from '@angular/http';
import { DeprecatedI18NPipesModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CribListingComponent } from './crib-listing/crib-listing.component';
import { CribCardComponent } from './crib-card/crib-card.component';


import { CribsService } from './services/cribs.service';
import { UtilService } from './services/util.service';
import { AddListingFormComponent } from './services/add-listing-form/add-listing-form.component';
import { SortByPipe } from './services/pipes/sort-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CribListingComponent,
    CribCardComponent,
    AddListingFormComponent,
    SortByPipe
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    DeprecatedI18NPipesModule,
    FormsModule
    
  ],
  providers: [CribsService, UtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }

