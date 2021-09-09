package com.devsuperior.dsvends;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;

@EnableCaching
@SpringBootApplication
public class DsvendsApplication {

	public static void main(String[] args) {
		SpringApplication.run(DsvendsApplication.class, args);
	}

}
