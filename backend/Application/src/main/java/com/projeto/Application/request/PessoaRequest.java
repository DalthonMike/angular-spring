package com.projeto.Application.request;

import com.sun.istack.NotNull;
import lombok.Data;

@Data
public class PessoaRequest {

    private Long id;

    @NotNull
    private String nome;

    @NotNull
    private String email;

    private String cpf;
}
