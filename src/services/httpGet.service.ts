import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpGetService{
    constructor(private http: HttpClient){}

    users:any = [];
    getData() {
        let url = `http://localhost:3000/api/users/`
        return this.http.get(url)
                .map(this.extractData);
    }
    private extractData(res: Response) {
        return res || { };
    }
}