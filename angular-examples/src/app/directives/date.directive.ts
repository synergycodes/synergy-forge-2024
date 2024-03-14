import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appDate]',
})
export class DateDirective implements OnInit {
  @Input()
  appDate: Date = new Date(Date.now());

  private dateDescription!: HTMLInputElement;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.dateDescription = this.renderer.createElement('input');
    this.renderer.setStyle(this.dateDescription, 'color', 'red');
  }

  @HostListener('mouseenter')
  mouseEnter(eventData: Event) {
    (this.dateDescription as any).value = this.appDate.getFullYear();
    this.renderer.appendChild(this.el.nativeElement, this.dateDescription);
  }

  @HostListener('mouseleave')
  mouseLeave(eventData: Event) {
    this.renderer.removeChild(this.el.nativeElement, this.dateDescription);
  }
}
