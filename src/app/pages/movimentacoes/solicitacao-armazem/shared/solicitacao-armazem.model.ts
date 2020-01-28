import { BaseResourceModel } from 'src/app/shared/models/base-resource.model';

export class SolicitacaoArmazem extends BaseResourceModel {
  constructor(
    public id?: number,
    public numero?: string,
    public solicitante?: string,
    public dataEmissao?: string
  ) {
    super();
  }

  static fromJson(jsonData: any): SolicitacaoArmazem {
    return Object.assign(new SolicitacaoArmazem() , jsonData);
  }

}
