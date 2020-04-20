import { Component, OnInit } from '@angular/core';
import { MailService } from 'src/app/services/mail.service';

@Component({
  selector: 'app-mangal-tower',
  templateUrl: './mangal-tower.component.html',
  styleUrls: ['./mangal-tower.component.css']
})
export class MangalTowerComponent implements OnInit {
  mailMessage = '';
  floorPlans = [
    { img: 'assets/compressed-floor-plans/commercial/mangal-tower/1.jpg', details: 'Ground Floor Plan' },
    { img: 'assets/compressed-floor-plans/commercial/mangal-tower/2.jpg', details: '3rd & 4th Floor Plan' }
  ];

  gallery = [
    '/assets/compressed-images/commercial/com_mangal_tower.jpg'
  ];

  maps = '/assets/google-maps-images/mangal-tower.png';

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
