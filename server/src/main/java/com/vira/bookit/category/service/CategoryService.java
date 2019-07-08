package com.vira.bookit.category.service;

import org.springframework.context.ApplicationEventPublisher;
import org.springframework.stereotype.Service;

import com.vira.bookit.category.dao.CategoryRepository;
import com.vira.bookit.category.entity.Category;
import com.vira.bookit.category.event.CategoryCreatedEvent;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
public class CategoryService {

	private final ApplicationEventPublisher publisher;
	private final CategoryRepository categoryRepository;

	public CategoryService(ApplicationEventPublisher publisher, CategoryRepository categoryRepository) {
		this.categoryRepository = categoryRepository;
		this.publisher = publisher;
	}

	public Flux<Category> all() {
		return this.categoryRepository.findAll();
	}

	public Mono<Category> get(String id) {
		return this.categoryRepository.findById(id);
	}

	public Mono<Category> update(String id, String name, String noOfCars) {
		return this.categoryRepository.findById(id).map(p -> new Category(p.getId(), name, noOfCars))
				.flatMap(this.categoryRepository::save);
	}

	public Mono<Category> delete(String id) {
		return this.categoryRepository.findById(id)
				.flatMap(p -> this.categoryRepository.deleteById(p.getId()).thenReturn(p));
	}

	public Mono<Category> create(String name, String noOfCars) {
		return this.categoryRepository.save(new Category(null, name, noOfCars))
				.doOnSuccess(category -> this.publisher.publishEvent(new CategoryCreatedEvent(category)));
	}

	public Mono<Category> create(Category category) {
		return this.categoryRepository.save(category);
	}

	public Mono<Void> deleteAll() {
		return this.categoryRepository.deleteAll();
	}
}
