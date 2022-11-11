package com.projeto.Application.request;

import com.projeto.Application.enun.PerfilEnum;
import com.sun.istack.NotNull;
import lombok.Data;

@Data
public class PessoaRequest {

    private Long id;

    private PerfilEnum perfil;

    @NotNull
    private String nome;

    @NotNull
    private String email;

    private String cpf;
}
