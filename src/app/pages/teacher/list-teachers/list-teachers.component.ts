import { Component, OnInit } from '@angular/core';
import { Teacher } from 'src/app/models/teacher';
import { TeacherService } from 'src/app/services/teacher/teacher.service';

@Component({
	selector: 'app-list-teachers',
	templateUrl: './list-teachers.component.html',
	styleUrls: ['./list-teachers.component.sass'],
})
export class ListTeachersComponent implements OnInit {
	public teachers: Array<Teacher> = [];

	public loading: boolean = false;

	constructor(private teacherService: TeacherService) {
		this.getTeachers();
	}

	ngOnInit(): void { }

	private getTeachers(): void {
		this.loading = true;
		this.teacherService
			.getTeachers()
			.subscribe(
				(teachers) => ((this.teachers = teachers), (this.loading = false))
			);
	}
}
