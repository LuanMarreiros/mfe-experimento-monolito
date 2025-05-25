import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { MatButtonModule } from '@angular/material/button';

const modules = [MatToolbarModule, MatIconModule, MatButtonModule];

@NgModule({
  imports: [...modules],
  exports: [HeaderComponent],
  declarations: [HeaderComponent],
})
export class SharedModule {}
