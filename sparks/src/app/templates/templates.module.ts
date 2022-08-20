import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ContentContainerComponent } from './content-container/content-container.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ArticleLinkObjectComponent } from './article-link-object/article-link-object.component';
import {MatCardModule} from '@angular/material/card';
import { MainPageContentComponent } from './main-page-content/main-page-content.component';


var templateComponents = [ToolbarComponent, ContentContainerComponent, ArticleLinkObjectComponent, ArticleLinkObjectComponent, MainPageContentComponent]

@NgModule({
  declarations: templateComponents,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule
  ],
  exports: templateComponents
})
export class TemplatesModule { }
