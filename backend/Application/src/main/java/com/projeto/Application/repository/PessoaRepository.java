package com.projeto.Application.repository;

import com.projeto.Application.enun.StatusPessoaEnum;
import com.projeto.Application.model.Pessoa;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface PessoaRepository extends JpaRepository<Pessoa, Long> {

    Optional<Pessoa> findByNome(String nome);

    List<Pessoa> findByStatus(StatusPessoaEnum status);
}
