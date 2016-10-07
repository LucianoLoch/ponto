"use strict";
var apontamento_listar_component_1 = require('./apontamento-listar-component');
var apontamento_cadastrar_component_1 = require('./apontamento-cadastrar-component');
var apontamento_editar_component_1 = require('./apontamento-editar-component');
var apontamento_visualizar_component_1 = require('./apontamento-visualizar-component');
var login_guard_1 = require('../../login-guard');
exports.ApontamentosRoutes = [
    {
        path: 'apontamento-listar',
        component: apontamento_listar_component_1.ApontamentoListarComponent,
        canActivate: [login_guard_1.LoginGuard]
    },
    {
        path: 'apontamento-cadastrar',
        component: apontamento_cadastrar_component_1.ApontamentoCadastrarComponent,
        canActivate: [login_guard_1.LoginGuard]
    },
    {
        path: 'apontamento-editar/:id',
        component: apontamento_editar_component_1.ApontamentoEditarComponent,
        canActivate: [login_guard_1.LoginGuard]
    },
    {
        path: 'apontamento-visualizar/:id',
        component: apontamento_visualizar_component_1.ApontamentoVisualizarComponent,
        canActivate: [login_guard_1.LoginGuard]
    },
    {
        path: '',
        redirectTo: '/apontamento-listar',
        terminal: true
    }
];
//# sourceMappingURL=apontamentos-routes.js.map