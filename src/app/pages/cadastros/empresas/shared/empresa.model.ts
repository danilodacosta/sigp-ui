import { BaseResourceModel } from 'src/app/shared/models/base-resource.model';

export class Empresa extends BaseResourceModel {
  constructor(
    public id?: any,
    public cnpj?: string,
    public razao?: string,
    public representante?: string,
    public endereco?: string,
    public email?: string,
    public telefone?: string
  ) {
    super();
  }

  static fromJson(jsonData: any): Empresa {
    return Object.assign(new Empresa() , jsonData);
  }

}
