/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mg.ituproject.signalementproblemes.controllers;

import mg.ituproject.signalementproblemes.http.Meta;
import mg.ituproject.signalementproblemes.http.MetaForForm;
import mg.ituproject.signalementproblemes.http.Response;
import mg.ituproject.signalementproblemes.models.Signalement;
import mg.ituproject.signalementproblemes.models.Utilisateur;
import mg.ituproject.signalementproblemes.services.UtilisateurService;
import mg.ituproject.signalementproblemes.utils.ControlException;
import mg.ituproject.signalementproblemes.utils.FieldError;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author sombiniaina
 */
@CrossOrigin("*")
@RestController
public class UtilisateurController {
    @Autowired
    private UtilisateurService services;
    
    @GetMapping("/api/utilisateur/login")
    public ResponseEntity<Response> login(@RequestBody Utilisateur utilisateur, BindingResult bindingResult){
        try {
            if(bindingResult.hasErrors()){
                MetaForForm meta = new MetaForForm(HttpStatus.BAD_REQUEST.value(), "Errors");
                for (org.springframework.validation.FieldError fieldError : bindingResult.getFieldErrors()) {
                    meta.addFieldError(new FieldError(fieldError.getField(), fieldError.getDefaultMessage()));
                }
                return new ResponseEntity<>(new Response(meta, utilisateur), HttpStatus.OK);
            }
            else{
                Utilisateur utilisateurconnected = services.login(utilisateur);
                return new ResponseEntity<>(new Response(new MetaForForm(HttpStatus.OK.value(), "connected"), utilisateurconnected), HttpStatus.OK);
            }
        } catch (ControlException ex) {
            return new ResponseEntity<>(new Response(new MetaForForm(HttpStatus.BAD_REQUEST.value(), "Errors", ex.getErrors()), utilisateur), HttpStatus.OK);
        } catch (Exception ex) {
            return new ResponseEntity<>(new Response(new Meta(HttpStatus.INTERNAL_SERVER_ERROR.value(), "Internal Server error!"), null), HttpStatus.OK);
        }
    }
    
    @PostMapping("/api/utilisateur/inscription")
    public ResponseEntity<Response> inscription(@RequestBody Utilisateur utilisateur, BindingResult bindingResult){
         try {
            if(bindingResult.hasErrors()){
                MetaForForm meta = new MetaForForm(HttpStatus.BAD_REQUEST.value(), "Errors");
                for (org.springframework.validation.FieldError fieldError : bindingResult.getFieldErrors()) {
                    meta.addFieldError(new FieldError(fieldError.getField(), fieldError.getDefaultMessage()));
                }
                return new ResponseEntity<>(new Response(meta, utilisateur), HttpStatus.OK);
            }
            else{
                Utilisateur utilisateurconnected = services.save(utilisateur);
                return new ResponseEntity<>(new Response(new MetaForForm(HttpStatus.OK.value(), "Utilisateur Inscrit"), utilisateurconnected), HttpStatus.OK);
            }
        } catch (ControlException ex) {
            return new ResponseEntity<>(new Response(new MetaForForm(HttpStatus.BAD_REQUEST.value(), "Errors", ex.getErrors()), utilisateur), HttpStatus.OK);
        } catch (Exception ex) {
            return new ResponseEntity<>(new Response(new Meta(HttpStatus.INTERNAL_SERVER_ERROR.value(), "Internal Server error!"), null), HttpStatus.OK);
        }
    }
    
    @PostMapping("/api/utilisateur/signalements")
    public ResponseEntity<Response> addSignalement(@RequestBody Signalement signalement, BindingResult bindingResult){
        try {
            if(bindingResult.hasErrors()){
                MetaForForm meta = new MetaForForm(HttpStatus.BAD_REQUEST.value(), "Errors");
                for (org.springframework.validation.FieldError fieldError : bindingResult.getFieldErrors()) {
                    meta.addFieldError(new FieldError(fieldError.getField(), fieldError.getDefaultMessage()));
                }
                return new ResponseEntity<>(new Response(meta, signalement), HttpStatus.OK);
            }
            else{
                signalement = services.addSignalement(signalement);
                return new ResponseEntity<>(new Response(new MetaForForm(HttpStatus.OK.value(), "Save Successfuly"), signalement), HttpStatus.OK);
            }
        } catch (ControlException ex) {
            return new ResponseEntity<>(new Response(new MetaForForm(HttpStatus.BAD_REQUEST.value(), "Errors", ex.getErrors()), signalement), HttpStatus.OK);
        } catch (Exception ex) {
            return new ResponseEntity<>(new Response(new Meta(HttpStatus.INTERNAL_SERVER_ERROR.value(), "Internal Server error!"), null), HttpStatus.OK);
        }
    }
}
