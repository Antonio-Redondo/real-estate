package com.realestate.conf;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.ImportResource;

/**
 * Created by Antonio Redondo on 5/25/2017.
 * Class in charge to load the different spring configuration files
 */

@Configuration
@ImportResource({
            "classpath:config.spring/appContext-jdbc-test.xml"
        , "classpath:config.spring/appContext-repository.xml", "classpath:config.spring/appContext-service.xml"
        ,"classpath:config.spring/appContext-controller.xml"})
public class Config {
}
