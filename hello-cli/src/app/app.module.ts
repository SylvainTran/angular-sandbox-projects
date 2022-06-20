import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Angular built-in modules
import { BrowserModule } from '@angular/platform-browser';

// My modules
import { GardeningModule } from './gardening/gardening.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GardeningModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
