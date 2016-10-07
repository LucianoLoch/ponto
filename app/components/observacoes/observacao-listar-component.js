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
var observacao_service_1 = require('../.././services/observacao-service');
var router_1 = require('@angular/router');
var modal_util_component_1 = require('../utils/modal-util-component');
var ObservacaoListarComponent = (function () {
    function ObservacaoListarComponent(observacaoService) {
        this.observacaoService = observacaoService;
    }
    ObservacaoListarComponent.prototype.listarTodos = function () {
        var _this = this;
        this.observacaoService.listarTodos()
            .subscribe(function (observacoes) { return _this.observacoes = observacoes; }, function (error) { return _this.msgErro = error; });
    };
    ObservacaoListarComponent.prototype.ngOnInit = function () {
        this.listarTodos();
    };
    ObservacaoListarComponent.prototype.excluir = function (id) {
        this.idExcluir = id;
    };
    ObservacaoListarComponent.prototype.onExcluir = function () {
        var _this = this;
        this.observacaoService.excluir(this.idExcluir)
            .subscribe(function (data) { return _this.listarTodos(); }, function (error) { return _this.msgErro = error; });
        this.idExcluir = -1;
    };
    ObservacaoListarComponent = __decorate([
        core_1.Component({
            selector: 'observacao-listar',
            templateUrl: 'app/views/observacao/listar.html',
            providers: [observacao_service_1.ObservacaoService],
            directives: [router_1.ROUTER_DIRECTIVES, modal_util_component_1.ModalUtilComponent]
        }), 
        __metadata('design:paramtypes', [observacao_service_1.ObservacaoService])
    ], ObservacaoListarComponent);
    return ObservacaoListarComponent;
}());
exports.ObservacaoListarComponent = ObservacaoListarComponent;
//# sourceMappingURL=observacao-listar-component.js.map