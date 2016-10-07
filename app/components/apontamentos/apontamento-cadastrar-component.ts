import { Component } from '@angular/core';

import { Injectable } from '@angular/core';

import { Apontamento } from '../.././models/apontamento';
import { Funcionario } from '../.././models/funcionario';
import { ApontamentoService } from '../.././services/apontamento-service';
import { FuncionarioService } from '../.././services/funcionario-service';
import { OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

@Component({
	selector: 'apontamento-cadastrar',
	templateUrl: 'app/views/apontamento/cadastrar.html',
	providers: [ ApontamentoService, FuncionarioService],
	directives: [ ROUTER_DIRECTIVES ]
})

export class ApontamentoCadastrarComponent implements OnInit {

	private apontamento: Apontamento;
	private funcionarios: Funcionario[];
	private msgErro:string;

	constructor(private router: Router,
		private apontamentoService: ApontamentoService, private funcionarioService: FuncionarioService) {

	}

	ngOnInit() {
		this.apontamento = new Apontamento();
		this.funcionarioService.listarTodos()
				.subscribe(
                	funcionarios => this.funcionarios = funcionarios,
                	error  => this.msgErro = error);
	}

	cadastrar() {
		this.apontamentoService.cadastrar(this.apontamento)
			.subscribe(
                	apontamento => this.router.navigate(['/apontamento-listar']),
                	error => this.msgErro = error);

	}
}
