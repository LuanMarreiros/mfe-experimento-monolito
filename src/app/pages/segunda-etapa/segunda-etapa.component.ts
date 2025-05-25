import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { HttpRequestService } from 'src/app/shared/services/http-request/http-request.service';

@Component({
  selector: 'app-segunda-etapa',
  templateUrl: './segunda-etapa.component.html',
  styleUrls: ['./segunda-etapa.component.scss'],
})
export class SegundaEtapaComponent implements OnInit {
  @Output() etapaFinalizada = new EventEmitter();

  private httpRequestService = inject(HttpRequestService);
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
    this.etapaFinalizada.emit(true);
  }
}
