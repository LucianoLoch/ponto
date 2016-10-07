"use strict";
var Funcionario = (function () {
    function Funcionario(id, nome, email, cargaHorariaDiaria, cargaHorariaMensal) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.cargaHorariaDiaria = cargaHorariaDiaria;
        this.cargaHorariaMensal = cargaHorariaMensal;
    }
    return Funcionario;
}());
exports.Funcionario = Funcionario;
//# sourceMappingURL=funcionario.js.map