import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { routes } from 'src/app/app-routing.module';
import { TestDirective } from 'src/app/directives/test-directive';
import { Contact2Component } from 'src/app/pages/contact2/contact2.component';
import { AppComponent } from './app.component';
import { ChildComponent } from './components/child/child.component';
import { GrandChildComponent } from './components/grand-child/grand-child.component';

@NgModule({
  declarations: [AppComponent, ChildComponent, GrandChildComponent, TestDirective],
  imports: [BrowserModule, RouterModule.forRoot(routes), Contact2Component],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
