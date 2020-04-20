import { Component, OnInit } from '@angular/core';
import { MailService } from 'src/app/services/mail.service';

@Component({
  selector: 'app-estate-emerald',
  templateUrl: './estate-emerald.component.html',
  styleUrls: ['./estate-emerald.component.css']
})
export class EstateEmeraldComponent implements OnInit {
  mailMessage = '';
  floorPlans = [
    { img: '/assets/compressed-floor-plans/residential/estate-emerald/1.jpg', details: 'Flat D' },
    { img: '/assets/compressed-floor-plans/residential/estate-emerald/2.jpg', details: 'Flat A,B,C Detail' },
    { img: '/assets/compressed-floor-plans/residential/estate-emerald/3.jpg', details: 'Flat A,B,C' },
  ];

  gallery = [
    '/assets/compressed-images/residential/com_estate_emerald.jpg'
  ];

  maps = '/assets/google-maps-images/estate-emerald.png';

  scrollToSection(elem) {
    elem.scrollIntoView({ behavior: 'smooth' });
  }

  constructor(private mail: MailService) { }

  ngOnInit() {
  }

  goToLocation(fetchData) {
    fetchData.scrollIntoView();
  }

  onSubmitMail(formData) {
    this.mail.sendMail(formData).subscribe(data => {
      this.mailMessage = "Mail sent successfully";
    }, err => {
      this.mailMessage = 'Mail not sent due to some error';
    });
  }

}
