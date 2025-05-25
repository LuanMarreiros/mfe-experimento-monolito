import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  inject,
} from '@angular/core';
import { ContadorService } from 'src/app/shared/services/contador/contador.service';

@Component({
  selector: 'app-finalizacao',
  templateUrl: './finalizacao.component.html',
  styleUrls: ['./finalizacao.component.scss'],
})
export class FinalizacaoComponent implements AfterViewInit {
  private contadorService = inject(ContadorService);
  private changeDetector = inject(ChangeDetectorRef);
  public exibir = false;

  public valorLCP = 0;

  public get tempoExecucao() {
    return this.contadorService.consultarTempoTotal();
  }

  public get tempoCarregamentoPagina() {
    return this.contadorService.consultarTempoDeCarregamentoDaPagina();
  }

  public get displayedColumns() {
    return ['name', 'initiatorType', 'duration'];
  }

  public ngAfterViewInit(): void {
    this.realizarConsultaLCP();
  }

  private realizarConsultaLCP(): void {
    new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        this.valorLCP = (entry as PerformanceEntry).startTime;
        this.exibir = true;
        this.changeDetector.detectChanges();
      }
    }).observe({ type: 'largest-contentful-paint', buffered: true });
  }
}
