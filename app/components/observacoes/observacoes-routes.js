"use strict";
var observacao_listar_component_1 = require('./observacao-listar-component');
var observacao_cadastrar_component_1 = require('./observacao-cadastrar-component');
var observacao_editar_component_1 = require('./observacao-editar-component');
var observacao_visualizar_component_1 = require('./observacao-visualizar-component');
var login_guard_1 = require('../../login-guard');
exports.ObservacoesRoutes = [
    {
        path: 'observacao-listar',
        component: observacao_listar_component_1.ObservacaoListarComponent,
        canActivate: [login_guard_1.LoginGuard]
    },
    {
        path: 'observacao-cadastrar',
        component: observacao_cadastrar_component_1.ObservacaoCadastrarComponent,
        canActivate: [login_guard_1.LoginGuard]
    },
    {
        path: 'observacao-editar/:id',
        component: observacao_editar_component_1.ObservacaoEditarComponent,
        canActivate: [login_guard_1.LoginGuard]
    },
    {
        path: 'observacao-visualizar/:id',
        component: observacao_visualizar_component_1.ObservacaoVisualizarComponent,
        canActivate: [login_guard_1.LoginGuard]
    },
    {
        path: '',
        redirectTo: '/observacao-listar',
        terminal: true
    }
];
//# sourceMappingURL=observacoes-routes.js.map