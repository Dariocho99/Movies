import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShearchComponent , movies } from './components/shearch/shearch.component';
import { MatCardModule, MatDialogModule, MatDialogRef} from '@angular/material';
import { MatFormFieldModule} from '@angular/material'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ServiceService} from './service.service';
import { HttpClientModule } from '@angular/common/http'; 

@NgModule({
  declarations: [
    AppComponent,
    ShearchComponent,
    movies,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatDialogModule, 
    HttpClientModule
  ],
  entryComponents:[movies],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
