package com.realestate.conf;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.support.SpringBootServletInitializer;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;



/**
 * Created by Antonio Redondo on 5/25/2017.
 * Entry point of Spring Boot Application
 */
@SpringBootApplication
@EnableJpaRepositories
@Configuration
@ComponentScan
@EnableAutoConfiguration
public class Application extends SpringBootServletInitializer {
    public static void main(String[] args){
        new SpringApplicationBuilder().sources(Application.class).run(args);
    }



}
