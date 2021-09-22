import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxIzitoastService } from 'ngx-izitoast';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Student } from 'src/app/models/student';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private url = `${environment.api}/characters/students`;
  public newStudents: Array<Student> = [];

  constructor(private http: HttpClient, private iziToast: NgxIzitoastService) {
    this.syncStorage();
  }

  public getStudents(): Observable<Array<Student>> {
    return this.http.get<Array<Student>>(this.url).pipe(
      catchError((error) => {
        this.iziToast.error({
          title: 'Error',
          message: 'Failed to get characters',
        });

        return throwError(error);
      })
    );
  }

  public createNewStudent(student: Student): Observable<Student> {
    return new Observable<Student>((subscriber) => {
      try {
        this.newStudents.push(student);

        this.saveStorage();

        subscriber.next(student);
        subscriber.complete();
      } catch (e) {
        this.iziToast.error({
          title: 'Error',
          message: 'Failed to save application',
        });

        subscriber.error(e);
      }
    });
  }

  /**
   * Saves the list of new students to local storage
   */
  private saveStorage(): void {
    const payload = JSON.stringify(this.newStudents);

    localStorage.removeItem('newStudents');

    localStorage.setItem('newStudents', payload);
  }

  /**
   * load the list of new students from local storage
   */
  private syncStorage(): void {
    let newStudents = localStorage.getItem('newStudents');

    if (newStudents) this.newStudents = JSON.parse(newStudents);
  }
}
