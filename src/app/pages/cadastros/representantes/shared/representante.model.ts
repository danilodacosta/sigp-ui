import { BaseResourceModel } from 'src/app/shared/models/base-resource.model';

export class Representante extends BaseResourceModel {
  constructor(
    public id?: any,
    public nome?: string,
    public endereco?: string,
    public telefone?: string
  ) {
    super();
  }

  static fromJson(jsonData: any): Representante {
    return Object.assign(new Representante() , jsonData);
  }

}
