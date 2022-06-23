import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nga-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isMenuCollapsed = true;

  constructor(private _router : Router) {
  }

  ngOnInit(): void {
  }

  navigateToProductDetail(id : number) {
    this._router.navigate([`/products/${id}`], {queryParams: {color: 'blue'}});
  }
}
