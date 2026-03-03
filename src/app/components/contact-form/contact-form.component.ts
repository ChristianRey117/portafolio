import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, InputTextModule, ButtonModule],
})
export class ContactFormComponent {
  name = '';
  email = '';
  message = '';

  isLoading = false;

  constructor(private _messageService: MessageService) {}

  onSubmit(event: any): void {
    event.preventDefault();
    var data = new FormData(event.target);
    this.isLoading = true;
    fetch(event.target.action, {
      method: 'POST',
      body: data,
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          this._messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Message sent successfully',
            life: 5000,
          });
        } else {
          this._messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Message failed to send',
            life: 5000,
          });
        }
      })
      .catch((error) => {})
      .finally(() => {
        this.isLoading = false;
      });
  }
}
