import { TipoSituacaoEnum } from '../../../../shared/models/enums/tipo-situacao.enum';
import { Categoria } from '../../../cadastros/categorias/shared/categoria.model';
import { BaseResourceModel } from 'src/app/shared/models/base-resource.model';

export class Oficio extends BaseResourceModel {
  constructor(
    public id?: any,
    public data?: Date,
    public assunto?: string,
    public sequencia?: string,
    public destino?: string,
    public situacao?: TipoSituacaoEnum,
    public responsavel?: string,
    public resumo?: string,

  ) {
    super();
  }

  static fromJson(jsonData: any): Oficio {
    return Object.assign(new Oficio() , jsonData);
  }

}
