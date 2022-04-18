package com.projeto.Application.controller.IController;

import com.projeto.Application.request.PessoaRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

public interface IPessoaController {

    @PostMapping
    ResponseEntity cadastrar(@RequestBody PessoaRequest pessoaRequest);
}
