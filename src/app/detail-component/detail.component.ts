import { Component, Input } from '@angular/core';


 
@Component({
	selector:'detail-user-container',
    templateUrl: './detail.component.html',
    styleUrls:['./detail.component.css']
})
export class DetailComponent { 

	@Input() user:any = {}
    constructor(){
    }

    ngOnInit(){
    }

}
// {
//     "general": {
//       "firstName": "Deontae",
//       "lastName": "Dare",
//       "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/andysolomon/128.jpg"
//     },
//     "job": {
//       "company": "D'Amore, Dicki and Borer",
//       "title": "International Applications Consultant"
//     },
//     "contact": {
//       "email": "Kellie.Marvin38@yahoo.com",
//       "phone": "1-615-843-3426 x600"
//     },
//     "address": {
//       "street": "65901 Glover Terrace",
//       "city": "Alden ton",
//       "zipCode": "57744-4248",
//       "country": "Kenya"
//     }
//   }