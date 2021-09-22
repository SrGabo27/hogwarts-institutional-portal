import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/services';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.sass'],
})
export class ListStudentsComponent implements OnInit {
  public students: Array<Student> = [];

  public loading: boolean = false;

  constructor(private studentService: StudentService) {
    this.getStudents();
  }

  ngOnInit(): void {}

  private getStudents(): void {
    this.loading = true;
    this.studentService
      .getStudents()
      .subscribe(
        (students) => ((this.students = students), (this.loading = false))
      );
  }
}
