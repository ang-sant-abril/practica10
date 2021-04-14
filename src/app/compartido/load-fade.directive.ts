import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appLoadFade]'
})
export class LoadFadeDirective {

  constructor(private elementRef: ElementRef,
              private renderer: Renderer2) { }

  ngOnInit() {
    setTimeout(() => {
      this.renderer.addClass(this.elementRef.nativeElement, 'show');
    }, 100) 
  }

}
