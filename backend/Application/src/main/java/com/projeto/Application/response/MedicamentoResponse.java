package com.projeto.Application.response;

import com.projeto.Application.enun.ViaEnum;
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
    private String dosagem;
    private String fabricante;
    private String dataFabricacao;
    private String dataValidade;
    private String via;
}
