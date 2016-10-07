import { Component } from '@angular/core';
import { Apontamento } from '../.././models/apontamento';
import { ApontamentoService } from '../.././services/apontamento-service';
import { OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'apontamento-visualizar',
	templateUrl: 'app/views/apontamento/visualizar.html',
	providers: [ ApontamentoService ],
	directives: [ ROUTER_DIRECTIVES ]
})
export class ApontamentoVisualizarComponent implements OnInit {

	private id: number;
	private apontamento: Apontamento;
	private msgErro: string;

	constructor(
		private route: ActivatedRoute,
		private apontamentoService: ApontamentoService) {
	}

	ngOnInit() {
		this.id = +this.route.snapshot.params['id'];
		this.apontamento = new Apontamento();
		this.apontamentoService.buscarPorId(this.id)
			.subscribe(
                	apontamento => this.apontamento = apontamento,
                	error => this.msgErro = error);
	}
}
