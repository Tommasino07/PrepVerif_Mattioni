import { Component, Input } from '@angular/core';
import { Email } from '../email' ; // Assumiamo che tu abbia creato una classe Email

@Component({
  selector: 'app-sent-mail',
  templateUrl: './sent-mail.component.html',
  styleUrls: ['./sent-mail.component.css']
})
export class SentMailComponent {
  @Input() email!: Email;
  expandedIndex: number | null = null;
  specialIndex: number | null = null;

  // Funzione per espandere/chiudere la mail
  toggleExpand(index: number): void {
    this.expandedIndex = this.expandedIndex === index ? null : index;
  }

  // Funzione per cambiare lo stile della mail speciale
  toggleSpecial(index: number): void {
    this.specialIndex = this.specialIndex === index ? null : index;
  }
}
