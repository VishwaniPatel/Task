import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { BindingComponent } from './binding/binding.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AttributeComponent } from './attribute/attribute.component';
import { CustomPipeComponent } from './pipe/custom-pipe/custom-pipe.component';
import { GenderPipe } from './shared/pipes/gender-pipe/gender.pipe';
import { SharedModule } from './shared/shared.module';
import { PipeModule } from './pipe/pipe.module';


@NgModule({
  declarations: [
    AppComponent,
    StructuralDirectivesComponent,
    BindingComponent,
    PageNotFoundComponent,
    AttributeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
