package com.projeto.Application.model;

import com.projeto.Application.enun.ViaEnum;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Date;

@Data
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "TBL_MEDICAMENTO")
public class Medicamento {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String nome;

    private Long codigoBarras;

    private String dosagem;

    private String fabricante;

    private String dataFabricacao;

    private String dataValidade;

    private ViaEnum via;
}
