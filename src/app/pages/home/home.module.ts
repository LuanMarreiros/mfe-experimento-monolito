import { PrimeiraEtapaModule } from './../primeira-etapa/primeira-etapa.module';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { SegundaEtapaModule } from '../segunda-etapa/segunda-etapa.module';
import { TerceiraEtapaModule } from '../terceira-etapa/terceira-etapa.module';
import { ErroModule } from '../erro/erro.module';
import { MatStepperModule } from '@angular/material/stepper';
import { FinalizacaoModule } from '../finalizacao/finalizacao.module';

const modules = [MatButtonModule, MatStepperModule];

@NgModule({
  imports: [
    ...modules,
    CommonModule,
    SharedModule,
    PrimeiraEtapaModule,
    SegundaEtapaModule,
    TerceiraEtapaModule,
    ErroModule,
    FinalizacaoModule,
  ],
  exports: [HomeComponent],
  declarations: [HomeComponent],
})
export class HomeModule {}
