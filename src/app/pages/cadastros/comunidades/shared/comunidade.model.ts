import { BaseResourceModel } from 'src/app/shared/models/base-resource.model';
import { Representante } from '../../representantes/shared/representante.model';

export class Comunidade extends BaseResourceModel {
  constructor(
    public id?: any,
    public nome?: string,
    public bairro?: string,
    public distrito?: string,
    public representanteId?: number,
    public representante?: Representante,

  ) {
    super();
  }

  static fromJson(jsonData: any): Comunidade {
    debugger;
    return Object.assign(new Comunidade() , jsonData);
  }

}
