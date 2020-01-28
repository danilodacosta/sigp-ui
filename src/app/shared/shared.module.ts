import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadCrumbComponent } from './components/bread-crumb/bread-crumb.component';
import { ServerErrorMessagesComponent } from './components/server-error-messages/server-error-messages.component';
import { PanelContainerComponent } from './components/panel-container/panel-container.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormContainerComponent } from './components/form-container/form-container.component';

// PRIME NG
import {PanelModule} from 'primeng/panel';
import {DialogModule} from 'primeng/dialog';

@NgModule({
  declarations: [
    BreadCrumbComponent,
    ServerErrorMessagesComponent,
    PanelContainerComponent,
    FormContainerComponent
  ],
  imports: [CommonModule, ReactiveFormsModule, RouterModule, PanelModule, DialogModule ],
  exports: [
    // shared Modules
    CommonModule,
    ReactiveFormsModule,
    RouterModule,

    // shared component
    BreadCrumbComponent,
    FormContainerComponent,
    PanelContainerComponent,
    ServerErrorMessagesComponent,

    // prime ng components
    PanelModule,
    DialogModule
  ]
})
export class SharedModule {}
