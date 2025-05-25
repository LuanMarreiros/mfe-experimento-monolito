import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { TerceiraEtapaComponent } from './terceira-etapa.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';

const modules = [MatButtonModule, MatProgressBarModule];

@NgModule({
  imports: [...modules, HttpClientModule, CommonModule],
  exports: [TerceiraEtapaComponent],
  declarations: [TerceiraEtapaComponent],
})
export class TerceiraEtapaModule {}
