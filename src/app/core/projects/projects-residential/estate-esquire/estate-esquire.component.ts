import { Component, OnInit } from '@angular/core';
import { MailService } from 'src/app/services/mail.service';

@Component({
  selector: 'app-estate-esquire',
  templateUrl: './estate-esquire.component.html',
  styleUrls: ['./estate-esquire.component.css']
})
export class EstateEsquireComponent implements OnInit {
  floorPlans = [
    '/assets/floor-plans/residential/estate-esquire/1.jpg',
    '/assets/floor-plans/residential/estate-esquire/2.jpg',
    '/assets/floor-plans/residential/estate-esquire/3.jpg'
  ];

  gallery = [
    '/assets/compressed-images/estate-esquire-one.jpg',
    '/assets/compressed-images/estate-esquire-two.jpg',
    '/assets/compressed-images/estate-esquire-three.jpg'
  ];

  maps = '/assets/google-maps-images/estate-esquire.png';

  scrollToSection(elem) {
    elem.scrollIntoView({ behavior: 'smooth' });
  }

  constructor(private mail: MailService) { }

  ngOnInit() {
  }

  onSubmitMail(formData) {
    this.mail.sendMail(formData);
  }
}
