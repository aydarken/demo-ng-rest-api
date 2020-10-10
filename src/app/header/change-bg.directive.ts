import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appChangeBg]'
})
export class ChangeBgDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.changeBg('gray');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeBg(null);
  }

  private changeBg(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
