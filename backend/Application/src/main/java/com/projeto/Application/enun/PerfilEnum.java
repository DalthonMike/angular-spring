package com.projeto.Application.enun;

public enum PerfilEnum {

    TECNICO("Técnico"),
    COMUM("Comum");

    private String descricao;

    PerfilEnum(String descricao) {
        this.descricao = descricao;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }
}
