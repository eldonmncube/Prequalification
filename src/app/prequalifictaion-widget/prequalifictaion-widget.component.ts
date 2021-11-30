import { Component, Inject, OnInit, EventEmitter } from '@angular/core';

import {
  FormBuilder,
  ReactiveFormsModule,
  FormsModule,
  NgControl,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

// import { group } from 'console';

@Component({
  selector: 'app-prequalifictaion-widget',
  templateUrl: './prequalifictaion-widget.component.html',
  styleUrls: ['./prequalifictaion-widget.component.scss'],
  styles: [],
})
export class PrequalifictaionWidgetComponent implements OnInit {
  // form: FormGroup;
  ///
  firstPhase!: FormGroup;
  secondPhase!: FormGroup;
  thirdPhase!: FormGroup;
  fourthPhase!: FormGroup;
  fifthPhase!: FormGroup;
  sixthPhase!: FormGroup;
  seventhPhase!: FormGroup;

  first_step = false;
  second_step = false;
  third_step = false;
  fourth_step = false;
  fifth_step = false;
  sixth_step = false;
  seventh_step = false;

  step = 1;

  day: number = 0;


  formBuilder: any;
  dayText!: string;
  monthText!: string;
  constructor(
    public dialogRef: MatDialogRef<PrequalifictaionWidgetComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {
    this.createForm();

  }
  createForm() {
    this.secondPhase = this.fb.group({
      phone: ['', Validators.required],
      // phone1: ['', Validators.required,Validators.pattern('^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$')],
      DayOfBirth: [
        '',
        Validators.required,Validators.min(1),Validators.max(31)
      ],
      // MonthOfBirth: [
      //   '',
      //   Validators.required]
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.firstPhase = this.formBuilder.group({
      phone: ['', Validators.required],
    });
    this.secondPhase = this.formBuilder.group({});
    this.thirdPhase = this.formBuilder.group({});
    this.fourthPhase = this.formBuilder.group({});
    this.fifthPhase = this.formBuilder.group({});
    this.sixthPhase = this.formBuilder.group({});
    this.seventhPhase = this.formBuilder.group({});
     }

  get first() {
    return this.firstPhase.controls;
  }
  get second() {
    return this.secondPhase.controls;
  }
  get third() {
    return this.thirdPhase.controls;
  }
  get fourth() {
    return this.fourthPhase.controls;
  }
  get fifth() {
    return this.fifthPhase.controls;
  }
  get sixth() {
    return this.sixthPhase.controls;
  }
  get seventh() {
    return this.seventhPhase.controls;
  }
  next() {
    this.step++;
    if (this.step == 1) {
      this.second_step = true;
    }
    if (this.step == 2) {
      if (this.secondPhase.valid) {
        this.third_step = true;
      } else {
        this.createForm;
      }
    }

    if (this.step == 3) {
      this.fourth_step = true;
    }
    if (this.step == 4) {
      this.fifth_step = true;
    }
    if (this.step == 5) {
      this.sixth_step = true;
    }
    if (this.step == 6) {
      this.seventh_step = true;
    }
  }
  previous() {
    this.step--;
    if (this.step == 1) {
      this.second_step = false;
    }
    if (this.step == 2) {
      this.third_step = false;
    }
    if (this.step == 3) {
      this.fourth_step = true;
    }
    if (this.step == 4) {
      this.fifth_step = true;
    }
    if (this.step == 5) {
      this.sixth_step = true;
    }
    if (this.step == 6) {
      this.seventh_step = true;
    }
  }

  previousToSecond() {
    this.step = this.step - 2;
    if (this.step == 4) {
      this.fifth_step = false;
    }
  }

  submit() {
    if (this.step == 7) {
      this.sixth_step = true;

    }
  }

  checkMaxDay() {
    var dt = this.secondPhase.value['DayOfBirth'];
    console.log('Hitting Check Max Ellie');
    console.log('Ellie dayText 1', dt);
    console.log(
      'Ellie dayText 2',
      this.secondPhase.get('DayOfBirth')?.valueOf()
    );
    this.dayText = this.secondPhase.get('DayOfBirth')?.value;
    this.monthText = this.secondPhase.get('MonthOfBirth')?.value;
    if (this.dayText === '') {
      console.log('Ellie Null or Not Digit');
    }

    if (this.monthText != '' || 'Birth Month' != this.monthText.valueOf()) {
      console.log('Ellie month is :', this.monthText.valueOf());
    }
  }
}
