import { Component, inject, OnInit } from '@angular/core';
import { ContadorService } from 'src/app/shared/services/contador/contador.service';

@Component({
  selector: 'app-finalizacao',
  templateUrl: './finalizacao.component.html',
  styleUrls: ['./finalizacao.component.scss'],
})
export class FinalizacaoComponent implements OnInit {
  private contadorService = inject(ContadorService);
  private _valorLCP = 0;

  public get tempoExecucao() {
    return this.contadorService.consultarTempoTotal();
  }

  public get tempoCarregamentoPagina() {
    return this.contadorService.consultarTempoDeCarregamentoDaPagina();
  }

  public get displayedColumns() {
    return ['name', 'initiatorType', 'duration'];
  }

  public get valorLCP() {
    return this._valorLCP / 1000;
  }

  public ngOnInit(): void {
    this.consultarLCP();
  }

  private consultarLCP() {
    return this.contadorService.consultarLCP((LCP) => {
      this._valorLCP = LCP;
    });
  }
}
