import { ContadorService } from './../../shared/services/contador/contador.service';
import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { HttpRequestService } from 'src/app/shared/services/http-request/http-request.service';

@Component({
  selector: 'app-terceira-etapa',
  templateUrl: './terceira-etapa.component.html',
  styleUrls: ['./terceira-etapa.component.scss'],
})
export class TerceiraEtapaComponent implements OnInit {
  @Output() etapaFinalizada = new EventEmitter();

  private httpRequestService = inject(HttpRequestService);
  private contadorService = inject(ContadorService);
  private _mostrarLoading = false;

  public get mostrarLoading() {
    return this._mostrarLoading;
  }

  public ngOnInit(): void {}

  public iniciarProcesso() {
    this._mostrarLoading = true;

    this.httpRequestService.get().subscribe({
      next: () => {
        this.finalizarProcesso();
      },
      error: () => {
        this.finalizarProcesso();
      },
      complete: () => {
        this._mostrarLoading = false;
      },
    });
  }

  public finalizarProcesso() {
    this.contadorService.finalizarContador();
    this.etapaFinalizada.emit(true);
  }
}
