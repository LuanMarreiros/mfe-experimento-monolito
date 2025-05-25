import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ContadorService {
  private contadorInicial: number | undefined;
  private contadorFinal: number | undefined;

  public iniciarContador() {
    this.contadorInicial = performance.now();
  }

  public finalizarContador() {
    this.contadorFinal = performance.now();
  }

  public consultarTempoTotal() {
    if (this.contadorFinal && this.contadorInicial) {
      return ((this.contadorFinal - this.contadorInicial) / 1000).toFixed(3);
    }

    return 0;
  }

  public consultarTempoDeCarregamentoDaPagina() {
    const entries = performance
      .getEntriesByType('resource')
      .map((entry: object) => {
        if ((entry as PerformanceNavigationTiming).initiatorType === 'script') {
          return entry;
        }

        return;
      });

    return entries.filter((entrie) => entrie !== undefined);
  }
}
