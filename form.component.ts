import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  userForm: FormGroup;
  listData: any[] = [];

  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      DOB: ['', Validators.required],
      gender: ['', Validators.required],
      city: ['', Validators.required]
    });
  }

  addItem(): void {
    if (this.userForm.valid) {
      this.listData.push(this.userForm.value);
      this.userForm.reset();
    }
  }
  reset(): void {
    this.userForm.reset();
  }

  removeItem(index:number): void {
    // const index = this.listData.findIndex(item => item.name === name);
    // if (index !== -1) {
    //   this.listData.splice(index, 1);
    // }
    this.listData.splice(index,1);
  }

  
}
