import {Perfil} from "../../../interfaces/Perfil";

export class PessoaResponseModel {

  constructor() {
  }

  perfil: Perfil | undefined;
  status: string | undefined;
  nome: string | undefined;
  email: string | undefined;
  cpf: string | undefined;

}
