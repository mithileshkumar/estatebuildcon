import { Component, OnInit } from '@angular/core';
import { MailService } from 'src/app/services/mail.service';

@Component({
  selector: 'app-green-view-heights',
  templateUrl: './green-view-heights.component.html',
  styleUrls: ['./green-view-heights.component.css']
})
export class GreenViewHeightsComponent implements OnInit {
  mailMessage = '';
  floorPlans = [
    { img: '/assets/compressed-floor-plans/joint/green-view-heights/1.jpg', details: 'Building - B' },
    { img: '/assets/compressed-floor-plans/joint/green-view-heights/2.jpg', details: 'Building - B' },
    { img: '/assets/compressed-floor-plans/joint/green-view-heights/3.jpg', details: 'Building - C' },
    { img: '/assets/compressed-floor-plans/joint/green-view-heights/4.jpg', details: 'Building - C' },
    { img: '/assets/compressed-floor-plans/joint/green-view-heights/5.jpg', details: 'Building - D' },
    { img: '/assets/compressed-floor-plans/joint/green-view-heights/6.jpg', details: 'Building - D' },
    { img: '/assets/compressed-floor-plans/joint/green-view-heights/7.jpg', details: 'Floor Plan' },
    { img: '/assets/compressed-floor-plans/joint/green-view-heights/8.jpg', details: 'Floor Plan' },
    { img: '/assets/compressed-floor-plans/joint/green-view-heights/9.jpg', details: 'Floor Plan' }

  ];

  gallery = [
    '/assets/compressed-images/joint/com_green_view_heights.jpg'
  ];

  maps = '/assets/google-maps-images/green-view-heights.png';

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
