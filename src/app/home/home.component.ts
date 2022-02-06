import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <body class="d-flex flex-column h-100">
        <main class="flex-shrink-0">
          <!-- Header -->
          <app-header></app-header>
          
        </main>


  <section class="dark">
	<div class="container py-4">
		<h1 class="h1 text-center" id="pageHeaderTitle">HELLO EVERYONE</h1>

		<article class="slide-in-left postcard light blue ">
			<a class="postcard__img_link">
				<img class="postcard__img" src="assets/img/DogSamples/1.jpeg" alt="Image Title" />
			</a>
			<div class="postcard__text t-dark">
				<h1 class="postcard__title blue">Hi! I am ppmontegt_27, and this is the proposal that doodle dog’s brings to you</h1>
				<div class="postcard__bar"></div>
				<div class="postcard__preview-txt">
        We want Doodle Dog’s to be an ambitious community, but that does not mean that we lack a purpose, and our purpose is to create development. This community was born with the idea of bringing development to those who have never had opportunities, we all know the impact that the blockchain created, the blockchain came to turn everything around (transparency, security, credibility) and we love it, we bet everything that the applications of blockchain technology can transform things for many more people, as it did for many of us.

        </div>
			</div>
		</article>
		<article class="postcard dark red">
			<a class="postcard__img_link">
				<img class="postcard__img" src="assets/img/DogSamples/2.jpeg" alt="Image Title" />	
			</a>
			<div class="postcard__text">
				<div class="postcard__bar"></div>
				<div class="postcard__preview-txt">
        Having a Doodle Dog will not only allow you to be part of a super ambitious project, (we have many great ideas) it will also allow you to be a cornerstone for many human development projects for children and youth with limited resources, we seek to have strong alliances with entities that already work in the area of human development in Guatemala, we are committed to this social cause and 50% of the profit will be donated to favor these projects that have been affected by the financial situation of the country, and with this we seek that blockchain technology be recognized, accepted and used for the development of new generations.

        </div>
			</div>
		</article>
		<article class="slide-in-left postcard dark green">
			<a class="postcard__img_link">
				<img class="postcard__img" src="assets/img/DogSamples/3.jpeg" alt="Image Title" />
			</a>
			<div class="postcard__text">
				<h1 class="postcard__title green">CRYPTO BELONGS TO EVERYONE</h1>
				<div class="postcard__bar"></div>
				<div class="postcard__preview-txt">
        For us closing the knowledge gap is essential when it comes to crypto. Everyone have the right to accurate information on crypto assets, and know the benefits.
        </div>
			</div>
		</article>
		<article class="postcard light yellow">
			<a class="postcard__img_link">
				<img class="postcard__img" src="assets/img/DogSamples/4.jpeg" alt="Image Title" />
			</a>
			<div class="postcard__text t-dark">
				<h1 class="postcard__title yellow">VERIFIED SMART CONTRACT ADRESS</h1>
				<div class="postcard__bar"></div>
				<div class="postcard__preview-txt">
        0x99d860791dbc38692d9a65343f6051ba15cbe378
        </div>
			</div>
		</article>
	</div>
</section>
  </body>
  `,
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
