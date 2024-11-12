import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantdataComponent } from './participantdata.component';

describe('ParticipantdataComponent', () => {
  let component: ParticipantdataComponent;
  let fixture: ComponentFixture<ParticipantdataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParticipantdataComponent]
    });
    fixture = TestBed.createComponent(ParticipantdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
