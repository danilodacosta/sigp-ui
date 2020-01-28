import { BaseResourceModel } from 'src/app/shared/models/base-resource.model';

export class Produto extends BaseResourceModel {
  constructor(
    public id?: any,
    public descricao?: string,
    public tipo?: string,
    public contaContabil?: number,
    public almoxarifado?: number,
    public precoCompra?: number
  ) {
    super();
  }

  static fromJson(jsonData: any): Produto {
    return Object.assign(new Produto() , jsonData);
  }

}
