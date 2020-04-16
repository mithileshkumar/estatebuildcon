import { Component, OnInit } from '@angular/core';
import { MailService } from 'src/app/services/mail.service';

@Component({
  selector: 'app-estate-emerald',
  templateUrl: './estate-emerald.component.html',
  styleUrls: ['./estate-emerald.component.css']
})
export class EstateEmeraldComponent implements OnInit {

  floorPlans = [
    '/assets/floor-plans/residential/estate-emerald/1.jpg',
    '/assets/floor-plans/residential/estate-emerald/2.jpg',
    '/assets/floor-plans/residential/estate-emerald/3.jpg'
  ];

  gallery = [
    '/assets/compressed-images/estate_emerald.jpg'
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
    this.mail.sendMail(formData);
  }

}
