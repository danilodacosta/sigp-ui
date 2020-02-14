import { API } from './../directives/api.app';
import { EnderecoWeb } from './../dto/enderecoweb.model';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

const ENDPOINT = '/endereco-web';

@Injectable({
    providedIn: 'root'
})
export class CorreiosService {

    constructor(private http: HttpClient) { }

    buscarCep(cep: string): Observable<EnderecoWeb> {
        return this.http.get<EnderecoWeb>(`${API}/${ENDPOINT}/busca-cep/${cep}`);
    }

}
