import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ponto-forte',
  templateUrl: './ponto-forte.component.html',
  styleUrls: ['./ponto-forte.component.scss']
})
export class PontoForteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() src = '';
  @Input() title = 'titulo';
  @Input() description = 'descricao';
}
