package com.projeto.Application.model;

import com.projeto.Application.enun.StatusTimeEnum;
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
@Table(name = "TBL_TIME")
public class Time {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String nome;

    private String nomePerfil;

    @Enumerated(EnumType.STRING)
    private StatusTimeEnum status;

}
