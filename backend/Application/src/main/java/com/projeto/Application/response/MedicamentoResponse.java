package com.projeto.Application.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class MedicamentoResponse {

    private Long id;
    private String nome;
    private Long codigoBarras;
    private String dosagem;
    private String fabricante;
    private String viaAdministracao;
    private String dataFabricacao;
    private String dataValidade;
}
