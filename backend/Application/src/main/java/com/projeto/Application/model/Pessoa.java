package com.projeto.Application.model;

import com.projeto.Application.enun.StatusPessoaEnum;
import com.projeto.Application.enun.PerfilEnum;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "TBL_PESSOA")
public class Pessoa {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Enumerated(EnumType.STRING)
    private StatusPessoaEnum status;

    @Enumerated(EnumType.STRING)
    private PerfilEnum perfil;

    private String nome;

    private String email;

    private String cpf;
}
