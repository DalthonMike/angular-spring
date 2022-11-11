package com.projeto.Application.repository;

import com.projeto.Application.model.Time;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TimeRepository extends JpaRepository<Time, Long> {

}
