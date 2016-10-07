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
var apontamento_service_1 = require('../.././services/apontamento-service');
var router_1 = require('@angular/router');
var modal_util_component_1 = require('../utils/modal-util-component');
var ApontamentoListarComponent = (function () {
    function ApontamentoListarComponent(apontamentoService) {
        this.apontamentoService = apontamentoService;
    }
    ApontamentoListarComponent.prototype.listarTodos = function () {
        var _this = this;
        this.apontamentoService.listarTodos()
            .subscribe(function (apontamentos) { return _this.apontamentos = apontamentos; }, function (error) { return _this.msgErro = error; });
    };
    ApontamentoListarComponent.prototype.ngOnInit = function () {
        this.listarTodos();
    };
    ApontamentoListarComponent.prototype.excluir = function (id) {
        this.idExcluir = id;
    };
    ApontamentoListarComponent.prototype.onExcluir = function () {
        var _this = this;
        this.apontamentoService.excluir(this.idExcluir)
            .subscribe(function (data) { return _this.listarTodos(); }, function (error) { return _this.msgErro = error; });
        this.idExcluir = -1;
    };
    ApontamentoListarComponent = __decorate([
        core_1.Component({
            selector: 'apontamento-listar',
            templateUrl: 'app/views/apontamento/listar.html',
            providers: [apontamento_service_1.ApontamentoService],
            directives: [router_1.ROUTER_DIRECTIVES, modal_util_component_1.ModalUtilComponent]
        }), 
        __metadata('design:paramtypes', [apontamento_service_1.ApontamentoService])
    ], ApontamentoListarComponent);
    return ApontamentoListarComponent;
}());
exports.ApontamentoListarComponent = ApontamentoListarComponent;
//# sourceMappingURL=apontamento-listar-component.js.map