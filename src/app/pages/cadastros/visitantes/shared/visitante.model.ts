import { TipoPessoaEnum } from './../../../../shared/models/enums/tipo-pessoa.enum';
import { Endereco } from './../../../../shared/models/endereco.model';
import { BaseResourceModel } from 'src/app/shared/models/base-resource.model';

export class Visitante extends BaseResourceModel {
  constructor(
    public id?: any,
    public nome?: string,
    public cpf?: string,
    public rg?: string,
    public celular?: string,
    public email?: string,
    public tipo?: TipoPessoaEnum,
    public sexo?: string,
    public endereco?: Endereco

  ) {
    super();
  }

  static fromJson(jsonData: any): Visitante {
    return Object.assign(new Visitante() , jsonData);
  }

}
