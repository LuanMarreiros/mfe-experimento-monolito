import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EtapaService } from './../../shared/services/etapa/etapa.service';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  private etapaService = inject(EtapaService);

  public get primeiraEtapaFormGroup() {
    return new FormGroup({
      completado: new FormControl(false, Validators.required),
    });
  }

  public get segundaEtapaFormGroup() {
    return new FormGroup({
      completado: new FormControl(false, Validators.required),
    });
  }

  public get terceiraEtapaFormGroup() {
    return new FormGroup({
      completado: new FormControl(false, Validators.required),
    });
  }

  public get etapaAtual() {
    return this.etapaService.consultarEtapaAtual();
  }

  public ngOnInit(): void {}

  public onFinalizaProcesso(formGroup: FormGroup) {
    formGroup.controls['completado'].setValue(true);

    this.etapaService.avancarEtapa();
  }
}
