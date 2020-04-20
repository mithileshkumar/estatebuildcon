import { Component, OnInit } from '@angular/core';
import { MailService } from 'src/app/services/mail.service';

@Component({
  selector: 'app-skydale',
  templateUrl: './skydale.component.html',
  styleUrls: ['./skydale.component.css']
})
export class SkydaleComponent implements OnInit {
  mailMessage = '';
  floorPlans = [
    { img: '/assets/compressed-floor-plans/joint/skydale/1.jpg', details: 'Floor Plan - 2BHK' },
    { img: '/assets/compressed-floor-plans/joint/skydale/2.jpg', details: 'Floor Plan - 2BHK' },
    { img: '/assets/compressed-floor-plans/joint/skydale/3.jpg', details: 'Floor Plan - 2BHK' },
    { img: '/assets/compressed-floor-plans/joint/skydale/4.jpg', details: 'Floor Plan - 2BHK' }

  ];

  gallery = [
    '/assets/compressed-images/joint/com_skydale.jpg'
  ];

  maps = '/assets/google-maps-images/skydale.png';

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
