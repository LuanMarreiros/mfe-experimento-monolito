import { MatTableModule } from '@angular/material/table';
import { PrimeiraEtapaModule } from '../primeira-etapa/primeira-etapa.module';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { SegundaEtapaModule } from '../segunda-etapa/segunda-etapa.module';
import { TerceiraEtapaModule } from '../terceira-etapa/terceira-etapa.module';
import { FinalizacaoComponent } from './finalizacao.component';
import { MatIconModule } from '@angular/material/icon';

const modules = [MatButtonModule, MatIconModule, MatTableModule];

@NgModule({
  imports: [
    ...modules,
    CommonModule,
    SharedModule,
    PrimeiraEtapaModule,
    SegundaEtapaModule,
    TerceiraEtapaModule,
  ],
  exports: [FinalizacaoComponent],
  declarations: [FinalizacaoComponent],
})
export class FinalizacaoModule {}
