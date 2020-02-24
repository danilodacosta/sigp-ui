import { BaseResourceModel } from 'src/app/shared/models/base-resource.model';
import { TipoSituacaoEnum } from 'src/app/shared/models/enums/tipo-situacao.enum';
import { Categoria } from '../../categorias/shared/categoria.model';
import { Comunidade } from '../../comunidades/shared/comunidade.model';
import { Visitante } from '../../visitantes/shared/visitante.model';

export class Atendimento extends BaseResourceModel {
  constructor(
    public id?: any,
    public atendente?: string,
    public data?: Date,
    public flag?: boolean,
    public indicacao?: string,
    public prazo?: Date,
    public protocolo?: string,
    public situacao?: TipoSituacaoEnum,
    public solicitacao?: string,
    public categoria?: Categoria,
    public comunidade?: Comunidade,
    public visitante?: Visitante
  ) {
    super();
  }

  static fromJson(jsonData: any): Atendimento {
    return Object.assign(new Atendimento() , jsonData);
  }

}
