import { Component, OnInit } from '@angular/core';
import { MailService } from 'src/app/services/mail.service';

@Component({
  selector: 'app-estate-plaza',
  templateUrl: './estate-plaza.component.html',
  styleUrls: ['./estate-plaza.component.css']
})
export class EstatePlazaComponent implements OnInit {
  mailMessage = '';
  floorPlans = [
    { img: '/assets/compressed-floor-plans/commercial/estate-plaza/1.jpg', details: 'Site Plan & Drainage Plan' },
    { img: '/assets/compressed-floor-plans/commercial/estate-plaza/2.jpg', details: 'Basement Floor Plan Parking' },
    { img: '/assets/compressed-floor-plans/commercial/estate-plaza/3.jpg', details: 'Ground Floor Plan' },
    { img: '/assets/compressed-floor-plans/commercial/estate-plaza/4.jpg', details: 'First Floor Plan' },
    { img: '/assets/compressed-floor-plans/commercial/estate-plaza/5.jpg', details: 'Second To Fourth Floor Plan' },
    { img: '/assets/compressed-floor-plans/commercial/estate-plaza/6.jpg', details: '5th & 6th Floor Plan' },
    { img: '/assets/compressed-floor-plans/commercial/estate-plaza/7.jpg', details: '7th Floor Plan' },
    { img: '/assets/compressed-floor-plans/commercial/estate-plaza/8.jpg', details: 'Roof Terrace Plan' },
  ];

  gallery = [
    '/assets/compressed-images/commercial/com_estate_plaza.jpg'
  ];

  maps = '/assets/google-maps-images/estate-plaza.jpg';

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
