package com.projeto.Application.service;

import com.projeto.Application.model.Pessoa;
import com.projeto.Application.repository.PessoaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PessoaService {

    @Autowired
    private PessoaRepository pessoaRepository;

    public void cadastrar(Pessoa pessoa) {
        pessoaRepository.save(pessoa);
    }
}
