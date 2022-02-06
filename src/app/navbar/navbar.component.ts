import { Component, OnInit } from '@angular/core';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  template: `
  <!-- NAVBAR-->
  <nav class="navbar navbar-expand-lg py-3 navbar-dark bg-dark shadow-sm">
    <div class="container">
      <a href="#" class="navbar-brand"  routerLink="/">
        <!-- Logo Image -->
        <img src="assets/img/Logo.png" width="250" alt="" class="d-inline-block align-middle mr-2">
      </a>
  
      <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler"><span class="navbar-toggler-icon"></span></button>
  
      <div id="navbarSupportedContent" class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active"><a class="nav-link" routerLink="/">Home</a></li>
          <li class="nav-item"><a class="nav-link" routerLink="/about">About the Project</a></li>
          <li class="nav-item"><a class="nav-link" routerLink="/road">Road Map</a></li>
          <li class="nav-item"><a class="nav-link" routerLink="/login"><fa-icon [icon]="faIcon"></fa-icon> Login</a></li>
        </ul>
      </div>
    </div>
  </nav>
  
  `,
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  faIcon = faUserCircle;
}
