package com.projeto.Application.controller;

import com.projeto.Application.controller.IController.IPessoaController;
import com.projeto.Application.converter.PessoaRequestConverter;
import com.projeto.Application.model.Pessoa;
import com.projeto.Application.request.PessoaRequest;
import com.projeto.Application.service.PessoaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("api/v1/pessoa")
public class PessoaController implements IPessoaController {

    @Autowired
    private PessoaService pessoaService;

    @Autowired
    private PessoaRequestConverter pessoaRequestConverter;

    @Override
    public ResponseEntity cadastrar(PessoaRequest pessoaRequest) {
        Pessoa pessoa = pessoaRequestConverter.toEntity(pessoaRequest);
        pessoaService.cadastrar(pessoa);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }
}
