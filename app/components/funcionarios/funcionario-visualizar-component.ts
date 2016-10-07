import { Component } from '@angular/core';
import { Funcionario } from '../.././models/funcionario';
import { FuncionarioService } from '../.././services/funcionario-service';
import { OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'funcionario-visualizar',
	templateUrl: 'app/views/funcionarios/visualizar.html',
	providers: [ FuncionarioService ],
	directives: [ ROUTER_DIRECTIVES ]
})
export class FuncionarioVisualizarComponent implements OnInit {

	private id: number;
	private funcionario: Funcionario;
	private msgErro: string;

	constructor(
		private route: ActivatedRoute,
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
}
