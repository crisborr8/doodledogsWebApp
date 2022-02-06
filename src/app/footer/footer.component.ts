import { Component, OnInit } from '@angular/core';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  template: `
  <footer class="footer-07">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-12 text-center">
          <h2 class="footer-heading"><a class="logo" routerLink="/">Doodledogs.in</a></h2>
          <p class="menu">
            <a  routerLink="/">Home</a>
            <a  routerLink="/about">About the Project</a>
            <a  routerLink="/road">Road Map</a>
            <a  routerLink="/login">Login</a>
          </p>
          <ul class="ftco-footer-social p-0">
            <a><fa-icon [icon]="faFacebook"></fa-icon></a>
            <a><fa-icon [icon]="faTwitter"></fa-icon></a>
            <a><fa-icon [icon]="faInstagram"></fa-icon></a>
          </ul>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-md-12 text-center">
          <p class="copyright">
          Copyright ©<script>document.write(new Date().getFullYear());</script>2022 All rights reserved
          </p>
        </div>
      </div>
    </div>
  </footer>
  `,
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
}
