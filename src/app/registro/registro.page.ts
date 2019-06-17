import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToLogin(): void {
    this.router.navigate(['login']);
  }
  navigateToInicio(): void {
    setTimeout(() => {
      this.router.navigate(['tabs/tab1']);
    }, 5000);  //7s
  }
}
