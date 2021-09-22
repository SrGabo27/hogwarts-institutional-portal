import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Character } from 'src/app/models/character';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NgxIzitoastService } from 'ngx-izitoast';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private url = `${environment.api}/characters`;

  constructor(private http: HttpClient, private iziToast: NgxIzitoastService) {}

  public getCharacters(house?: string): Observable<Array<Character>> {
    let url = house ? `${this.url}/house/${house}` : `${this.url}`;

    return this.http.get<Array<Character>>(url).pipe(
      catchError((error) => {
        this.iziToast.error({
          title: 'Error',
          message: 'Failed to get characters',
        });
        return throwError(error);
      })
    );
  }
}
