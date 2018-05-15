import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(users: any, search: any): any {
    if(search==''){
      return users;
    }
    return users.filter(function(user:any){
      for(let keyGeneral in user){
        for(let keyDetail in user[keyGeneral]){
          if(user[keyGeneral][keyDetail].toLowerCase().indexOf(search.toLowerCase().trim()) > -1){
            return user
          }
        }
      }
    })
  }
}
