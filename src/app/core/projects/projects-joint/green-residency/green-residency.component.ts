import { Component, OnInit } from '@angular/core';
import { MailService } from 'src/app/services/mail.service';

@Component({
  selector: 'app-green-residency',
  templateUrl: './green-residency.component.html',
  styleUrls: ['./green-residency.component.css']
})
export class GreenResidencyComponent implements OnInit {

  floorPlans = [
    '/assets/floor-plans/joint/green_residency/1.jpg',
    '/assets/floor-plans/joint/green_residency/2.jpg',
    '/assets/floor-plans/joint/green_residency/3.jpg',
    '/assets/floor-plans/joint/green_residency/4.jpg'

  ];

  gallery = [
    '/assets/compressed-images/green_residency.jpg',
    '/assets/compressed-images/green_residency1.jpg'
  ];

  maps = '/assets/google-maps-images/green-residency.png';

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
