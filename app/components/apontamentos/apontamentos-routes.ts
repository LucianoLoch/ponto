import { RouterConfig } from '@angular/router';
import { ApontamentoListarComponent } from './apontamento-listar-component';
import { ApontamentoCadastrarComponent } from './apontamento-cadastrar-component';
import { ApontamentoEditarComponent } from './apontamento-editar-component';
import { ApontamentoVisualizarComponent } from './apontamento-visualizar-component';
import { LoginGuard } from '../../login-guard';

export const ApontamentosRoutes: RouterConfig = [
	{
		path: 'apontamento-listar',
		component: ApontamentoListarComponent,
		canActivate: [ LoginGuard ]
	},
	{
		path: 'apontamento-cadastrar',
		component: ApontamentoCadastrarComponent,
		canActivate: [ LoginGuard ]
	},
	{
		path: 'apontamento-editar/:id',
		component: ApontamentoEditarComponent,
		canActivate: [ LoginGuard ]
	},
	{
		path: 'apontamento-visualizar/:id',
		component: ApontamentoVisualizarComponent,
		canActivate: [ LoginGuard ]
	},
	{
		path: '',
		redirectTo: '/apontamento-listar',
		terminal: true
	}
];
