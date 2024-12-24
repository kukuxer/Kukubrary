package com.kukuxer.kukubrary.config;

import com.kukuxer.kukubrary.entity.Book;
import com.kukuxer.kukubrary.entity.Message;
import com.kukuxer.kukubrary.entity.Review;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

@Configuration
public class MyDataRestConfig implements RepositoryRestConfigurer {
    private final String theAllowedOrigins = "https://localhost:3000";

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration configuration, CorsRegistry cors) {
        HttpMethod[] theUnsupportedMethods = {
                HttpMethod.DELETE,
                HttpMethod.POST,
                HttpMethod.PATCH};
        configuration.exposeIdsFor(Book.class, Review.class, Message.class);
        disableHHttpMethods(Book.class, configuration,theUnsupportedMethods);
        disableHHttpMethods(Review.class, configuration,theUnsupportedMethods);
        disableHHttpMethods(Message.class, configuration,theUnsupportedMethods);

//        configure CORS mapping
        cors.addMapping("/**")
                .allowedOrigins(theAllowedOrigins)
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                .allowedHeaders("Authorization", "Content-Type")
                .allowCredentials(true);
    }

    private void disableHHttpMethods(Class<?> bookClass, RepositoryRestConfiguration configuration, HttpMethod[] theUnsupportedMethods) {
        configuration.getExposureConfiguration()
                .forDomainType(bookClass)
                .withItemExposure((metdata, httpMethods) -> httpMethods.disable(theUnsupportedMethods))
                .withCollectionExposure(((metdata, httpMethods) -> httpMethods.disable(theUnsupportedMethods)));
    }

}
