import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-navbar></app-navbar>

    <!-- Injected routes -->
    <router-outlet></router-outlet>

    <!-- Footer -->
    <app-footer></app-footer>
    
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
        <!-- Core theme JS-->
  `,
  styles: []
})
export class AppComponent {
  title = 'doodledogsWebApp';
}
