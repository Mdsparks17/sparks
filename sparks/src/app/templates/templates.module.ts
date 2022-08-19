import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ContentContainerComponent } from './content-container/content-container.component';
import { MatToolbarModule } from '@angular/material/toolbar';

var templateComponents = [ToolbarComponent, ContentContainerComponent]

@NgModule({
  declarations: templateComponents,
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  exports: templateComponents
})
export class TemplatesModule { }
