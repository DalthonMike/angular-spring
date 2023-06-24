package com.projeto.Application.repository;

import com.projeto.Application.enun.StatusPessoaEnum;
import com.projeto.Application.enun.StatusTimeEnum;
import com.projeto.Application.model.Pessoa;
import com.projeto.Application.model.Time;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TimeRepository extends JpaRepository<Time, Long> {

    List<Time> findAllByStatusIsNot(StatusTimeEnum status);

}
