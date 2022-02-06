import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `


<header>

  <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active" style="background-image: url(assets/img/DogSamples/5.jpeg)">
        <div class="carousel-caption">
        <h5 class="scale-up-center">First slide label</h5>
          <p class="slide-top">Some representative placeholder content for the first slide.</p>
        </div>
      </div>
      <div class="carousel-item" style="background-image: url(assets/img/DogSamples/6.jpeg)">
        <div class="carousel-caption">
        <h5 class="scale-up-center">Second slide label</h5>
          <p class="slide-top">Some representative placeholder content for the second slide.</p>
        </div>
      </div>
      <div class="carousel-item" style="background-image: url(assets/img/DogSamples/7.jpeg)">
        <div class="carousel-caption">
          <h5 class="scale-up-center">Third slide label</h5>
          <p class="slide-top">Some representative placeholder content for the third slide.</p>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</header>
  `,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
