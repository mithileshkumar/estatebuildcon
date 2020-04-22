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
    { img: '/assets/compressed-floor-plans/residential/estate-eco-symphony/1.jpg', details: '4BHK 3150 Sq. Ft.' },
    { img: '/assets/compressed-floor-plans/residential/estate-eco-symphony/2.jpg', details: '3BHK 1428 Sq. Ft.' },
    { img: '/assets/compressed-floor-plans/residential/estate-eco-symphony/3.jpg', details: '3BHK 1557 Sq. Ft.' },
    { img: '/assets/compressed-floor-plans/residential/estate-eco-symphony/4.jpg', details: '3BHK 1675 Sq. Ft.' },
    { img: '/assets/compressed-floor-plans/residential/estate-eco-symphony/5.jpg', details: '4BHK 3458 Sq. Ft.' }
  ];

  floorPlans3D = [
    { img: '/assets/compressed-floor-plans/residential/estate-eco-symphony/3d/sf1428.jpg', details: '1428 Sq. Ft.' },
    { img: '/assets/compressed-floor-plans/residential/estate-eco-symphony/3d/sf1557.jpg', details: '1557 Sq. Ft.' },
    { img: '/assets/compressed-floor-plans/residential/estate-eco-symphony/3d/sf1675.jpg', details: '1675 Sq. Ft.' },
    { img: '/assets/compressed-floor-plans/residential/estate-eco-symphony/3d/sf3190.jpg', details: '3190 Sq. Ft.' },
    { img: '/assets/compressed-floor-plans/residential/estate-eco-symphony/3d/sf3458.jpg', details: '3458 Sq. Ft.' }
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
