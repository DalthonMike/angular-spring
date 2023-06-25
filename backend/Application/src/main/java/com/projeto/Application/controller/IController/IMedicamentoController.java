package com.projeto.Application.controller.IController;

import com.projeto.Application.model.Medicamento;
import com.projeto.Application.request.MedicamentoRequest;
import com.projeto.Application.response.MedicamentoResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import javax.validation.Valid;
import java.util.List;

public interface IMedicamentoController {

    @PostMapping
    ResponseEntity cadastrar (@Valid @RequestBody MedicamentoRequest medicamento);

    @GetMapping
    ResponseEntity<List<MedicamentoResponse>> listarTodos();
}
