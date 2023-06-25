package com.projeto.Application.response;

import com.projeto.Application.model.Medicamento;
import com.projeto.Application.model.Pessoa;
import com.projeto.Application.modelmapper.AbstractResponseMapper;
import org.springframework.stereotype.Component;

@Component
public class MedicamentoResponseConverter extends AbstractResponseMapper<Medicamento, MedicamentoResponse> {

    @Override
    public MedicamentoResponse toResponse(Medicamento response) {
        return MedicamentoResponse.builder()
                .id(response.getId())
                .nome(response.getNome())
                .codigoBarras(response.getCodigoBarras())
                .dosagem(response.getDosagem())
                .fabricante(response.getFabricante())
                .viaAdministracao(response.getViaAdministracao())
                .dataFabricacao(response.getDataFabricacao())
                .dataValidade(response.getDataValidade())
                .build();
    }
}
