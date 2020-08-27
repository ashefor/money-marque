import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {
  currentPage = 1;
  personalDetailsForm: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.personalDetailsForm = this.fb.group({
      email: [null],
      phoneNumberPrefix: ['+234'],
      bvn: [null]
    })
  }

  ngOnInit() {
    
  }


  goToNext() {
    if(this.currentPage === 5) {
      return;
    } else {
      this.currentPage += 1
    }

    console.log(this.currentPage);
  }

  goToPrevious() {
    if(this.currentPage === 1) {
      return;
    } else {
      this.currentPage -= 1
    }

    console.log(this.currentPage);
  }
}
