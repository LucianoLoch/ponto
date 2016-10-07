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
var apontamento_1 = require('../.././models/apontamento');
var apontamento_service_1 = require('../.././services/apontamento-service');
var funcionario_1 = require('../.././models/funcionario');
var funcionario_service_1 = require('../.././services/funcionario-service');
var router_1 = require('@angular/router');
var ApontamentoEditarComponent = (function () {
    function ApontamentoEditarComponent(route, router, apontamentoService, funcionarioService) {
        this.route = route;
        this.router = router;
        this.apontamentoService = apontamentoService;
        this.funcionarioService = funcionarioService;
    }
    ApontamentoEditarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = +this.route.snapshot.params['id'];
        this.apontamento = new apontamento_1.Apontamento();
        this.funcionario = new funcionario_1.Funcionario();
        this.apontamentoService.buscarPorId(this.id)
            .subscribe(function (apontamento) { return _this.apontamento = apontamento; }, function (error) { return _this.msgErro = error; });
        this.idFuncionario = this.apontamento.funcionario;
        this.funcionarioService.buscarPorId(this.idFuncionario)
            .subscribe(function (funcionario) { return _this.funcionario = funcionario; }, function (error) { return _this.msgErro = error; });
    };
    ApontamentoEditarComponent.prototype.atualizar = function () {
        var _this = this;
        this.apontamentoService.atualizar(this.apontamento)
            .subscribe(function (apontamento) { return _this.router.navigate(['/apontamento-listar']); }, function (error) { return _this.msgErro = error; });
    };
    ApontamentoEditarComponent = __decorate([
        core_1.Component({
            selector: 'apontamento-editar',
            templateUrl: 'app/views/apontamento/editar.html',
            providers: [apontamento_service_1.ApontamentoService, funcionario_service_1.FuncionarioService],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, apontamento_service_1.ApontamentoService, funcionario_service_1.FuncionarioService])
    ], ApontamentoEditarComponent);
    return ApontamentoEditarComponent;
}());
exports.ApontamentoEditarComponent = ApontamentoEditarComponent;
//# sourceMappingURL=apontamento-editar-component.js.map