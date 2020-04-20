import { Component, OnInit } from '@angular/core';
import { MailService } from 'src/app/services/mail.service';

@Component({
  selector: 'app-estate-esquire2',
  templateUrl: './estate-esquire2.component.html',
  styleUrls: ['./estate-esquire2.component.css']
})
export class EstateEsquire2Component implements OnInit {
  mailMessage = '';
  floorPlans = [
    { img: '/assets/compressed-floor-plans/residential/estate-esquire2/1.jpg', details: 'Floor Plan' },
    { img: '/assets/compressed-floor-plans/residential/estate-esquire2/2.jpg', details: 'Floor Plan - Lobby' }
  ];

  gallery = [
    '/assets/compressed-images/residential/com_estate-esquire2.jpg'
  ];

  maps = '/assets/google-maps-images/estate-esquire2.png';

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
