import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { BindingComponent } from './binding/binding.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AttributeComponent } from './attribute/attribute.component';
import { PipeComponent } from './pipe/pipe.component';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';


@NgModule({
  declarations: [
    AppComponent,
    StructuralDirectivesComponent,
    BindingComponent,
    PageNotFoundComponent,
    AttributeComponent,
    PipeComponent,
    CustomPipeComponent,
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
