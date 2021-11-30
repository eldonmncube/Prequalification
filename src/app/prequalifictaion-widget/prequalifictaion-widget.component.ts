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

  // checked: boolean = false;

  formBuilder: any;
  dayText!: string;
  monthText!: string;
  ///
  constructor(
    public dialogRef: MatDialogRef<PrequalifictaionWidgetComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {
    this.secondPhase = fb.group({
      // phone: [''],
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    //Start Form Here
    this.firstPhase = this.formBuilder.group({
      // name: ['', Validators.required],
      // email: ['', Validators.required],
      // phone: ['',Validators.required]
    });
    this.secondPhase = this.formBuilder.group({
      //  DayOfBirth:['', Validators.required],
      //  MonthOfBirth: ['', Validators.required],
      // phone: [null, Validators.required],
    });
    this.thirdPhase = this.formBuilder.group({
      // highest_qualification: ['', Validators.required],
      // university: ['', Validators.required],
      // total_marks: ['',Validators.required]
    });
    this.fourthPhase = this.formBuilder.group({});
    this.fifthPhase = this.formBuilder.group({});
    this.sixthPhase = this.formBuilder.group({});
    this.seventhPhase = this.formBuilder.group({});
    //End Form Here
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
      this.third_step = true;
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
    /* if (this.step == 1) {
      this.personal_step = true;
      // if (this.personalDetails.invalid) {
      //   return;
      // }
      console.log('Ellie',this.step);

      this.step++;
    }
    if (this.step == 2) {
      this.address_step = true;
      // if (this.addressDetails.invalid) {
      //   return;
      // }
      this.step++;
    }
    */
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
      // if (this.educationalDetails.invalid) {
      //   return;
      // }
    }
  }

  checkMaxDay() {
    var dt=this.secondPhase.value['DayOfBirth'];
    console.log('Hitting Check Max Ellie');
console.log('Ellie dayText 1',dt);
console.log('Ellie dayText 2',this.secondPhase.get('DayOfBirth')?.valueOf());
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
