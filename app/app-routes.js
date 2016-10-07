"use strict";
var router_1 = require('@angular/router');
var alunos_routes_1 = require('./components/alunos/alunos-routes');
var funcionarios_routes_1 = require('./components/funcionarios/funcionarios-routes');
var apontamentos_routes_1 = require('./components/apontamentos/apontamentos-routes');
var observacoes_routes_1 = require('./components/observacoes/observacoes-routes');
var login_routes_1 = require('./components/autenticacao/login-routes');
var login_routes_2 = require('./components/autenticacao/login-routes');
exports.routes = alunos_routes_1.AlunosRoutes.concat(funcionarios_routes_1.FuncionariosRoutes, apontamentos_routes_1.ApontamentosRoutes, observacoes_routes_1.ObservacoesRoutes, login_routes_1.LoginRoutes);
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes),
    login_routes_2.AUTH_PROVIDERS
];
//# sourceMappingURL=app-routes.js.map