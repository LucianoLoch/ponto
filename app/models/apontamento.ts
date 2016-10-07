import { Funcionario } from './funcionario';

export class Apontamento {
	constructor(
		public id?: number,
		public dia?: Date,
		public horaInicio?: number,
		public horaFim?: number,
		public funcionario?: number) {}
}
