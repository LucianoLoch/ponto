import { provideRouter, RouterConfig } from '@angular/router';
import { AlunosRoutes } from './components/alunos/alunos-routes';
import { FuncionariosRoutes } from './components/funcionarios/funcionarios-routes';
import { ApontamentosRoutes } from './components/apontamentos/apontamentos-routes';
import { ObservacoesRoutes } from './components/observacoes/observacoes-routes';
import { LoginRoutes } from './components/autenticacao/login-routes';
import { AUTH_PROVIDERS } from './components/autenticacao/login-routes';

export const routes: RouterConfig = [
	...AlunosRoutes,
	...FuncionariosRoutes,
	...ApontamentosRoutes,
	...ObservacoesRoutes,
	...LoginRoutes
];

export const APP_ROUTER_PROVIDERS = [
	provideRouter(routes),
	AUTH_PROVIDERS
];
