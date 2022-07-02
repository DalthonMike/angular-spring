package com.projeto.Application.service;

import com.projeto.Application.enun.StatusPessoaEnum;
import com.projeto.Application.exception.EntidadeNaoEncontradaException;
import com.projeto.Application.exception.NegocioException;
import com.projeto.Application.model.Pessoa;
import com.projeto.Application.repository.PessoaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PessoaService {

    @Autowired
    private PessoaRepository pessoaRepository;
    @Autowired
    private EmailService emailService;

    public void cadastrar(Pessoa pessoa) {
        emailService.validaEmail(pessoa.getEmail());
        if (pessoaRepository.findByNome(pessoa.getNome()).isPresent()) {
            throw new NegocioException("Já existe uma pessoa com o nome (" + pessoa.getNome() + ") cadastrado");
        } else {
            pessoa.setStatus(StatusPessoaEnum.ATIVO);
            pessoaRepository.save(pessoa);
        }
    }

        public List<Pessoa> listaPadrao() {
        return pessoaRepository.findByStatus(StatusPessoaEnum.ATIVO);
    }

    public List<Pessoa> listarTodos() {
        return pessoaRepository.findAll();
    }

    public void excluirLogicamente(Long id) {
        Pessoa byId = buscarPorId(id);
        byId.setStatus(StatusPessoaEnum.EXCLUIDO);
        pessoaRepository.save(byId);

    }

    public Pessoa buscarPorId(Long id) {
        Pessoa byId = pessoaRepository.findById(id).orElseThrow(() -> new EntidadeNaoEncontradaException("Entidade não encontrada"));
        return byId;
    }

}
