package com.projeto.Application.controller;

import com.projeto.Application.controller.IController.IMedicamentoController;
import com.projeto.Application.converter.MedicamentoRequestConverter;
import com.projeto.Application.model.Medicamento;
import com.projeto.Application.request.MedicamentoRequest;
import com.projeto.Application.response.MedicamentoResponse;
import com.projeto.Application.response.MedicamentoResponseConverter;
import com.projeto.Application.service.MedicamentoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/v1/medicamento")
public class MedicamentoController implements IMedicamentoController {

    @Autowired
    private MedicamentoService medicamentoService;
    @Autowired
    private MedicamentoRequestConverter medicamentoRequestConverter;
    @Autowired
    private MedicamentoResponseConverter medicamentoResponseConverter;

    @Override
    public ResponseEntity cadastrar(MedicamentoRequest medicamentoRequest) {
        Medicamento medicamento = medicamentoRequestConverter.toEntity(medicamentoRequest);
        medicamentoService.cadastrar(medicamento);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @Override
    public ResponseEntity<List<MedicamentoResponse>> listarTodos() {
        return ResponseEntity.ok(medicamentoResponseConverter.toResponse(medicamentoService.listarTodos()));
    }
}
