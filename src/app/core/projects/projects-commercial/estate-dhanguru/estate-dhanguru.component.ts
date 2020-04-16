import { Component, OnInit } from '@angular/core';
import { MailService } from 'src/app/services/mail.service';

@Component({
  selector: 'app-estate-dhanguru',
  templateUrl: './estate-dhanguru.component.html',
  styleUrls: ['./estate-dhanguru.component.css']
})
export class EstateDhanguruComponent implements OnInit {
  floorPlans = [
    '/assets/floor-plans/commercial/estate-dhanguru/1.jpg',
    '/assets/floor-plans/commercial/estate-dhanguru/2.jpg'

  ];

  gallery = [
    '/assets/home_images/estate_dhanguru.jpg'
  ];

  maps = '/assets/google-maps-images/estate-dhanguru.png';

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
