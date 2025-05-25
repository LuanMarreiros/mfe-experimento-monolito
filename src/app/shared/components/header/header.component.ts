import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Rotas } from 'src/app/enum/rotas.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  private router = inject(Router);

  public reiniciar() {
    this.router.navigateByUrl(Rotas.Home);
  }
}
