package com.projeto.Application.controller.IController;

import com.projeto.Application.request.PessoaRequest;
import com.projeto.Application.response.PessoaResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

public interface IPessoaController {

    @PostMapping
    ResponseEntity cadastrar(@RequestBody PessoaRequest pessoaRequest);

    @GetMapping
    ResponseEntity<List<PessoaResponse>> listar();

    @DeleteMapping("/{id}")
    void deletar(@PathVariable Long id);

    @GetMapping("/{id}")
    ResponseEntity<PessoaResponse> findById(Long id);

    @GetMapping("/todas")
    ResponseEntity<List<PessoaResponse>> listarTodos();

}
