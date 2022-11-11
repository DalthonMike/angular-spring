package com.projeto.Application.controller.IController;

import com.projeto.Application.request.TimeRequest;
import com.projeto.Application.response.TimeResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

public interface ITimeController {

    @PostMapping
    ResponseEntity cadastrar(@RequestBody TimeRequest timeRequest);

    @GetMapping("/todos")
    ResponseEntity<List<TimeResponse>> listar();
}
