import { Component, OnInit } from '@angular/core';
import { MailService } from 'src/app/services/mail.service';

@Component({
  selector: 'app-estate-esquire',
  templateUrl: './estate-esquire.component.html',
  styleUrls: ['./estate-esquire.component.css']
})
export class EstateEsquireComponent implements OnInit {
  mailMessage = '';
  floorPlans = [
    { img: '/assets/compressed-floor-plans/residential/estate-esquire/1.jpg', details: 'Floor Plan - 2BHK' },
    { img: '/assets/compressed-floor-plans/residential/estate-esquire/2.jpg', details: 'Floor Plan - 3BHK' },
    { img: '/assets/compressed-floor-plans/residential/estate-esquire/3.jpg', details: 'Floor Plan - 4BHK' },
  ];

  gallery = [
    '/assets/compressed-images/residential/com_estate-esquire.jpg',
    '/assets/compressed-images/residential/com_estate_esquire1.jpg'
  ];

  maps = '/assets/google-maps-images/estate-esquire.png';

  scrollToSection(elem) {
    elem.scrollIntoView({ behavior: 'smooth' });
  }

  constructor(private mail: MailService) { }

  ngOnInit() {
  }

  onSubmitMail(formData) {
    this.mail.sendMail(formData).subscribe(data => {
      this.mailMessage = "Mail sent successfully";
    }, err => {
      this.mailMessage = 'Mail not sent due to some error';
    });
  }
}
