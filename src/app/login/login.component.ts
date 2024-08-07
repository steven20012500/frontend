import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';
import { User } from '../class/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usuarios: User = {
    _id: '',
    cedula: '',
    password: '',
  };
  
  constructor(private authService: AuthService,private storageService: StorageService, private router: Router) {}
  
  loginUser() {
    this.authService.loginUser(this.usuarios).subscribe({
      next: res => {
        this.storageService.setItem('token', res.token);
        //quiero que me redireccione a la galeria y se actualice la pagina
        this.router.navigate(['galeria']).then(() => {
          window.location.reload();
        });
      },
      error: err => console.error(err)
    });
  }
  
}
