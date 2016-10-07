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
var router_1 = require('@angular/router');
var ApontamentoVisualizarComponent = (function () {
    function ApontamentoVisualizarComponent(route, apontamentoService) {
        this.route = route;
        this.apontamentoService = apontamentoService;
    }
    ApontamentoVisualizarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = +this.route.snapshot.params['id'];
        this.apontamento = new apontamento_1.Apontamento();
        this.apontamentoService.buscarPorId(this.id)
            .subscribe(function (apontamento) { return _this.apontamento = apontamento; }, function (error) { return _this.msgErro = error; });
    };
    ApontamentoVisualizarComponent = __decorate([
        core_1.Component({
            selector: 'apontamento-visualizar',
            templateUrl: 'app/views/apontamento/visualizar.html',
            providers: [apontamento_service_1.ApontamentoService],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, apontamento_service_1.ApontamentoService])
    ], ApontamentoVisualizarComponent);
    return ApontamentoVisualizarComponent;
}());
exports.ApontamentoVisualizarComponent = ApontamentoVisualizarComponent;
//# sourceMappingURL=apontamento-visualizar-component.js.map