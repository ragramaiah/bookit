package com.vira.bookit.category.event;

import org.springframework.context.ApplicationEvent;

import com.vira.bookit.category.entity.Category;

public class CategoryCreatedEvent extends ApplicationEvent  {

	private static final long serialVersionUID = 20597347422861779L;

	public CategoryCreatedEvent(Category source) {
		super(source);
	}

}
