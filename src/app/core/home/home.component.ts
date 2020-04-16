import { Component, OnInit } from '@angular/core';
import { MailService } from 'src/app/services/mail.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private mail: MailService) { }

  ngOnInit() {
  }
  onSubmitMail(formData) {
    this.mail.sendMail(formData);
  }
}
