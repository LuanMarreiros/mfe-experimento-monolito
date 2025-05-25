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
    const tempoDeNavegacao = window.performance.getEntriesByType(
      'navigation',
    )[0] as PerformanceNavigationTiming;

    const tempoCarregamento =
      tempoDeNavegacao.loadEventEnd - tempoDeNavegacao.startTime;

    return (tempoCarregamento / 1000).toFixed(3);
  }
}
