package com.projeto.Application.service;

import com.projeto.Application.model.Medicamento;
import com.projeto.Application.repository.MedicamentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MedicamentoService {

    @Autowired
    private MedicamentoRepository medicamentoRepository;

    public void cadastrar(Medicamento medicamento) {
        medicamentoRepository.save(medicamento);
    }

    public List<Medicamento> listarTodos() {
        return medicamentoRepository.findAll();
    }
}
