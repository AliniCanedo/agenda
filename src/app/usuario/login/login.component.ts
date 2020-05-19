import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  usuario: Usuario;
  
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
   
  }
  fazerlogin(){
   this.auth.login(this.usuario);
  }
}
