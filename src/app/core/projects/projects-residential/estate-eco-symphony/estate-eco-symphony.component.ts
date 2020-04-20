import { Component, OnInit } from '@angular/core';
import { MailService } from 'src/app/services/mail.service';

@Component({
  selector: 'app-estate-eco-symphony',
  templateUrl: './estate-eco-symphony.component.html',
  styleUrls: ['./estate-eco-symphony.component.css']
})
export class EstateEcoSymphonyComponent implements OnInit {
  mailMessage = '';
  floorPlans = [
    { img: '/assets/compressed-floor-plans/residential/estate-eco-symphony/1.jpg', details: 'Site Plan & Drainage Plan' },
    { img: '/assets/compressed-floor-plans/residential/estate-eco-symphony/2.jpg', details: 'Basement Floor Plan Parking' },
    { img: '/assets/compressed-floor-plans/residential/estate-eco-symphony/3.jpg', details: 'Ground Floor Plan' },
    { img: '/assets/compressed-floor-plans/residential/estate-eco-symphony/4.jpg', details: 'First Floor Plan' },
    { img: '/assets/compressed-floor-plans/residential/estate-eco-symphony/5.jpg', details: 'Second To Fourth Floor Plan' },
    { img: '/assets/compressed-floor-plans/residential/estate-eco-symphony/6.jpg', details: '5th & 6th Floor Plan' }
  ];

  gallery = [
    '/assets/compressed-images/residential/com_estate_eco_symphony.jpg',
    '/assets/compressed-images/residential/com_estate_eco_symphony_1.jpg',
    '/assets/compressed-images/residential/com_estate_eco_symphony_2.jpg',
    '/assets/compressed-images/residential/com_estate_eco_symphony_3.jpg',
    '/assets/compressed-images/residential/com_estate_eco_symphony_4.jpg',
    '/assets/compressed-images/residential/com_estate_eco_symphony_5.jpg'
  ];

  maps = '/assets/google-maps-images/estate-eco-symphony.png';

  brochure = '/assets/ebrochure.pdf';

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
