import { Component, ViewChild, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-tdform',
  templateUrl: './tdform.component.html',
  styleUrls: ['./tdform.component.css']
})
export class TdformComponent implements OnInit {
  @ViewChild('f') signupForm: NgForm;
  title = 'app';
  defultquestion = 'pet';
  answer = '';
  genders = ['male', 'female'];
  user ={
    username: '',
    email: '',
    secretQuestion: '',
    gender: '',
    answer: ''
  };
  submitted = false;

  suggestUserName() {
    const suggestedName = 'Super User';
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionanswer: '',
    //   gender: 'male'
    // });
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }
  // onSubmit(form: NgForm) {
  //   console.log(this.signupForm);
  // }
  onSubmit() {
    this.submitted = true;
  this.user.username = this.signupForm.value.userData.username;
this.user.email = this.signupForm.value.userData.email;
this.user.secretQuestion = this.signupForm.value.secret;
this.user.answer = this.signupForm.value.questionanswer;
this.user.gender = this.signupForm.value.gender;
this.signupForm.reset();


  }
  constructor() { }

  ngOnInit() {
  }

}
