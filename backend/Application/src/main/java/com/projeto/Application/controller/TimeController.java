package com.projeto.Application.controller;

import com.projeto.Application.controller.IController.ITimeController;
import com.projeto.Application.converter.TimeRequesConverter;
import com.projeto.Application.model.Time;
import com.projeto.Application.request.TimeRequest;
import com.projeto.Application.response.TimeResponse;
import com.projeto.Application.response.TimeResponseConverter;
import com.projeto.Application.service.TimeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/v1/time")
public class TimeController implements ITimeController {

    @Autowired
    private TimeService timeService;

    @Autowired
    private TimeRequesConverter timeRequesConverter;

    @Autowired
    private TimeResponseConverter timeResponseConverter;

    @Override
    public ResponseEntity cadastrar(TimeRequest timeRequest) {
        Time time = timeRequesConverter.toEntity(timeRequest);
        timeService.cadastrar(time);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @Override
    public ResponseEntity<List<TimeResponse>> listar() {
        return ResponseEntity.ok(timeResponseConverter.toResponse(timeService.listaDeTimes()));
    }
}
