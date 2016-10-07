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
var observacao_1 = require('../.././models/observacao');
var observacao_service_1 = require('../.././services/observacao-service');
var apontamento_service_1 = require('../.././services/apontamento-service');
var router_1 = require('@angular/router');
var ObservacaoCadastrarComponent = (function () {
    function ObservacaoCadastrarComponent(router, observacaoService, apontamentoService) {
        this.router = router;
        this.observacaoService = observacaoService;
        this.apontamentoService = apontamentoService;
    }
    ObservacaoCadastrarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.observacao = new observacao_1.Observacao();
        this.apontamentoService.listarTodos()
            .subscribe(function (apontamentos) { return _this.apontamentos = apontamentos; }, function (error) { return _this.msgErro = error; });
    };
    ObservacaoCadastrarComponent.prototype.cadastrar = function () {
        var _this = this;
        this.observacaoService.cadastrar(this.observacao)
            .subscribe(function (observacao) { return _this.router.navigate(['/observacao-listar']); }, function (error) { return _this.msgErro = error; });
    };
    ObservacaoCadastrarComponent = __decorate([
        core_1.Component({
            selector: 'observacao-cadastrar',
            templateUrl: 'app/views/observacao/cadastrar.html',
            providers: [observacao_service_1.ObservacaoService, apontamento_service_1.ApontamentoService],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [router_1.Router, observacao_service_1.ObservacaoService, apontamento_service_1.ApontamentoService])
    ], ObservacaoCadastrarComponent);
    return ObservacaoCadastrarComponent;
}());
exports.ObservacaoCadastrarComponent = ObservacaoCadastrarComponent;
//# sourceMappingURL=observacao-cadastrar-component.js.map