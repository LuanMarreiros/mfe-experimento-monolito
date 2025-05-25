import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { PrimeiraEtapaComponent } from './primeira-etapa.component';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';

const modules = [MatButtonModule, MatProgressBarModule];

@NgModule({
  imports: [...modules, HttpClientModule, CommonModule],
  exports: [PrimeiraEtapaComponent],
  declarations: [PrimeiraEtapaComponent],
})
export class PrimeiraEtapaModule {}
