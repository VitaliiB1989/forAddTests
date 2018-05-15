import { Component, Input } from '@angular/core';


 
@Component({
	selector:'client-list-container',
    templateUrl: './list.component.html',
    styleUrls:['./list.component.css']
})
export class ListComponent { 

	@Input() user:any = {}
    constructor(){
    }

    ngOnInit(){
    }

}