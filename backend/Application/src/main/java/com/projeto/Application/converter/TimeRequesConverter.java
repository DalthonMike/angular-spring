package com.projeto.Application.converter;

import com.projeto.Application.model.Time;
import com.projeto.Application.modelmapper.AbstractEntityMapper;
import com.projeto.Application.request.TimeRequest;
import org.springframework.stereotype.Component;

import java.util.Objects;

@Component
public class TimeRequesConverter extends AbstractEntityMapper<TimeRequest, Time> {
    @Override
    public Time toEntity(TimeRequest request) {
        return Time.builder()
                .id(Objects.isNull(request.getId()) ? null : request.getId())
                .nome(request.getNome())
                .nomePerfil(request.getNomePerfil())
                .build();
    }
}
