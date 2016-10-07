import { Injectable } from '@angular/core';
import { Apontamento } from '../models/apontamento';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpUtilService } from './http-util-service';

@Injectable()
export class ApontamentoService {

	private path = 'apontamentos';

	constructor(private http: Http, private httpUtil: HttpUtilService) {
	}

	listarTodos(): Observable<Apontamento[]> {

		return this.http.get(this.httpUtil.url(this.path), this.httpUtil.headers())
	                .map(this.httpUtil.extrairDados)
	                .catch(this.httpUtil.processarErros);
	}

	cadastrar(apontamento: Apontamento): Observable<Apontamento> {
		let params = JSON.stringify(apontamento);

    	return this.http.post(this.httpUtil.url(this.path), params,
    					this.httpUtil.headers())
      				.map(this.httpUtil.extrairDados)
	                .catch(this.httpUtil.processarErros);
	}

	atualizar(apontamento: Apontamento) {
		let params = JSON.stringify(apontamento);

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

	buscarPorId(id: number): Observable<Apontamento> {

		return this.http.get(this.httpUtil.url(this.path + '/' + id),
						this.httpUtil.headers())
	                .map(this.httpUtil.extrairDados)
	                .catch(this.httpUtil.processarErros);
	}
}
