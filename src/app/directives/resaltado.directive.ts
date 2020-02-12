import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  @Input('appResaltado') colorResaltado: string;

  constructor(private el: ElementRef) {
    console.log('Load directiva resaltado');
    // el.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseenter') mouseEntro() {
    this.resaltar(this.colorResaltado || 'yellow');
  }

  @HostListener('mouseleave') mouseSalio() {
    this.resaltar('white');
  }

  resaltar(color: string){
    this.el.nativeElement.style.backgroundColor = color;
  }

}
