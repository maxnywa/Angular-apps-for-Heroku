import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[bold]'
})
export class BoldDirective implements OnInit{

  @Input ('bold') fontWeight:string;

  ngOnInit(){
    this.elementRef.nativeElement.style.fontWeight = this.fontWeight;
  }
  constructor(
    private elementRef: ElementRef
  ){}

}
