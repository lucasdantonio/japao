import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-abertura',
  templateUrl: './abertura.page.html',
  styleUrls: ['./abertura.page.scss'],
})
export class AberturaPage implements OnInit {
  

  constructor(private router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['login']);
  }, 7000);  //7s
  }

}
