import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { House } from 'src/app/models/house';
import { Student } from 'src/app/models/student';
import { Wand } from 'src/app/models/wand';
import { HouseService } from 'src/app/services/services';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.sass'],
})
export class StudentFormComponent implements OnInit {
  /**
   * Return an Student object from the student form
   */
  @Output() returnStudent = new EventEmitter<Student>();

  public studentForm!: FormGroup;
  private wandForm!: FormGroup;

  public studentImg: any = 'assets/img/preview.png';

  constructor(
    private fb: FormBuilder,
    private cd: ChangeDetectorRef,
    private houseService: HouseService
  ) {
    this.buildForm();
  }

  get houses(): Array<House> {
    return this.houseService.houses;
  }

  ngOnInit(): void {}

  private buildForm(): void {
    this.wandForm = this.fb.group({
      wood: [null, Validators.required],
      core: [null, Validators.required],
      length: [null, Validators.required],
    });

    this.studentForm = this.fb.group({
      name: [null, Validators.required],
      dateOfBirth: [null, Validators.required],
      patronus: [null, Validators.required],
      image: [null],
      species: [null, Validators.required],
      gender: [null, Validators.required],
      house: [null, Validators.required],
      ancestry: [null, Validators.required],
      wand: this.wandForm,
    });
  }

  // ======= Getters for easy access to the form controls

  // studentForm
  get name(): AbstractControl {
    return this.studentForm.controls.name;
  }
  get dateOfBirth(): AbstractControl {
    return this.studentForm.controls.dateOfBirth;
  }
  get patronus(): AbstractControl {
    return this.studentForm.controls.patronus;
  }
  get image(): AbstractControl {
    return this.studentForm.controls.image;
  }
  get species(): AbstractControl {
    return this.studentForm.controls.species;
  }
  get gender(): AbstractControl {
    return this.studentForm.controls.gender;
  }
  get house(): AbstractControl {
    return this.studentForm.controls.house;
  }
  get ancestry(): AbstractControl {
    return this.studentForm.controls.ancestry;
  }
  // wandForm
  get wood(): AbstractControl {
    return this.wandForm.controls.wood;
  }
  get core(): AbstractControl {
    return this.wandForm.controls.core;
  }
  get length(): AbstractControl {
    return this.wandForm.controls.length;
  }

  // =======================================================

  /**
   * Attaches a URL of the selected image to the form when one is selected
   */
  public onFileChange(event: any): void {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.studentForm.patchValue({
          image: reader.result,
        });

        // need to run CD since file load runs outside of zone
        this.cd.markForCheck();
        this.studentImg = reader.result;
      };
    }
  }

  public submitPatientForm(): void {
    if (this.studentForm.invalid) return;
    const wand = new Wand(this.wood.value, this.core.value, this.length.value);

    const student = new Student(
      this.name.value,
      this.dateOfBirth.value,
      this.patronus.value,
      false,
      this.image.value || 'undefined',
      this.species.value,
      this.gender.value,
      this.house.value,
      this.ancestry.value,
      wand
    );

    this.returnStudent.emit(student);
  }
}
