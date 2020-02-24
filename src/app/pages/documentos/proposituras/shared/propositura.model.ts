import { TipoSituacaoEnum } from '../../../../shared/models/enums/tipo-situacao.enum';
import { Categoria } from '../../../cadastros/categorias/shared/categoria.model';
import { BaseResourceModel } from 'src/app/shared/models/base-resource.model';

export class Propositura extends BaseResourceModel {
  constructor(
    public id?: any,
    public assunto?: string,
    public autoria?: string,
    public bairro?: string,
    public rua?: string,
    public tipo?: string,
    public protocolo?: string,
    public situacao?: TipoSituacaoEnum,
    public solicitante?: string,
    public resumo?: string,
    public categoria?: Categoria,

  ) {
    super();
  }

  static fromJson(jsonData: any): Propositura {
    return Object.assign(new Propositura() , jsonData);
  }

}
