import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomDir]'
})
export class CustomDirDirective {
  @HostBinding('style.backgroundColor') bg = "pink";
  constructor() { }

  @HostListener('mouseenter') mouseenter() {
    this.bg = "blue";
  }

  @HostListener('mouseleave') mouseleave() {
    this.bg = "pink";
  }

}
