import { Type } from '@angular/core';
import { PrimeiraEtapaComponent } from 'src/app/pages/primeira-etapa/primeira-etapa.component';

export interface Etapa {
  estagio: string;
  completado: boolean;
  componente: Type<PrimeiraEtapaComponent>;
}
