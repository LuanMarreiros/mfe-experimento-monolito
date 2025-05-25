import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerceiraEtapaComponent } from './terceira-etapa.component';

describe('TerceiraEtapaComponent', () => {
  let component: TerceiraEtapaComponent;
  let fixture: ComponentFixture<TerceiraEtapaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TerceiraEtapaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TerceiraEtapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
