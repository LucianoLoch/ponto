import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import './rxjs-operators';

@Component({
  selector: 'meu-app',
  template: `
    <nav class="navbar navbar-inverse navbar-fixed-top">
	  <div class="container">
		<div class="navbar-header">
		  <a class="navbar-brand" href="#">Controle Ponto</a>
		</div>
		<div>
		  <ul class="nav navbar-nav">
		  	<li><a [routerLink]="['/aluno-listar']">Alunos</a></li>
        <li><a [routerLink]="['/funcionario-listar']">Funcionários</a></li>
        <li><a [routerLink]="['/apontamento-listar']">Apontamentos</a></li>
        <li><a [routerLink]="['/observacao-listar']">Observações</a></li>
		  	<li><a [routerLink]="['/logout']">Sair</a></li>
		  </ul>
		</div>
	  </div>
	</nav>
    <br /><br /><br />
    <router-outlet></router-outlet>
	`,
	directives: [ ROUTER_DIRECTIVES ]
})
export class AppComponent {
}
