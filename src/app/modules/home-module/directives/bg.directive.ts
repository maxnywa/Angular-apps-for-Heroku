import {Directive, ElementRef, Renderer2, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[bg]',
  // host: {
  //   '(click)': 'onClick()'
  // }
})
export class BgDirective {
  @Input('[bg]') bgColor = 'lime';
  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) {
    console.log(this.bgColor);
    this.renderer.setStyle(this.element.nativeElement, 'background', this.bgColor);
  }

  // onClick(){
  //   console.log(this.bgColor);
  //   this.renderer.setStyle(this.element.nativeElement, 'background', this.bgColor);
  //
  // }

}
