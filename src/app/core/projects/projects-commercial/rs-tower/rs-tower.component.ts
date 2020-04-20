import { Component, OnInit } from '@angular/core';
import { MailService } from 'src/app/services/mail.service';

@Component({
  selector: 'app-rs-tower',
  templateUrl: './rs-tower.component.html',
  styleUrls: ['./rs-tower.component.css']
})
export class RsTowerComponent implements OnInit {
  mailMessage = '';
  floorPlans = [
    { img: '/assets/compressed-floor-plans/commercial/rs-tower/1.jpg', details: 'Ground, First... Floor Plan' },
    { img: '/assets/compressed-floor-plans/commercial/rs-tower/2.jpg', details: 'First Basement Plan' },
    { img: '/assets/compressed-floor-plans/commercial/rs-tower/3.jpg', details: 'Section-X-X' },
  ];

  gallery = [
    '/assets/compressed-images/commercial/com_rs_tower.jpg',
    '/assets/compressed-images/commercial/rs_tower2.jpg'
  ];

  maps = '/assets/google-maps-images/rs-tower.png';

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
