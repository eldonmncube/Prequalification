import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';

import { PrequalifictaionWidgetComponent } from './prequalifictaion-widget/prequalifictaion-widget.component';
import { PhoneMaskDirective } from './prequalifictaion-widget/phone-mask.directive';
import { PrequalificationComponent } from './prequalification/prequalification.component';
import { NgxMaskModule } from 'ngx-mask';

const materialModules = [
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
];

@NgModule({
  declarations: [
    AppComponent,
    PhoneMaskDirective,
    PrequalifictaionWidgetComponent,
    PrequalificationComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    materialModules,
    FormsModule,
    ReactiveFormsModule,NgxMaskModule.forRoot()
  ],
  exports: [materialModules, PhoneMaskDirective],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [PrequalifictaionWidgetComponent],
})
export class AppModule {}
