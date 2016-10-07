import { Component } from '@angular/core';
import { Funcionario } from '../.././models/funcionario';
import { FuncionarioService } from '../.././services/funcionario-service';
import { OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { ModalUtilComponent } from '../utils/modal-util-component';

@Component({
	selector: 'funcionario-listar',
	templateUrl: 'app/views/funcionarios/listar.html',
	providers: [ FuncionarioService ],
	directives: [ ROUTER_DIRECTIVES, ModalUtilComponent ]
})
export class FuncionarioListarComponent implements OnInit {

	private funcionarios: Funcionario[];
	private idExcluir: number;
	private msgErro: string;

	constructor(private funcionarioService: FuncionarioService) {
	}

	listarTodos() {
		this.funcionarioService.listarTodos()
				.subscribe(
                	funcionarios => this.funcionarios = funcionarios,
                	error  => this.msgErro = error);
	}

	ngOnInit() {
		this.listarTodos();
	}

	excluir(id: number) {
 		this.idExcluir = id;
 	}

 	onExcluir() {
 		this.funcionarioService.excluir(this.idExcluir)
 			.subscribe(
                	data  => this.listarTodos(),
                	error => this.msgErro = error);
 		this.idExcluir = -1;
 	}
}
