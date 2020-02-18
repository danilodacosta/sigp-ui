import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadCrumbComponent } from './components/bread-crumb/bread-crumb.component';
import { ServerErrorMessagesComponent } from './components/server-error-messages/server-error-messages.component';
import { PanelContainerComponent } from './components/panel-container/panel-container.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormContainerComponent } from './components/form-container/form-container.component';

// PIPES
import { KeysPipe } from './pipes/keys.pipe';

// IMASK
import {IMaskModule} from 'angular-imask';

// PRIME NG
import {PanelModule} from 'primeng/panel';
import {DialogModule} from 'primeng/dialog';
import {FieldsetModule} from 'primeng/fieldset';
import {ProgressBarModule} from 'primeng/progressbar';
import {ButtonModule} from 'primeng/button';



@NgModule({
  declarations: [
    BreadCrumbComponent,
    ServerErrorMessagesComponent,
    PanelContainerComponent,
    FormContainerComponent,
    KeysPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    PanelModule,
    DialogModule,
    FieldsetModule,
    ProgressBarModule,
    ButtonModule,
    IMaskModule
  ],
  exports: [
    // shared Modules
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FieldsetModule,
    ProgressBarModule,
    ButtonModule,

    // shared component
    BreadCrumbComponent,
    FormContainerComponent,
    PanelContainerComponent,
    ServerErrorMessagesComponent,

    // pipes
    KeysPipe,

    // imask
    IMaskModule,

    // prime ng components
    PanelModule,
    DialogModule
  ]
})
export class SharedModule {}
