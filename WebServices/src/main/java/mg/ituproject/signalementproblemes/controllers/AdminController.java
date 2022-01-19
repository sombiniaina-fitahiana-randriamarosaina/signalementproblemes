/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mg.ituproject.signalementproblemes.controllers;

import mg.ituproject.signalementproblemes.http.Meta;
import mg.ituproject.signalementproblemes.http.MetaForForm;
import mg.ituproject.signalementproblemes.http.Response;
import mg.ituproject.signalementproblemes.models.Region;
import mg.ituproject.signalementproblemes.models.Signalement;
import mg.ituproject.signalementproblemes.services.RegionService;
import mg.ituproject.signalementproblemes.services.SignalementService;
import mg.ituproject.signalementproblemes.utils.ControlException;
import mg.ituproject.signalementproblemes.utils.FieldError;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author sombiniaina
 */
@CrossOrigin("*")
@RestController
public class AdminController {
    @Autowired
    private SignalementService signalementServices;
    
    @Autowired
    private RegionService regionServices;
    
    @GetMapping("/api/admin/regions")
    public ResponseEntity<Response> findAllRegion(){
        try {
            return new ResponseEntity<>(new Response(new Meta(HttpStatus.OK.value(), "ok"), regionServices.findAll()), HttpStatus.OK);
        } catch (Exception ex) {
            return new ResponseEntity<>(new Response(new Meta(HttpStatus.INTERNAL_SERVER_ERROR.value(), "Internal Server error!"), null), HttpStatus.OK);
        }
    }
    
    @GetMapping("/api/admin/signalements")
    public ResponseEntity<Response> findAllSignalement(){
        try {
            return new ResponseEntity<>(new Response(new Meta(HttpStatus.OK.value(), "ok"), signalementServices.findAll(new Signalement())), HttpStatus.OK);
        } catch (Exception ex) {
            return new ResponseEntity<>(new Response(new Meta(HttpStatus.INTERNAL_SERVER_ERROR.value(), "Internal Server error!"), null), HttpStatus.OK);
        }
    }
    
    @GetMapping("/api/admin/signalements-non-affecte")
    public ResponseEntity<Response> findAllSignalementNonAffecte(){
        try {
            return new ResponseEntity<>(new Response(new Meta(HttpStatus.OK.value(), "ok"), signalementServices.findAllNonAffecte()), HttpStatus.OK);
        } catch (Exception ex) {
            ex.printStackTrace();
            return new ResponseEntity<>(new Response(new Meta(HttpStatus.INTERNAL_SERVER_ERROR.value(), "Internal Server error!"), null), HttpStatus.OK);
        }
    }
    
    @GetMapping("/api/admin/signalements-affecte")
    public ResponseEntity<Response> findAllSignalementAffecte(){
        try {
            return new ResponseEntity<>(new Response(new Meta(HttpStatus.OK.value(), "ok"), signalementServices.findAllAffecte()), HttpStatus.OK);
        } catch (Exception ex) {
            ex.printStackTrace();
            return new ResponseEntity<>(new Response(new Meta(HttpStatus.INTERNAL_SERVER_ERROR.value(), "Internal Server error!"), null), HttpStatus.OK);
        }
    }
    
    @PostMapping("/api/admin/signalements/{idSignalement}/affecte")
    public ResponseEntity<Response> affecterSignalementRegion(@PathVariable(name = "idSignalement") String idSignalement, @RequestBody Region region, BindingResult bindingResult){
        try {
            if(bindingResult.hasErrors()){
                MetaForForm meta = new MetaForForm(HttpStatus.BAD_REQUEST.value(), "Errors");
                for (org.springframework.validation.FieldError fieldError : bindingResult.getFieldErrors()) {
                    meta.addFieldError(new FieldError(fieldError.getField(), fieldError.getDefaultMessage()));
                }
                return new ResponseEntity<>(new Response(meta, region), HttpStatus.OK);
            }
            else{
                Signalement signalement = signalementServices.findById(idSignalement);
                signalement.setRegion(region);
                signalement = signalementServices.update(signalement);
                return new ResponseEntity<>(new Response(new MetaForForm(HttpStatus.OK.value(), "updated"), signalement), HttpStatus.OK);
            }
        } catch (ControlException ex) {
            return new ResponseEntity<>(new Response(new MetaForForm(HttpStatus.BAD_REQUEST.value(), "Errors", ex.getErrors()), region), HttpStatus.OK);
        } catch (Exception ex) {
            return new ResponseEntity<>(new Response(new Meta(HttpStatus.INTERNAL_SERVER_ERROR.value(), "Internal Server error!"), null), HttpStatus.OK);
        }
    }
    
}
