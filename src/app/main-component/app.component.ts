import { Component } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpGetService } from '../../services/httpGet.service';
import { DataService } from '../../services/data.service';

 
@Component({
    selector: 'incode-app',
    templateUrl: './app.component.html',
    styleUrls:['./app.component.css']
})
export class AppComponent { 
    constructor(private httpGetService:HttpGetService,
    			private dataService:DataService){
    }

    ngOnInit(){
    	this.httpGetService.getData().subscribe(response => this.dataService.users = response);
    }

    private chekedClient:Object = {};
    private search:String = '';

    saveChekedClient(user:Object){
    	this.chekedClient = user;
    }
    showDetails(chekedClient:Object){
    	if(Object.keys(chekedClient).length != 0){
    		return true
    	}
    	return false
    }
}