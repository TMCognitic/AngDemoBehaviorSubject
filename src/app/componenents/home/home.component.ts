import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private _isConnected! : Boolean;

  get isConnected()
  {
    return this._isConnected;
  }

  formGroup : FormGroup = this._formBuilder.group({
    email : [null, [Validators.required]],
    passwd : [null, [Validators.required]]
  });

  get email() : AbstractControl | null { return this.formGroup.get('email') };
  get passwd() : AbstractControl | null { return this.formGroup.get('passwd') };

  constructor(private _formBuilder : FormBuilder, private _authService : AuthService) { }

  ngOnInit(): void {
    this._authService.IsConnectedSub.subscribe({
      next: (value : Boolean) => 
      {
        console.log("new value : " + value)
        this._isConnected = value
      }});
  }

  OnLogin()
  {
    console.log("OnLogin");
    this._authService.login();
    this.formGroup.reset({
      'email' : null,
      'passwd' : null
    });
  }

  OnLogout()
  {
    console.log("OnLogout");
    this._authService.logout();
  }
}
