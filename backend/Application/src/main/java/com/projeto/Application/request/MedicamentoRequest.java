package com.projeto.Application.request;

import lombok.Data;

import javax.validation.constraints.NotNull;
import java.sql.Date;

@Data
public class MedicamentoRequest {

    @NotNull
    private String nome;

    @NotNull
    private Long preco;

    @NotNull
    private Long codigoBarras;

    @NotNull
    private String dosagem;

    @NotNull
    private String fabricante;

    @NotNull
    private String viaAdministracao;

    @NotNull
    private String dataFabricacao;

    @NotNull
    private String dataValidade;

}
