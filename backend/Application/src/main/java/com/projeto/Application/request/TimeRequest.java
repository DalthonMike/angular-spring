package com.projeto.Application.request;

import com.sun.istack.NotNull;
import lombok.Data;

@Data
public class TimeRequest {

    private Long id;

    @NotNull
    private String nome;
}
