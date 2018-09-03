import { Directive, ElementRef, Input, OnChanges,  Renderer2 } from '@angular/core';

@Directive({
  selector: '[myClass]'
})
export class MyClassDirective implements OnChanges{
  @Input('myClass') objWithCondition;

  constructor(private element: ElementRef,
              private renderer: Renderer2) { }

  ngOnChanges(){
    for (let className in this.objWithCondition) {
      if(this.objWithCondition[className]){

        this.renderer.addClass(this.element.nativeElement, className);
      }
    }
  }
}
