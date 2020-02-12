import { EstadoEnum } from './enums/estado.enum';
export interface Endereco {
  logradouro: string;
  bairro: string;
  cep: string;
  cidade: string;
  numero: string;
  complemento: string;
  estado: EstadoEnum;
}
