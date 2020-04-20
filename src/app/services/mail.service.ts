import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private http: HttpClient) { }

  sendMail(formData) {
    return this.http.post('http://estatebuildcon.com/mail.php', formData.value);
  }
}
