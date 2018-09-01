import {Directive, ElementRef, Input, OnChanges, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[myNgStyle]'
})
export class MyNgStyleDirective implements OnChanges{
  @Input('myNgStyle') styles;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2) {}

  ngOnChanges() {
    for (let style in this.styles) {
      this.renderer.setStyle(this.element.nativeElement, style, this.styles[style]);
    }
  }

}


