import {Injectable} from "@angular/core";

import Swal from 'sweetalert2'

@Injectable({providedIn: 'root'})
export class Menssagens {

  sucesso(menssagem: string) {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: menssagem,
      showConfirmButton: false,
      timer: 1500
    })
  }

  erroComum(titulo: string, descricao: string) {
    Swal.fire({
      icon: 'warning',
      title: titulo,
      text: descricao,
    })
  }


}
