package com.vira.bookit;

import org.reactivestreams.Publisher;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.data.mongo.MongoDataAutoConfiguration;
import org.springframework.boot.autoconfigure.mongo.MongoAutoConfiguration;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vira.bookit.category.entity.Category;
import com.vira.bookit.category.service.CategoryService;

@SpringBootApplication(exclude = { MongoDataAutoConfiguration.class, MongoAutoConfiguration.class })
@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
public class BookitApplication {

	public static void main(String[] args) {
		SpringApplication.run(BookitApplication.class, args);
	}

}

@RestController("/bookit")
class BookitAPI {
	final CategoryService categoryService;

	@Autowired
	BookitAPI(CategoryService categoryService) {
		this.categoryService = categoryService;
	}

	@GetMapping()
	Publisher<Category> getAll() {
		return this.categoryService.all();
	}
}
