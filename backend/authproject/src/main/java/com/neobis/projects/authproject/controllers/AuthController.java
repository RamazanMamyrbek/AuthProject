package com.neobis.projects.authproject.controllers;


import io.swagger.v3.oas.annotations.Hidden;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@Tag(name = "AuthController", description = "Controller for authentication/authorization")
public class AuthController {

    // Endpoint for registration: /api/register
    @PostMapping("/register")
    @Operation(summary = "User registration", description = "Endpoint for user registration. Returns jwt token.")
    public ResponseEntity<String> register() {
        return new ResponseEntity<>("Registration...", HttpStatus.CREATED);
    }


    // Endpoint for login: /api/login
    @PostMapping("/login")
    @Operation(summary = "User login", description = "Endpoint for user login. Returns jwt token.")
    public ResponseEntity<String> login() {
        return new ResponseEntity<>("Login...", HttpStatus.OK);
    }

    // Endpoint for Home page
    @GetMapping("/me")
    @Operation(summary = "Home page", description = "Home page is available after registration.")
    public ResponseEntity<String> homePage() {
        return new ResponseEntity<>("Home page", HttpStatus.OK);
    }

    // Endpoint for logout
    @GetMapping("/logout")
    @Operation(summary = "User logout", description = "Endpoint for user logout.")
    public ResponseEntity<String> logout() {
    return new ResponseEntity<>("Logout...", HttpStatus.OK);
    }
}
