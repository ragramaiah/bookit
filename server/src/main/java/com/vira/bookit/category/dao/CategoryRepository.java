package com.vira.bookit.category.dao;

import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import org.springframework.stereotype.Repository;

import com.vira.bookit.category.entity.Category;

@Repository
public interface CategoryRepository extends ReactiveMongoRepository<Category, String> {

}
