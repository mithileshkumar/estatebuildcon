import { Component, OnInit } from '@angular/core';
import { MailService } from 'src/app/services/mail.service';

@Component({
  selector: 'app-estate-esquire2',
  templateUrl: './estate-esquire2.component.html',
  styleUrls: ['./estate-esquire2.component.css']
})
export class EstateEsquire2Component implements OnInit {


  floorPlans = [
    '/assets/floor-plans/residential/estate-esquire2/1.jpg',
    '/assets/floor-plans/residential/estate-esquire2/2.jpg'
  ];

  gallery = [
    '/assets/compressed-images/estate-esquire2.jpg',
    '/assets/compressed-images/estate-esquire2-1.jpg'
  ];

  maps = '/assets/google-maps-images/estate-esquire2.png';

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
