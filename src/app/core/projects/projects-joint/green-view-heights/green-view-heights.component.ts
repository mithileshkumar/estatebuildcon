import { Component, OnInit } from '@angular/core';
import { MailService } from 'src/app/services/mail.service';

@Component({
  selector: 'app-green-view-heights',
  templateUrl: './green-view-heights.component.html',
  styleUrls: ['./green-view-heights.component.css']
})
export class GreenViewHeightsComponent implements OnInit {

  floorPlans = [
    '/assets/floor-plans/joint/green_view_heights/1.jpg',
    '/assets/floor-plans/joint/green_view_heights/2.jpg',
    '/assets/floor-plans/joint/green_view_heights/3.jpg',
    '/assets/floor-plans/joint/green_view_heights/4.jpg',
    '/assets/floor-plans/joint/green_view_heights/5.jpg',
    '/assets/floor-plans/joint/green_view_heights/6.jpg',
    '/assets/floor-plans/joint/green_view_heights/7.jpg',
    '/assets/floor-plans/joint/green_view_heights/8.jpg',
    '/assets/floor-plans/joint/green_view_heights/9.jpg',

  ];

  gallery = [
    '/assets/compressed-images/green-view-heights.jpg',
    '/assets/compressed-images/green-view-heights1.jpg',
    '/assets/compressed-images/green-view-heights2.jpg',
    '/assets/compressed-images/green-view-heights3.jpg',
    '/assets/compressed-images/green-view-heights4.jpg'
  ];

  maps = '/assets/google-maps-images/green-view-heights.png';

  scrollToSection(elem) {
    elem.scrollIntoView({ behavior: 'smooth' });
  }


  constructor(private mail: MailService) { }

  ngOnInit() {
  }

  onSubmitMail(formData) {
    this.mail.sendMail(formData);
  }

}
