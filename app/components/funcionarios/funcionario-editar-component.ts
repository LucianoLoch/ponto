import { Component } from '@angular/core';
import { Funcionario } from '../.././models/funcionario';
import { FuncionarioService } from '../.././services/funcionario-service';
import { OnInit } from '@angular/core';
import { Router, ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';

@Component({
	selector: 'funcionario-editar',
	templateUrl: 'app/views/funcionarios/editar.html',
	providers: [ FuncionarioService ],
	directives: [ ROUTER_DIRECTIVES ]
})
export class FuncionarioEditarComponent implements OnInit {

	private id: number;
	private funcionario: Funcionario;
	private msgErro: string;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private funcionarioService: FuncionarioService) {
	}

	ngOnInit() {
		this.id = +this.route.snapshot.params['id'];
		this.funcionario = new Funcionario();
		this.funcionarioService.buscarPorId(this.id)
			.subscribe(
                	funcionario => this.funcionario = funcionario,
                	error => this.msgErro = error);
	}

	atualizar() {
		this.funcionarioService.atualizar(this.funcionario)
			.subscribe(
                	funcionario => this.router.navigate(['/funcionario-listar']),
                	error => this.msgErro = error);
	}
}
