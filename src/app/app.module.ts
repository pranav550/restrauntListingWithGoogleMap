import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { DetailsComponent } from './components/details/details.component';
import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './components/map/map.component';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {Constant} from "./utils/constants";
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailsComponent,
    MapComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    AgmCoreModule.forRoot({
      apiKey: Constant.key,
      
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
