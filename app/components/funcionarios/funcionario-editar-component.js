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
var FuncionarioEditarComponent = (function () {
    function FuncionarioEditarComponent(route, router, funcionarioService) {
        this.route = route;
        this.router = router;
        this.funcionarioService = funcionarioService;
    }
    FuncionarioEditarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = +this.route.snapshot.params['id'];
        this.funcionario = new funcionario_1.Funcionario();
        this.funcionarioService.buscarPorId(this.id)
            .subscribe(function (funcionario) { return _this.funcionario = funcionario; }, function (error) { return _this.msgErro = error; });
    };
    FuncionarioEditarComponent.prototype.atualizar = function () {
        var _this = this;
        this.funcionarioService.atualizar(this.funcionario)
            .subscribe(function (funcionario) { return _this.router.navigate(['/funcionario-listar']); }, function (error) { return _this.msgErro = error; });
    };
    FuncionarioEditarComponent = __decorate([
        core_1.Component({
            selector: 'funcionario-editar',
            templateUrl: 'app/views/funcionarios/editar.html',
            providers: [funcionario_service_1.FuncionarioService],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, funcionario_service_1.FuncionarioService])
    ], FuncionarioEditarComponent);
    return FuncionarioEditarComponent;
}());
exports.FuncionarioEditarComponent = FuncionarioEditarComponent;
//# sourceMappingURL=funcionario-editar-component.js.map