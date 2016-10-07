import { Component } from '@angular/core';
import { Observacao } from '../.././models/observacao';
import { ObservacaoService } from '../.././services/observacao-service';
import { OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'observacao-visualizar',
	templateUrl: 'app/views/observacao/visualizar.html',
	providers: [ ObservacaoService ],
	directives: [ ROUTER_DIRECTIVES ]
})
export class ObservacaoVisualizarComponent implements OnInit {

	private id: number;
	private observacao: Observacao;
	private msgErro: string;

	constructor(
		private route: ActivatedRoute,
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
}
