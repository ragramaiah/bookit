package com.vira.bookit;

import java.util.Map;
import java.util.UUID;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;

import com.vira.bookit.category.entity.Category;
import com.vira.bookit.category.service.CategoryService;

import reactor.core.publisher.Flux;

@Component
class MongoDataInitializer implements ApplicationListener<ApplicationReadyEvent> {

	private final CategoryService categoryService;

	final Map<String, String> data = Stream.of(new String[][] { { "Min", "10" }, { "Micro", "3" }, { "Delux", "4" },
			{ "Share", "12" }, { "Share-Express", "19" } }).collect(Collectors.toMap(data -> data[0], data -> data[1]));

	public MongoDataInitializer(CategoryService categoryService) {
		this.categoryService = categoryService;
	}

	@Override
	public void onApplicationEvent(ApplicationReadyEvent event) {
		categoryService.deleteAll()
				.thenMany(Flux.just(data.keySet().toArray())
						.map(name -> new Category(UUID.randomUUID().toString(), (String) name, data.get(name)))
						.flatMap(categoryService::create))
				.thenMany(categoryService.all()).subscribe(category -> {
					System.out.println("saving " + category.getName());
				});
	}
}
