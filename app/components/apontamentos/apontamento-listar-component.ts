import { Component } from '@angular/core';
import { Apontamento } from '../.././models/apontamento';
import { ApontamentoService } from '../.././services/apontamento-service';
import { OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { ModalUtilComponent } from '../utils/modal-util-component';

@Component({
	selector: 'apontamento-listar',
	templateUrl: 'app/views/apontamento/listar.html',
	providers: [ ApontamentoService ],
	directives: [ ROUTER_DIRECTIVES, ModalUtilComponent ]
})
export class ApontamentoListarComponent implements OnInit {

	private apontamentos: Apontamento[];
	private idExcluir: number;
	private msgErro: string;

	constructor(private apontamentoService: ApontamentoService) {
	}

	listarTodos() {
		this.apontamentoService.listarTodos()
				.subscribe(
                	apontamentos => this.apontamentos = apontamentos,
                	error  => this.msgErro = error);
	}

	ngOnInit() {
		this.listarTodos();
	}

	excluir(id: number) {
 		this.idExcluir = id;
 	}

 	onExcluir() {
 		this.apontamentoService.excluir(this.idExcluir)
 			.subscribe(
                	data  => this.listarTodos(),
                	error => this.msgErro = error);
 		this.idExcluir = -1;
 	}
}
