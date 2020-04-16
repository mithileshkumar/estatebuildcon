import { Component, OnInit } from '@angular/core';
import { MailService } from 'src/app/services/mail.service';

@Component({
  selector: 'app-rs-tower',
  templateUrl: './rs-tower.component.html',
  styleUrls: ['./rs-tower.component.css']
})
export class RsTowerComponent implements OnInit {
  floorPlans = [
    '/assets/floor-plans/commercial/rs-tower/1.jpg',
    '/assets/floor-plans/commercial/rs-tower/2.jpg',
    '/assets/floor-plans/commercial/rs-tower/3.jpg'

  ];

  gallery = [
    '/assets/home_images/rs_tower1.jpg',
    '/assets/home_images/rs_tower2.jpg'
  ];

  maps = '/assets/google-maps-images/rs-tower.png';

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
