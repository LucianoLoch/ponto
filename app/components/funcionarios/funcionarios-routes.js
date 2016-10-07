"use strict";
var funcionario_listar_component_1 = require('./funcionario-listar-component');
var funcionario_cadastrar_component_1 = require('./funcionario-cadastrar-component');
var funcionario_editar_component_1 = require('./funcionario-editar-component');
var funcionario_visualizar_component_1 = require('./funcionario-visualizar-component');
var login_guard_1 = require('../../login-guard');
exports.FuncionariosRoutes = [
    {
        path: 'funcionario-listar',
        component: funcionario_listar_component_1.FuncionarioListarComponent,
        canActivate: [login_guard_1.LoginGuard]
    },
    {
        path: 'funcionario-cadastrar',
        component: funcionario_cadastrar_component_1.FuncionarioCadastrarComponent,
        canActivate: [login_guard_1.LoginGuard]
    },
    {
        path: 'funcionario-editar/:id',
        component: funcionario_editar_component_1.FuncionarioEditarComponent,
        canActivate: [login_guard_1.LoginGuard]
    },
    {
        path: 'funcionario-visualizar/:id',
        component: funcionario_visualizar_component_1.FuncionarioVisualizarComponent,
        canActivate: [login_guard_1.LoginGuard]
    },
    {
        path: '',
        redirectTo: '/funcionario-listar',
        terminal: true
    }
];
//# sourceMappingURL=funcionarios-routes.js.map