import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.css']
})
export class ClasesComponent implements OnInit {

  valorClase: string;
  propiedades: Object = {
    danger: false
  };

  loading: boolean = false;

  constructor() {
    this.valorClase = 'alert-danger';
  }

  ngOnInit() {
  }

  ejecutar() {
    this.loading = true;
    setTimeout(() => this.loading = false, 3000);
  }

}
