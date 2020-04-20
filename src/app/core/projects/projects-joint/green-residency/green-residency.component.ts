import { Component, OnInit } from '@angular/core';
import { MailService } from 'src/app/services/mail.service';

@Component({
  selector: 'app-green-residency',
  templateUrl: './green-residency.component.html',
  styleUrls: ['./green-residency.component.css']
})
export class GreenResidencyComponent implements OnInit {
  mailMessage = '';
  floorPlans = [
    { img: '/assets/compressed-floor-plans/joint/green-residency/1.jpg', details: 'Block A' },
    { img: '/assets/compressed-floor-plans/joint/green-residency/2.jpg', details: 'Block B & C' },
    { img: '/assets/compressed-floor-plans/joint/green-residency/3.jpg', details: 'Block D' },
    { img: '/assets/compressed-floor-plans/joint/green-residency/4.jpg', details: 'Site Plan' }

  ];

  gallery = [
    '/assets/compressed-images/joint/com_green_residency.jpg'
  ];

  maps = '/assets/google-maps-images/green-residency.png';

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
