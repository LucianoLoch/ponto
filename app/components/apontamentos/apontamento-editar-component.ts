import { Component } from '@angular/core';
import { Apontamento } from '../.././models/apontamento';
import { ApontamentoService } from '../.././services/apontamento-service';
import { Funcionario } from '../.././models/funcionario';
import { FuncionarioService } from '../.././services/funcionario-service';
import { OnInit } from '@angular/core';
import { Router, ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';

@Component({
	selector: 'apontamento-editar',
	templateUrl: 'app/views/apontamento/editar.html',
	providers: [ ApontamentoService, FuncionarioService ],
	directives: [ ROUTER_DIRECTIVES ]
})
export class ApontamentoEditarComponent implements OnInit {

	private id: number;
	private apontamento: Apontamento;
	private funcionario: Funcionario;
	private idFuncionario: number;
	private msgErro: string;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private apontamentoService: ApontamentoService,
		private funcionarioService: FuncionarioService) {
	}

	ngOnInit() {
		this.id = +this.route.snapshot.params['id'];
		this.apontamento = new Apontamento();
		this.funcionario = new Funcionario();
		this.apontamentoService.buscarPorId(this.id)
			.subscribe(
                	apontamento => this.apontamento = apontamento,
                	error => this.msgErro = error);

		this.idFuncionario = this.apontamento.funcionario;

		this.funcionarioService.buscarPorId(this.idFuncionario)
			.subscribe(
									funcionario => this.funcionario = funcionario,
							    error => this.msgErro = error);

	}

	atualizar() {
		this.apontamentoService.atualizar(this.apontamento)
			.subscribe(
                	apontamento => this.router.navigate(['/apontamento-listar']),
                	error => this.msgErro = error);
	}
}
