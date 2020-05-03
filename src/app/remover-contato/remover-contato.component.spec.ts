import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoverContatoComponent } from './remover-contato.component';

describe('RemoverContatoComponent', () => {
  let component: RemoverContatoComponent;
  let fixture: ComponentFixture<RemoverContatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoverContatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoverContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
