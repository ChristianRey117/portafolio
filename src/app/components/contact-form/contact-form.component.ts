import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

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

  onSubmit(): void {
    // Optional: send to backend or mailto
    if (this.email && this.message) {
      const mailto = `mailto:christianreyeshdz117&#64;gmail.com?subject=Contact from portfolio&body=${encodeURIComponent(this.message)}`;
      window.location.href = mailto;
    }
  }
}
