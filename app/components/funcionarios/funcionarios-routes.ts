import { RouterConfig } from '@angular/router';
import { FuncionarioListarComponent } from './funcionario-listar-component';
import { FuncionarioCadastrarComponent } from './funcionario-cadastrar-component';
import { FuncionarioEditarComponent } from './funcionario-editar-component';
import { FuncionarioVisualizarComponent } from './funcionario-visualizar-component';
import { LoginGuard } from '../../login-guard';

export const FuncionariosRoutes: RouterConfig = [
	{
		path: 'funcionario-listar',
		component: FuncionarioListarComponent,
		canActivate: [ LoginGuard ]
	},
	{
		path: 'funcionario-cadastrar',
		component: FuncionarioCadastrarComponent,
		canActivate: [ LoginGuard ]
	},
	{
		path: 'funcionario-editar/:id',
		component: FuncionarioEditarComponent,
		canActivate: [ LoginGuard ]
	},
	{ 
		path: 'funcionario-visualizar/:id',
		component: FuncionarioVisualizarComponent,
		canActivate: [ LoginGuard ]
	},
	{
		path: '',
		redirectTo: '/funcionario-listar',
		terminal: true
	}
];
