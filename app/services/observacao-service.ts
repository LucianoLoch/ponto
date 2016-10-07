import { Injectable } from '@angular/core';
import { Observacao } from '../models/observacao';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpUtilService } from './http-util-service';

@Injectable()
export class ObservacaoService {

	private path = 'observacoes';

	constructor(private http: Http, private httpUtil: HttpUtilService) {
	}

	listarTodos(): Observable<Observacao[]> {

		return this.http.get(this.httpUtil.url(this.path), this.httpUtil.headers())
	                .map(this.httpUtil.extrairDados)
	                .catch(this.httpUtil.processarErros);
	}

	cadastrar(observacao: Observacao): Observable<Observacao> {
		let params = JSON.stringify(observacao);

    	return this.http.post(this.httpUtil.url(this.path), params,
    					this.httpUtil.headers())
      				.map(this.httpUtil.extrairDados)
	                .catch(this.httpUtil.processarErros);
	}

	atualizar(observacao: Observacao) {
		let params = JSON.stringify(observacao);

    	return this.http.put(this.httpUtil.url(this.path), params,
    					this.httpUtil.headers())
      				.map(this.httpUtil.extrairDados)
	                .catch(this.httpUtil.processarErros);
	}

	excluir(id: number) {

		return this.http.delete(this.httpUtil.url(this.path + '/' + id),
						this.httpUtil.headers())
	                .map(this.httpUtil.extrairDados)
	                .catch(this.httpUtil.processarErros);
	}

	buscarPorId(id: number): Observable<Observacao> {

		return this.http.get(this.httpUtil.url(this.path + '/' + id),
						this.httpUtil.headers())
	                .map(this.httpUtil.extrairDados)
	                .catch(this.httpUtil.processarErros);
	}
}
