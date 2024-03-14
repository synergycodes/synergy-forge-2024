import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import ContactForm from '../../../models/contact-form.interface';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-template-driven-form',
  standalone: true,
  imports: [FormsModule, NgClass, NgFor],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.scss',
})
export class TemplateDrivenFormComponent {
  @ViewChild('form', { static: false })
  form!: NgForm;

  categories: string[] = ['issue', 'advertisement', 'cv'];

  formData: ContactForm = {
    year: 2022,
  };

  onSubmit() {
    if (this.form.valid) {
      console.log({ ...this.formData });
      this.form.reset();
    }
  }
}
