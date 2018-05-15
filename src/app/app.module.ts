import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }   from './main-component/app.component';
import { ListComponent } from 	'./list-component/list.component';
import { DetailComponent } from 	'./detail-component/detail.component';

import { SearchFilterPipe } from 	'../pipes/searchFilter.pipe';

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { HttpGetService } from '../services/httpGet.service';
import {DataService} from '../services/data.service';

@NgModule({
    imports:      [ BrowserModule, FormsModule, HttpClientModule, HttpModule ],
    declarations: [ AppComponent, ListComponent, DetailComponent, SearchFilterPipe ],
    bootstrap:    [ AppComponent ],
    providers:	  [ HttpGetService, DataService ]
})
export class AppModule {}