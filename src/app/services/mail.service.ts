import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private http: HttpClient) { }

  sendMail(formData) {
    this.http.post('http://estatebuildcon.com/mail.php', formData.value).subscribe(data => {
      console.log('Mail sent successfully');
    }, err => {
      console.log('Mail not sent due to some error');
    });
  }
}
