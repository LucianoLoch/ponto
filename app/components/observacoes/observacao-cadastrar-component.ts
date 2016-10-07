import { Component } from '@angular/core';
import { Observacao } from '../.././models/observacao';
import { Apontamento } from '../.././models/apontamento';
import { ObservacaoService } from '../.././services/observacao-service';
import { ApontamentoService } from '../.././services/apontamento-service';
import { OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

@Component({
	selector: 'observacao-cadastrar',
	templateUrl: 'app/views/observacao/cadastrar.html',
	providers: [ ObservacaoService, ApontamentoService ],
	directives: [ ROUTER_DIRECTIVES ]
})
export class ObservacaoCadastrarComponent implements OnInit {

	private observacao: Observacao;
	private apontamentos: Apontamento[];
	private msgErro:string;

	constructor(private router: Router,
		private observacaoService: ObservacaoService, private apontamentoService: ApontamentoService) {
	}

	ngOnInit() {
		this.observacao = new Observacao();
		this.apontamentoService.listarTodos()
				.subscribe(
									apontamentos => this.apontamentos = apontamentos,
									error  => this.msgErro = error);
	}

	cadastrar() {
		this.observacaoService.cadastrar(this.observacao)
			.subscribe(
                	observacao => this.router.navigate(['/observacao-listar']),
                	error => this.msgErro = error);

	}
}
