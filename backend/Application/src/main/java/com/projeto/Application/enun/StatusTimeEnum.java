package com.projeto.Application.enun;

public enum StatusTimeEnum {

    ATIVO("Ativo"),
    EXCLUIDO("Excluído"),
    EDITADO("Editado");

    private String descricao;

    StatusTimeEnum(String descricao) {this.descricao = descricao;}

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }
}
