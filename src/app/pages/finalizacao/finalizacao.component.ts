import { Component, inject } from '@angular/core';
import { ContadorService } from 'src/app/shared/services/contador/contador.service';

@Component({
  selector: 'app-finalizacao',
  templateUrl: './finalizacao.component.html',
  styleUrls: ['./finalizacao.component.scss'],
})
export class FinalizacaoComponent {
  private contadorService = inject(ContadorService);

  public get tempoExecucao() {
    return this.contadorService.consultarTempoTotal();
  }

  public get tempoCarregamentoPagina() {
    return this.contadorService.consultarTempoDeCarregamentoDaPagina();
  }
}
