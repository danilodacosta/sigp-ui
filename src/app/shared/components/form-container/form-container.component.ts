import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Mascaras } from '../../directives/mascaras';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.scss']
})
export class FormContainerComponent implements OnInit {

  // tslint:disable-next-line: no-input-rename
  @Input('form-control') formControl: FormControl;

  @Input() showTip: boolean = true;

  @Input() label: string;

  @Input() for: string;

  constructor() { }

  ngOnInit() {
  }


  public get errorMessage(): string | null {
    if (this.mustShowErrorMessage()) {
      return this.getErrorMessage();
    } else {
      return null;
    }

  }

  private mustShowErrorMessage(): boolean {
    return this.formControl.invalid && this.formControl.touched;
  }

  private getErrorMessage(): string | null {

    if (this.formControl.errors.required) {
      return 'Campo Obrigatório';

    } else if (this.formControl.errors.email) {
      return 'Formato de email inválido';

    } else if (this.formControl.errors.minlength) {
      const requiredLength = this.formControl.errors.minlength.requiredLength;
      return `O campo deve ter no mínino ${requiredLength} caracteres`;

    } else if (this.formControl.errors.maxlength) {
      const requiredLength = this.formControl.errors.maxlength.requiredLength;
      return `O campo deve ter no máximo ${requiredLength} caracteres`;

    } else if (this.formControl.errors.pattern) {

      const numberFormat = Mascaras.numberPattern.toString();

      if (this.formControl.errors.pattern.requiredPattern === numberFormat) {
          return `Valor inválido`;
        }
      }
  }

  hasSuccess(): boolean {
    return this.formControl.valid && (this.formControl.dirty || this.formControl.touched);
  }

  hasError(): boolean {
    return this.formControl.invalid && (this.formControl.dirty || this.formControl.touched);
  }


}
