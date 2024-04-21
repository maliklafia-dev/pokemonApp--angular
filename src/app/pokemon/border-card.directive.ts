import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pkmBorderCard]'
})
export class BorderCardDirective {

  private initialColor: string = '#f5f5f5';
  private defaultColor: string = '#009688';
  private defaultHeight: number = 180;
  private defaultType: string = 'solid';

  constructor(private el: ElementRef) {
    this.setHeight(this.defaultHeight);
    this.setBorder(this.defaultType, this.initialColor);

   }
   @Input('pkmBorderCard') borderColor: string;
   @Input('pkmBorderCard') borderType: string;


   @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderType || this.defaultType, this.borderColor || this.defaultColor);
   }
   
   @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.defaultType, this.initialColor);
   }

  private setHeight(height: number) {
    this.el.nativeElement.style.height = `${height}px`;
  }
  
  private setBorder(type: string, color: string) {
    this.el.nativeElement.style.border = `${type} 4px ${color}`;
  }
  
}
