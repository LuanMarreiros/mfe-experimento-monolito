import { Injectable } from '@angular/core';
import { PrimeiraEtapaComponent } from 'src/app/pages/primeira-etapa/primeira-etapa.component';
import { Etapa } from './interfaces/etapa.interface';

@Injectable({ providedIn: 'root' })
export class EtapaService {
  private _etapas: Etapa[] = [
    {
      estagio: '1',
      completado: false,
      componente: PrimeiraEtapaComponent,
    },
    {
      estagio: '2',
      completado: false,
      componente: PrimeiraEtapaComponent,
    },
    {
      estagio: '3',
      completado: false,
      componente: PrimeiraEtapaComponent,
    },
  ];

  private consultarEtapas() {
    return this._etapas;
  }

  public consultarEtapaAtual(): Etapa {
    const etapaAtual = this.consultarEtapas().find(
      (etapa) => etapa.completado === false,
    );
    return etapaAtual ?? this._etapas[0];
  }

  public avancarEtapa() {
    const etapaAtual = this.consultarEtapaAtual();

    etapaAtual.completado = true;

    return this.consultarEtapaAtual();
  }
}
