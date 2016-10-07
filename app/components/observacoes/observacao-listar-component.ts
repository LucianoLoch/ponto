import { Component } from '@angular/core';
import { Observacao } from '../.././models/observacao';
import { ObservacaoService } from '../.././services/observacao-service';
import { OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { ModalUtilComponent } from '../utils/modal-util-component';

@Component({
	selector: 'observacao-listar',
	templateUrl: 'app/views/observacao/listar.html',
	providers: [ ObservacaoService ],
	directives: [ ROUTER_DIRECTIVES, ModalUtilComponent ]
})
export class ObservacaoListarComponent implements OnInit {

	private observacoes: Observacao[];
	private idExcluir: number;
	private msgErro: string;

	constructor(private observacaoService: ObservacaoService) {
	}

	listarTodos() {
		this.observacaoService.listarTodos()
				.subscribe(
                	observacoes => this.observacoes = observacoes,
                	error  => this.msgErro = error);
	}

	ngOnInit() {
		this.listarTodos();
	}

	excluir(id: number) {
 		this.idExcluir = id;
 	}

 	onExcluir() {
 		this.observacaoService.excluir(this.idExcluir)
 			.subscribe(
                	data  => this.listarTodos(),
                	error => this.msgErro = error);
 		this.idExcluir = -1;
 	}
}
