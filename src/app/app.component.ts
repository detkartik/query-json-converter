import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Query-Json-Convertor';
  textForm: FormGroup;
  submitted = false;

  constructor(private formbuilder: FormBuilder) {}

  ngOnInit() {
    this.textForm = this.formbuilder.group({
      textName: [
        '',
        [
          Validators.pattern('/([^)]*)/'),
          Validators.pattern('/((?<!([A-Z]{1,10})-?)[A-Z]+-\\d+)/'),
        ],
      ],
    });
  }
  get h() {
    return this.textForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (this.textForm.invalid) {
      return;
    }
    console.table(this.textForm.value);
    console.table(this.textForm);
    alert('This is Jsonify data' + JSON.stringify(this.textForm.value));
  }
  onReset() {
    this.submitted = false;
    this.textForm.reset();
  }
}
