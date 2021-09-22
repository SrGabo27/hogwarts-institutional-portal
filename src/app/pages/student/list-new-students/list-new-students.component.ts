import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/services';

@Component({
  selector: 'app-list-new-students',
  templateUrl: './list-new-students.component.html',
  styleUrls: ['./list-new-students.component.sass'],
})
export class ListNewStudentsComponent implements OnInit {
  constructor(private studentService: StudentService) {}

  get newStudents(): Array<Student> {
    return this.studentService.newStudents;
  }

  ngOnInit(): void {}
}
