package com.projeto.Application.modelmapper;

import java.util.List;
import java.util.stream.Collectors;

public abstract class AbstractEntityMapper<R, E> {

    public abstract E toEntity(R request);

    public List<E> toEntity(List<R> requestList) {
        return requestList.stream().map(this::toEntity).collect(Collectors.toList());
    }
}
