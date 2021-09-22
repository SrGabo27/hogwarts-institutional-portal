import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxIzitoastService } from 'ngx-izitoast';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/services';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.sass'],
})
export class CreateStudentComponent implements OnInit {
  constructor(
    private studentService: StudentService,
    private iziToast: NgxIzitoastService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  public submitStudent(student: Student): void {
    this.studentService.createNewStudent(student).subscribe(() => {
      this.router.navigateByUrl('/new-students-application');
      this.iziToast.success({ title: 'New student application saved' });
    });
  }
}
