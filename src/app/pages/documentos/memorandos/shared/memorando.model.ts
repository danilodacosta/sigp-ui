import { TipoSituacaoEnum } from './../../../../shared/models/enums/tipo-situacao.enum';
import { Categoria } from './../../../cadastros/categorias/shared/categoria.model';
import { BaseResourceModel } from 'src/app/shared/models/base-resource.model';

export class Memorando extends BaseResourceModel {
  constructor(
    public id?: any,
    public destinatario?: string,
    public numero?: number,
    public situacao?: TipoSituacaoEnum,
    public solicitante?: string,
    public categoria?: Categoria,

  ) {
    super();
  }

  static fromJson(jsonData: any): Memorando {
    return Object.assign(new Memorando() , jsonData);
  }

}
