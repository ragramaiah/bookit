package com.vira.bookit.category.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Category {

	@Id
	private String id;

	private String name;

	private String noOfCars;

	public Category(String id, String name, String noOfCars) {
		super();
		this.id = id;
		this.name = name;
		this.noOfCars = noOfCars;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getNoOfCars() {
		return noOfCars;
	}

	public void setNoOfCars(String noOfCars) {
		this.noOfCars = noOfCars;
	}

}
