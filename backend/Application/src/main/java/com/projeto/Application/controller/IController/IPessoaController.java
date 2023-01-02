package com.projeto.Application.controller.IController;

import com.projeto.Application.request.PessoaRequest;
import com.projeto.Application.response.PessoaResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

public interface IPessoaController {

    @PostMapping
    ResponseEntity cadastrar(@Valid @RequestBody PessoaRequest pessoaRequest);

    @PutMapping
    ResponseEntity editar(@RequestBody PessoaRequest pessoaRequest);

    @GetMapping
    ResponseEntity<List<PessoaResponse>> listar();

    @DeleteMapping("/{id}")
    void deletar(@PathVariable Long id);

    @GetMapping("/{id}")
    ResponseEntity<PessoaResponse> findById(Long id);

    @GetMapping("/todas")
    ResponseEntity<List<PessoaResponse>> listarTodos();

    @GetMapping("/tecnicos")
    ResponseEntity<List<PessoaResponse>> listarTecnicos();
}
