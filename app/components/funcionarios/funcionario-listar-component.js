"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var funcionario_service_1 = require('../.././services/funcionario-service');
var router_1 = require('@angular/router');
var modal_util_component_1 = require('../utils/modal-util-component');
var FuncionarioListarComponent = (function () {
    function FuncionarioListarComponent(funcionarioService) {
        this.funcionarioService = funcionarioService;
    }
    FuncionarioListarComponent.prototype.listarTodos = function () {
        var _this = this;
        this.funcionarioService.listarTodos()
            .subscribe(function (funcionarios) { return _this.funcionarios = funcionarios; }, function (error) { return _this.msgErro = error; });
    };
    FuncionarioListarComponent.prototype.ngOnInit = function () {
        this.listarTodos();
    };
    FuncionarioListarComponent.prototype.excluir = function (id) {
        this.idExcluir = id;
    };
    FuncionarioListarComponent.prototype.onExcluir = function () {
        var _this = this;
        this.funcionarioService.excluir(this.idExcluir)
            .subscribe(function (data) { return _this.listarTodos(); }, function (error) { return _this.msgErro = error; });
        this.idExcluir = -1;
    };
    FuncionarioListarComponent = __decorate([
        core_1.Component({
            selector: 'funcionario-listar',
            templateUrl: 'app/views/funcionarios/listar.html',
            providers: [funcionario_service_1.FuncionarioService],
            directives: [router_1.ROUTER_DIRECTIVES, modal_util_component_1.ModalUtilComponent]
        }), 
        __metadata('design:paramtypes', [funcionario_service_1.FuncionarioService])
    ], FuncionarioListarComponent);
    return FuncionarioListarComponent;
}());
exports.FuncionarioListarComponent = FuncionarioListarComponent;
//# sourceMappingURL=funcionario-listar-component.js.map