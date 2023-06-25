package com.projeto.Application.enun;

public enum ViaEnum {

    ORAL("Oral"),
    INTRAVENOSA("Intravenosa"),
    SUBCUTANEA("Subcutânea"),
    TOPICA("Tópica"),
    RETAL("Retal"),
    OFTALMICA("Oftálmica"),
    NASAL("Nasal"),
    INALATORIA("Inalatória");

    private String descricao;

    ViaEnum(String descricao) {
        this.descricao = descricao;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }
}
