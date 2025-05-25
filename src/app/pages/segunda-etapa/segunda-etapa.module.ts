import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { SegundaEtapaComponent } from './segunda-etapa.component';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';

const modules = [MatButtonModule, MatProgressBarModule];

@NgModule({
  imports: [...modules, HttpClientModule, CommonModule],
  exports: [SegundaEtapaComponent],
  declarations: [SegundaEtapaComponent],
})
export class SegundaEtapaModule {}
