package com.projeto.Application.service;

import com.projeto.Application.model.Time;
import com.projeto.Application.repository.TimeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TimeService {

    @Autowired
    private TimeRepository timeRepository;

    public void cadastrar(Time time) {
        timeRepository.save(time);
    }

    public List<Time> listaDeTimes() {
        return timeRepository.findAll();
    }
}
