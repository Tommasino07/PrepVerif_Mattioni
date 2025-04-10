import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Email } from './email';
import { SentMailComponent } from './sent-mail/sent-mail.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SentMailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PrepVerifMattioni';
  emailvett: Email[]=[];
  addEmail(email :HTMLInputElement, oggetto :HTMLInputElement) : boolean
  {
    let nuova_email = new Email(oggetto.value,"", email.value);
    this.emailvett.push(nuova_email);
    console.log(email.value)
    return false;
  }
}


