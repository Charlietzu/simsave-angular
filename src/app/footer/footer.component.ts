import { Component, OnInit } from '@angular/core';

import {
  faTwitterSquare,
  faFacebookSquare,
  faInstagramSquare,
  faYoutubeSquare,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  faTwitterSquare = faTwitterSquare;
  faFacebookSquare = faFacebookSquare;
  faInstagramSquare = faInstagramSquare;
  faYoutubeSquare = faYoutubeSquare;
  faLinkedin = faLinkedin;
  faEnvelope = faEnvelope;

  constructor() {}

  ngOnInit(): void {}
}
