import {Directive, ElementRef, Renderer2} from "@angular/core";

@Directive({selector: '[appStyle]'})
export class StyleDirective {
  constructor(private el: ElementRef, private r: Renderer2) {
    this.r.setStyle(el.nativeElement, 'color', 'blue')
    //el.nativeElement.style.color = 'red'
    console.log(el)
  }
}
