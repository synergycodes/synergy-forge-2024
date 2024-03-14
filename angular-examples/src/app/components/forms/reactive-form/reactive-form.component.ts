import { NgFor, NgIf } from '@angular/common';
import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { fromEvent, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [NgIf, NgFor, ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss',
})
export class ReactiveFormComponent implements OnInit, OnDestroy {
  form!: FormGroup;
  disableMessage = true;
  showQuestion = false;

  private onDestroy$ = new Subject<void>();

  readonly programmingLanguages = ['c#', 'javascript', 'java', 'c++'];

  get validTopic(): boolean {
    return this.validateControl('topic');
  }

  get validEmail(): boolean {
    return this.validateControl('email');
  }

  get validName(): boolean {
    return this.validateControl('name');
  }

  get validMessage(): boolean {
    return this.validateControl('message');
  }

  get hobbies(): FormArray {
    return this.form.get('hobbies') as FormArray;
  }

  get hobbyControls(): FormControl[] {
    return (this.form.get('hobbies') as FormArray).controls as FormControl[];
  }

  @ViewChild('fillBtn', { static: true })
  fillBtn!: ElementRef;

  ngOnInit(): void {
    this.createForm();
    this.subscribeFormControls();
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  onReset() {
    this.form.reset({
      topic: 'my Topic after reset',
      message: 'my message after reset',
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      alert('Validation errors appeared');
      this.form.markAllAsTouched();
      return;
    }

    console.log('submitted form data (value): ', this.form.value);
    console.log('submitted form data (raw value): ', this.form.getRawValue());
    this.form.reset();
  }

  onAddHobbyClick() {
    const control = new FormControl('');
    this.hobbies.push(control);
  }

  private getSampleData(): Object {
    return {
      topic: 'test',
      customMessage: false,
      message: 'personal message',
      name: 'Mike Debug',
      email: 'mike.debug@gmail.com',
      favoriteProgrammingLanguage: 'c#',
      hobbies: [],
    };
  }

  private createForm(): void {
    this.form = new FormGroup({
      topic: new FormControl(null, Validators.required),
      customMessage: new FormControl(false),
      message: new FormControl({ value: 'message', disabled: true }, [
        this.messageValidator,
      ]),
      name: new FormControl('my name', [Validators.minLength(4)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      favoriteProgrammingLanguage: new FormControl({
        value: 'c#',
        disabled: false,
      }),
      hobbies: new FormArray([]),
    });
  }

  private validateControl(controlName: string): boolean {
    if (!controlName) {
      return false;
    }

    const control = this.form?.get(controlName) ?? null;
    return (
      control != null &&
      (control.untouched || (control.valid && control.touched))
    );
  }

  private subscribeFormControls(): void {
    this.form
      .get('customMessage')
      ?.valueChanges.pipe(takeUntil(this.onDestroy$))
      .subscribe((value: boolean) => {
        if (value) {
          this.form.get('message')?.enable();
          return;
        }
        this.form.get('message')?.disable();
      });

    this.form
      .get('favoriteProgrammingLanguage')
      ?.valueChanges.pipe(takeUntil(this.onDestroy$))
      .subscribe((value: string) => {
        if (value === 'c++') {
          this.showQuestion = true;
          return;
        }
        this.showQuestion = false;
      });

    fromEvent(this.fillBtn.nativeElement, 'click')
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((event: any) => {
        this.form.patchValue(this.getSampleData());
      });
  }

  private messageValidator(control: AbstractControl): ValidationErrors | null {
    if (!control.value) {
      return null;
    }

    const forbidden = control.value.toLowerCase().includes('ad');

    return forbidden ? { forbiddenMessage: { value: control.value } } : null;
  }
}
