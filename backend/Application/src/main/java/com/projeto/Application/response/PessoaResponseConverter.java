package com.projeto.Application.response;

import com.projeto.Application.model.Pessoa;
import com.projeto.Application.modelmapper.AbstractResponseMapper;
import org.springframework.stereotype.Component;

@Component
public class PessoaResponseConverter extends AbstractResponseMapper<Pessoa, PessoaResponse> {
    @Override
    public PessoaResponse toResponse(Pessoa response) {
        return PessoaResponse.builder()
                .id(response.getId())
                .nome(response.getNome())
                .email(response.getEmail())
                .cpf(response.getCpf())
                .build();
    }
}
