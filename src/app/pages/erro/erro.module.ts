import { PrimeiraEtapaModule } from '../primeira-etapa/primeira-etapa.module';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { SegundaEtapaModule } from '../segunda-etapa/segunda-etapa.module';
import { TerceiraEtapaModule } from '../terceira-etapa/terceira-etapa.module';
import { ErroComponent } from './erro.component';

const modules = [MatButtonModule];

@NgModule({
  imports: [
    ...modules,
    CommonModule,
    SharedModule,
    PrimeiraEtapaModule,
    SegundaEtapaModule,
    TerceiraEtapaModule,
  ],
  exports: [ErroComponent],
  declarations: [ErroComponent],
})
export class ErroModule {}
