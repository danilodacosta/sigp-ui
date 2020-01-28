import { Component, OnInit, Input } from '@angular/core';

interface BreadCrumbItem {
  text: string;
  link?: string;
  icon?: string;
}

@Component({
  selector: 'app-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.scss']
})
export class BreadCrumbComponent implements OnInit {

  @Input() items: Array<BreadCrumbItem> = [];

  // tslint:disable-next-line: no-input-rename
  @Input('page-title') pageTitle: string;

  constructor() { }

  ngOnInit() {
  }

  isTheLastItem(item: BreadCrumbItem): boolean {
    const index = this.items.indexOf(item);
    return index + 1 === this.items.length;
  }

}
