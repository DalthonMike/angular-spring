package com.projeto.Application.modelmapper;

import java.util.List;
import java.util.stream.Collectors;

public abstract class AbstractResponseMapper<E,R> {

    public abstract R toResponse(E response);

    public List<R> toResponse(List<E> entityList) {
        return entityList.stream().map(this::toResponse).collect(Collectors.toList());
    }
}
