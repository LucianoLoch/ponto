import { Component } from '@angular/core';
import { Funcionario } from '../.././models/funcionario';
import { FuncionarioService } from '../.././services/funcionario-service';
import { OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

@Component({
	selector: 'funcionario-cadastrar',
	templateUrl: 'app/views/funcionarios/cadastrar.html',
	providers: [ FuncionarioService ],
	directives: [ ROUTER_DIRECTIVES ]
})
export class FuncionarioCadastrarComponent implements OnInit {

	private funcionario: Funcionario;
	private msgErro:string;

	constructor(private router: Router,
		private funcionarioService: FuncionarioService) {
	}

	ngOnInit() {
		this.funcionario = new Funcionario();
	}

	cadastrar() {
		this.funcionarioService.cadastrar(this.funcionario)
			.subscribe(
                	funcionario => this.router.navigate(['/funcionario-listar']),
                	error => this.msgErro = error);

	}
}
