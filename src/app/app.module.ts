import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { PaymentDetailComponent } from './payment-details/payment-detail/payment-detail.component';
import { PaymentDetailListComponent } from './payment-details/payment-detail-list/payment-detail-list.component';
import { PaymentDetailService } from './shared/payment-detail.service';
import { HelpEntriesComponent } from './help-enties/help-entries/help-entries.component';
import { CommonModule } from '@angular/common';
import { HelpEntriesService } from './shared/help-entries.service';
import { HelpEntryComponent } from './help-enties/help-entry/help-entry.component';
import {AutosizeModule} from 'ngx-autosize';

@NgModule({
  declarations: [
    AppComponent,
    PaymentDetailsComponent,
    PaymentDetailComponent,
    PaymentDetailListComponent,
    HelpEntriesComponent,
    HelpEntryComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    AutosizeModule
  ],
  providers: [PaymentDetailService, HelpEntriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
