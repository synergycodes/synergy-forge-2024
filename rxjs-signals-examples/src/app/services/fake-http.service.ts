import { Injectable } from "@angular/core";
import { FOOTBALLERS } from "../consts/footballers.const";
import { Footballer } from "../interfaces/footballer.interface";
import { Observable, of } from "rxjs";

@Injectable({
	providedIn: 'root'
})
export class FakeHttpService {
	readonly footballers = FOOTBALLERS;

	getFootballers(query: string): Observable<Footballer[]> {
        console.log('Fake HTTP request with query = ', query);

        if (!query) return of(this.footballers);

        return of(this.footballers.filter(f => f.name.toLowerCase().includes(query)));
    }
}
