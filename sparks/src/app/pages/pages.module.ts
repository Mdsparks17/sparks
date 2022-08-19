import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { ArticlePageComponent } from './article-page/article-page.component';
import { TemplatesModule } from '../templates/templates.module';

var pageComponents = [MainPageComponent, ArticlePageComponent];

@NgModule({
  declarations: pageComponents,
  imports: [
    CommonModule,
    TemplatesModule
  ],
  exports: pageComponents
})
export class PagesModule { }
