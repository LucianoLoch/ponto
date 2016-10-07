import { RouterConfig } from '@angular/router';
import { ObservacaoListarComponent } from './observacao-listar-component';
import { ObservacaoCadastrarComponent } from './observacao-cadastrar-component';
import { ObservacaoEditarComponent } from './observacao-editar-component';
import { ObservacaoVisualizarComponent } from './observacao-visualizar-component';
import { LoginGuard } from '../../login-guard';

export const ObservacoesRoutes: RouterConfig = [
	{
		path: 'observacao-listar',
		component: ObservacaoListarComponent,
		canActivate: [ LoginGuard ]
	},
	{
		path: 'observacao-cadastrar',
		component: ObservacaoCadastrarComponent,
		canActivate: [ LoginGuard ]
	},
	{
		path: 'observacao-editar/:id',
		component: ObservacaoEditarComponent,
		canActivate: [ LoginGuard ]
	},
	{
		path: 'observacao-visualizar/:id',
		component: ObservacaoVisualizarComponent,
		canActivate: [ LoginGuard ]
	},
	{
		path: '',
		redirectTo: '/observacao-listar',
		terminal: true
	}
];
