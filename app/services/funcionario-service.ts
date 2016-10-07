import { Injectable } from '@angular/core';
import { Funcionario } from '../models/funcionario';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpUtilService } from './http-util-service';

@Injectable()
export class FuncionarioService {

	private path = 'funcionarios';

	constructor(private http: Http, private httpUtil: HttpUtilService) {
	}

	listarTodos(): Observable<Funcionario[]> {

		return this.http.get(this.httpUtil.url(this.path), this.httpUtil.headers())
	                .map(this.httpUtil.extrairDados)
	                .catch(this.httpUtil.processarErros);
	}

	cadastrar(funcionario: Funcionario): Observable<Funcionario> {
		let params = JSON.stringify(funcionario);

    	return this.http.post(this.httpUtil.url(this.path), params,
    					this.httpUtil.headers())
      				.map(this.httpUtil.extrairDados)
	                .catch(this.httpUtil.processarErros);
	}

	atualizar(funcionario: Funcionario) {
		let params = JSON.stringify(funcionario);

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

	buscarPorId(id: number): Observable<Funcionario> {

		return this.http.get(this.httpUtil.url(this.path + '/' + id),
						this.httpUtil.headers())
	                .map(this.httpUtil.extrairDados)
	                .catch(this.httpUtil.processarErros);
	}
}
