package com.projeto.Application.request;

import com.projeto.Application.enun.ViaEnum;
import lombok.Data;

import javax.validation.constraints.NotNull;

@Data
public class MedicamentoRequest {

    @NotNull
    private String nome;

    @NotNull
    private Long codigoBarras;

    @NotNull
    private String dosagem;

    @NotNull
    private String fabricante;

    @NotNull
    private String dataFabricacao;

    @NotNull
    private String dataValidade;

    @NotNull
    private ViaEnum via;

}
