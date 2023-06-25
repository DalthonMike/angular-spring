package com.projeto.Application.controller;

import com.projeto.Application.controller.IController.IPessoaController;
import com.projeto.Application.converter.PessoaRequestConverter;
import com.projeto.Application.model.Pessoa;
import com.projeto.Application.request.PessoaRequest;
import com.projeto.Application.response.PessoaResponse;
import com.projeto.Application.response.PessoaResponseConverter;
import com.projeto.Application.service.PessoaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/v1/pessoa")
public class PessoaController implements IPessoaController {

    @Autowired
    private PessoaService pessoaService;

    @Autowired
    private PessoaRequestConverter pessoaRequestConverter;

    @Autowired
    private PessoaResponseConverter pessoaResponseConverter;

    @Override
    public ResponseEntity cadastrar(PessoaRequest pessoaRequest) {
        Pessoa pessoa = pessoaRequestConverter.toEntity(pessoaRequest);
        pessoaService.cadastrar(pessoa);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @Override
    public ResponseEntity editar(PessoaRequest pessoaRequest) {
        Pessoa pessoa = pessoaService.buscarPorId(pessoaRequest.getId());
        pessoa.setNome(pessoaRequest.getNome());
        pessoa.setEmail(pessoaRequest.getEmail());
        pessoaService.editar(pessoa);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

    @Override
    public ResponseEntity<List<PessoaResponse>> listar() {
        return ResponseEntity.ok(pessoaResponseConverter.toResponse(pessoaService.listaPadrao()));

    }

    @Override
    public void deletar(Long id) {
        pessoaService.excluirLogicamente(id);
    }

    @Override
    public ResponseEntity<PessoaResponse> findById(Long id) {
        return ResponseEntity.ok(pessoaResponseConverter.toResponse(pessoaService.buscarPorId(id)));
    }

    @Override
    public ResponseEntity<List<PessoaResponse>> listarTodos() {
        return ResponseEntity.ok(pessoaResponseConverter.toResponse(pessoaService.listarTodos()));
    }

}
