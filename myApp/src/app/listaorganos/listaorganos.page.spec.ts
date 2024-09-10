import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaorganosPage } from './listaorganos.page';

describe('ListaorganosPage', () => {
  let component: ListaorganosPage;
  let fixture: ComponentFixture<ListaorganosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaorganosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
