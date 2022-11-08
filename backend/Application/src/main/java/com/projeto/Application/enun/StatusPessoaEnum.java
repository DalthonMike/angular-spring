package com.projeto.Application.enun;

public enum StatusPessoaEnum {

    ATIVO("Ativo"),
    EXCLUIDO("Excluído"),
    EDITADO("Editado");

    private String descricao;

    StatusPessoaEnum(String descricao) {
        this.descricao = descricao;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }
}
