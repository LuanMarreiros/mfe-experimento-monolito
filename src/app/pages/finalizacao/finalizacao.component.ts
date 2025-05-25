import { Component, inject } from '@angular/core';
import { ContadorService } from 'src/app/shared/services/contador/contador.service';

@Component({
  selector: 'app-finalizacao',
  templateUrl: './finalizacao.component.html',
  styleUrls: ['./finalizacao.component.scss'],
})
export class FinalizacaoComponent {
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
    this.consultarLCP();

    return this._valorLCP / 1000;
  }

  private consultarLCP() {
    return this.contadorService.consultarLCP((LCP) => {
      this._valorLCP = LCP;
    });
  }
}
