import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <p>
    THE SPECS
Each Doodle Dog is unique, and generated programmaticallly from over 150 features, all of them are incredible, and as in any other collection we will have rarities and special characters.

The Dogs are stored as ERC-1155 tokens on the Ethereum blockchain an the floor price for a Doodle Dog will be 0.086 ETH.
    </p>
    <p>
    Welcome to our community
When you buy a Doodle Dog, you are not just buying a simple piece of digital art, you are getting all the benefits of our community, and believe me we have some crazy ideas for the future, we don’t expect our growth to be only due to FOMO, we want our growth to be due to our social impact, and you will see all these benefits in our roadmap.

WAGMI
    </p>
  `,
  styles: [
  ]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
