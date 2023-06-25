package com.projeto.Application.converter;

import com.projeto.Application.model.Medicamento;
import com.projeto.Application.modelmapper.AbstractEntityMapper;
import com.projeto.Application.request.MedicamentoRequest;
import org.springframework.stereotype.Component;

@Component
public class MedicamentoRequestConverter extends AbstractEntityMapper<MedicamentoRequest, Medicamento> {

    @Override
    public Medicamento toEntity(MedicamentoRequest request) {
        return Medicamento.builder()
                .nome(request.getNome())
                .codigoBarras(request.getCodigoBarras())
                .dosagem(request.getDosagem())
                .fabricante(request.getFabricante())
                .dataFabricacao(request.getDataFabricacao())
                .dataValidade(request.getDataValidade())
                .via(request.getVia())
                .build();
    }
}

