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
var funcionario_1 = require('../.././models/funcionario');
var funcionario_service_1 = require('../.././services/funcionario-service');
var router_1 = require('@angular/router');
var FuncionarioVisualizarComponent = (function () {
    function FuncionarioVisualizarComponent(route, funcionarioService) {
        this.route = route;
        this.funcionarioService = funcionarioService;
    }
    FuncionarioVisualizarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = +this.route.snapshot.params['id'];
        this.funcionario = new funcionario_1.Funcionario();
        this.funcionarioService.buscarPorId(this.id)
            .subscribe(function (funcionario) { return _this.funcionario = funcionario; }, function (error) { return _this.msgErro = error; });
    };
    FuncionarioVisualizarComponent = __decorate([
        core_1.Component({
            selector: 'funcionario-visualizar',
            templateUrl: 'app/views/funcionarios/visualizar.html',
            providers: [funcionario_service_1.FuncionarioService],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, funcionario_service_1.FuncionarioService])
    ], FuncionarioVisualizarComponent);
    return FuncionarioVisualizarComponent;
}());
exports.FuncionarioVisualizarComponent = FuncionarioVisualizarComponent;
//# sourceMappingURL=funcionario-visualizar-component.js.map