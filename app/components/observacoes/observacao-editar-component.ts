import { Component } from '@angular/core';
import { Observacao } from '../.././models/observacao';
import { ObservacaoService } from '../.././services/observacao-service';
import { OnInit } from '@angular/core';
import { Router, ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';

@Component({
	selector: 'observacao-editar',
	templateUrl: 'app/views/observacoes/editar.html',
	providers: [ ObservacaoService ],
	directives: [ ROUTER_DIRECTIVES ]
})
export class ObservacaoEditarComponent implements OnInit {

	private id: number;
	private observacao: Observacao;
	private msgErro: string;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private observacaoService: ObservacaoService) {
	}

	ngOnInit() {
		this.id = +this.route.snapshot.params['id'];
		this.observacao = new Observacao();
		this.observacaoService.buscarPorId(this.id)
			.subscribe(
                	observacao => this.observacao = observacao,
                	error => this.msgErro = error);
	}

	atualizar() {
		this.observacaoService.atualizar(this.observacao)
			.subscribe(
                	observacao => this.router.navigate(['/observacao-listar']),
                	error => this.msgErro = error);
	}
}
