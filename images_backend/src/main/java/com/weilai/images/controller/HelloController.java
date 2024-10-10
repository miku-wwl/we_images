package com.weilai.images.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClient;
import org.springframework.security.oauth2.client.annotation.RegisteredOAuth2AuthorizedClient;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;


@RestController
public class HelloController {
    @GetMapping("/hello")
    public ResponseEntity<?> index(
            @RegisteredOAuth2AuthorizedClient OAuth2AuthorizedClient authorizedClient,
            @AuthenticationPrincipal OAuth2User oauth2User) {
        var userInfo = new HashMap<String, Object>();
        userInfo.put("userName", oauth2User.getName());
        userInfo.put("clientName", authorizedClient.getClientRegistration().getClientName());
        userInfo.put("userAttributes", oauth2User.getAttributes());
        return ResponseEntity.ok().body(userInfo);
    }
}
