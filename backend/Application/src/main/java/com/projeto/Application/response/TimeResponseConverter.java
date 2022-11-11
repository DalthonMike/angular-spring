package com.projeto.Application.response;

import com.projeto.Application.model.Time;
import com.projeto.Application.modelmapper.AbstractResponseMapper;
import org.springframework.stereotype.Component;

@Component
public class TimeResponseConverter extends AbstractResponseMapper<Time, TimeResponse> {
    @Override
    public TimeResponse toResponse(Time response) {
        return TimeResponse.builder()
                .id(response.getId())
                .nome(response.getNome())
                .build();
    }
}
