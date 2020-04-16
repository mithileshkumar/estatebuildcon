import { Component, OnInit } from '@angular/core';
import { MailService } from 'src/app/services/mail.service';

@Component({
  selector: 'app-mangal-tower',
  templateUrl: './mangal-tower.component.html',
  styleUrls: ['./mangal-tower.component.css']
})
export class MangalTowerComponent implements OnInit {
  floorPlans = [
    '/assets/floor-plans/commercial/mangal-tower/1.jpg',
    '/assets/floor-plans/commercial/mangal-tower/2.jpg'

  ];

  gallery = [
    '/assets/compressed-images/mangal_tower.jpg'
  ];

  maps = '/assets/google-maps-images/mangal-tower.png';

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
