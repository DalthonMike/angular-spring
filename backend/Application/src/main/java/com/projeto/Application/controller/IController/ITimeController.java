package com.projeto.Application.controller.IController;

import com.projeto.Application.request.TimeRequest;
import com.projeto.Application.response.TimeResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

public interface ITimeController {

    @PostMapping
    ResponseEntity cadastrar(@Valid @RequestBody TimeRequest timeRequest);

    @GetMapping("/todos")
    ResponseEntity<List<TimeResponse>> listar();

    @DeleteMapping("{id}")
    void deletar(@PathVariable Long id);
}
