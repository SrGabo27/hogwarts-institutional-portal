import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxIzitoastService } from 'ngx-izitoast';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Teacher } from 'src/app/models/teacher';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TeacherService {
  private url = `${environment.api}/characters/staff`;

  constructor(private http: HttpClient, private iziToast: NgxIzitoastService) {}

  public getTeachers(): Observable<Array<Teacher>> {
    return this.http.get<Array<Teacher>>(this.url).pipe(
      catchError((error) => {
        this.iziToast.error({
          title: 'Error',
          message: 'Failed to get teachers',
        });

        return throwError(error);
      })
    );
  }
}
