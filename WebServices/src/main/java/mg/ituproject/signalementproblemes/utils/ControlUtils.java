/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mg.ituproject.signalementproblemes.utils;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 *
 * @author sombiniaina
 */
public class ControlUtils {
    public static boolean isValideEmail(String email) {
        Pattern pattern = Pattern.compile("^[a-z\\.1-9]+@[a-z\\.]+\\.[a-z\\.]+$", Pattern.CASE_INSENSITIVE);
        Matcher match = pattern.matcher(email.trim());
        return match.find();
    }
    
    public static boolean isValidPassword(String password) {
        Pattern pattern = Pattern.compile("^[[:graph:]][[:ascii:]]{6,}[[:graph:]]$", Pattern.CASE_INSENSITIVE);
        Matcher match = pattern.matcher(password);
        return match.find();
    }
}
