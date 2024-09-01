import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

// Đây là linh hồn của angular
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent {

  // Declare properties
  phone: string;
  password: string;
  retypePasword: string;
  fullName: string;
  address: string;
  isActive: boolean;
  dateOfBirth: Date;

  constructor(private titleService: Title){
    this.titleService.setTitle('Đăng ký tài khoản')
    this.phone = '';
    this.password = '';
    this.retypePasword = '';
    this.fullName = '';
    this.address = '';
    this.isActive = false;
    this.dateOfBirth = new Date();
    this.dateOfBirth.setFullYear(this.dateOfBirth.getFullYear() - 18)
  }

  onPhoneChange(){
    console.log(`Phone typed: ${this.phone}`)
  }

  onPasswordChange(){
    console.log(`Password typed: ${this.password}`)
  }

  register(){
    const message = `phone: ${this.phone}`+
                    `password: ${this.password}`+
                    `retyPassword: ${this.retypePasword}`+
                    `fullname: ${this.fullName}`+
                    `address: ${this.address}`+
                    `isActive: ${this.isActive}`+
                    `dateOfBirth: ${this.dateOfBirth}`;

    alert(message)
  }

  onDateOfBirthChange(){

  }
}

