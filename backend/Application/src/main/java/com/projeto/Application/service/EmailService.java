package com.projeto.Application.service;

import com.projeto.Application.exception.NegocioException;
import org.springframework.stereotype.Service;

import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;

@Service
public class EmailService {

    public void validaEmail(String email) {
        boolean result = isResult(email);
        if (!result) {
            throw new NegocioException("E-mail inválido");
        }
    }

    private static boolean isResult(String email) {
        boolean result = true;
        try {
            InternetAddress emailAddr = new InternetAddress(email);
            emailAddr.validate();
        } catch (AddressException ex) {
            result = false;
        }
        return result;
    }
}
