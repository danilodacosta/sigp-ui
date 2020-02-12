import { BaseResourceModel } from 'src/app/shared/models/base-resource.model';

export class Visitante extends BaseResourceModel {
  constructor(
    public id?: any,
    public nome?: string,
    public cpf?: string,
    public rg?: string,
    public logradouro?: string,
    public bairro?: string,
    public cep?: string,
    public cidade?: string,
    public celular?: string,
    public email?: string,
    public tipo?: string,
    public numero?: string,
    public complemento?: string,
    public estado?: string,
    public sexo?: string

  ) {
    super();
  }

  static fromJson(jsonData: any): Visitante {
    return Object.assign(new Visitante() , jsonData);
  }

}
