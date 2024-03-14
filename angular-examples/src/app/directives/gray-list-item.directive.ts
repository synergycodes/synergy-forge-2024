import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appGrayListItem]',
  standalone: true,
})
export class GrayListItemDirective implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    const liElement = this.el.nativeElement;
    this.renderer.setStyle(liElement, 'color', 'gray');
  }
}
