import { Component, OnInit, Input } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-panel-container',
  templateUrl: './panel-container.component.html',
  styleUrls: ['./panel-container.component.scss']
})
export class PanelContainerComponent implements OnInit {
  // tslint:disable-next-line: no-input-rename
  @Input('panel-title') panelTitle: string;
  // tslint:disable-next-line: no-input-rename
  @Input('show-button') showButton = true;
  // tslint:disable-next-line: no-input-rename
  @Input('button-icon') buttonIcon: string;
  // tslint:disable-next-line: no-input-rename
  @Input('button-text') buttonText: string;
  // tslint:disable-next-line: no-input-rename
  @Input('button-link') buttonLink: string;

  constructor() {}

  ngOnInit() {
    $(document).ready(() => {
      $('a.fullscreen-link').click(() => {
        $('div.ibox').toggleClass('ibox-fullscreen');
      });
    });
  }
}
