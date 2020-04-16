import { Component, OnInit } from '@angular/core';
import { MailService } from 'src/app/services/mail.service';

@Component({
  selector: 'app-skydale',
  templateUrl: './skydale.component.html',
  styleUrls: ['./skydale.component.css']
})
export class SkydaleComponent implements OnInit {

  floorPlans = [
    '/assets/floor-plans/joint/skydale/1.jpg',
    '/assets/floor-plans/joint/skydale/2.jpg',
    '/assets/floor-plans/joint/skydale/3.jpg',
    '/assets/floor-plans/joint/skydale/4.jpg'

  ];

  gallery = [
    '/assets/compressed-images/skydale.jpg',
    '/assets/compressed-images/skydale1.jpg',
    '/assets/compressed-images/skydale2.jpg',
    '/assets/compressed-images/skydale3.jpg'
  ];

  maps = '/assets/google-maps-images/skydale.png';

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
