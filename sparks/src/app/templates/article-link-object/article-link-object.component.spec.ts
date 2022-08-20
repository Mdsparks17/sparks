import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleLinkObjectComponent } from './article-link-object.component';

describe('ArticleLinkObjectComponent', () => {
  let component: ArticleLinkObjectComponent;
  let fixture: ComponentFixture<ArticleLinkObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleLinkObjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleLinkObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
