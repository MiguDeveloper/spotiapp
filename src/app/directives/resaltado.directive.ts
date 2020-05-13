import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  @Input('appResaltado') nuevoColor: string;

  constructor(private el: ElementRef) {
    console.log('Directiva llamada');
    // el.nativeElement.style.background = 'yellow';
  }

  @HostListener('mouseenter') mouseEntro() {
    // console.log(this.nuevoColor);
    this.resaltar(this.nuevoColor || 'yellow');
  }

  @HostListener('mouseleave') mouseOut() {
    this.el.nativeElement.style.backgroundColor = null;
  }

  private resaltar(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
