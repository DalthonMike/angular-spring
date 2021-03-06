package com.projeto.Application.converter;

import com.projeto.Application.model.Pessoa;
import com.projeto.Application.modelmapper.AbstractEntityMapper;
import com.projeto.Application.request.PessoaRequest;
import org.springframework.stereotype.Component;

@Component
public class PessoaRequestConverter extends AbstractEntityMapper<PessoaRequest, Pessoa> {
    @Override
    public Pessoa toEntity(PessoaRequest request) {
        return Pessoa.builder()
                .nome(request.getNome())
                .email(request.getEmail())
                .cpf(request.getCpf())
                .build();
    }
}
