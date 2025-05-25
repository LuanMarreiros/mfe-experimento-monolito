import { Component, inject, OnInit } from '@angular/core';
import { ContadorService } from './shared/services/contador/contador.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private contadorService = inject(ContadorService);

  public ngOnInit(): void {
    this.contadorService.iniciarContador();
  }
}
