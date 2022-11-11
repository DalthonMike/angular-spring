package com.projeto.Application.response;

import com.projeto.Application.enun.PerfilEnum;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PessoaResponse {

    private Long id;

    private String status;

    private String perfil;

    private String nome;

    private String email;

    private String cpf;
}
