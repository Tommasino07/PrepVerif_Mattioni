import { Component, Input } from '@angular/core';
import { Email } from '../email' ; // Assumiamo che tu abbia creato una classe Email

@Component({
  selector: 'app-sent-mail',
  templateUrl: './sent-mail.component.html',
  styleUrls: ['./sent-mail.component.css']
})
export class SentMailComponent {
  @Input() email!: Email;
  visible=false;
  esapndi():boolean{
    this.visible = !this.visible
    return false
  }
}
  
  


