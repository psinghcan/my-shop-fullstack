package com.psinghcan.myshopfullstack.controller;

import com.psinghcan.myshopfullstack.domain.Category;
import com.psinghcan.myshopfullstack.mapper.CategoryMapper;
import com.psinghcan.myshopfullstack.model.CategoryDto;
import com.psinghcan.myshopfullstack.repository.CategoryRepository;
import jakarta.validation.Valid;
import lombok.NonNull;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.concurrent.Callable;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/category")
public class CategoryController {
    private final CategoryRepository categoryRepository;
    private final CategoryMapper categoryMapper;


    public CategoryController(CategoryRepository categoryRepository, CategoryMapper categoryMapper) {
        this.categoryRepository = categoryRepository;
        this.categoryMapper = categoryMapper;
    }

    @GetMapping("")
    public List<CategoryDto> getAllCategories() {
        return categoryRepository.findAll()
                .stream()
                .map(categoryMapper::toDto)
                .collect(Collectors.toList());
    }

    @GetMapping("/find{name}")
    public List<CategoryDto> findByName(@PathVariable String name) {
        return categoryRepository.findByNameIgnoreCase(name)
                .stream()
                .map(categoryMapper::toDto)
                .collect(Collectors.toList());
    }

    @PostMapping("/new")
    public CategoryDto saveCategory(@RequestBody @NonNull @Valid CategoryDto categoryDto) {
        return categoryMapper.toDto(categoryRepository.save(categoryMapper.toEntity(categoryDto)));
    }

    @PostMapping("/update")
    public CategoryDto updateCategory(@RequestBody @NonNull CategoryDto categoryDto) {

        if (categoryDto.getId() == null) {
            throw new IllegalArgumentException("Category id cannot be null");
        }
        Category category = categoryRepository.findById(categoryDto.getId())
                .orElseThrow(() -> new IllegalArgumentException("Category with id " + categoryDto.getId() + " not found"));
        Category updatedCategory = categoryMapper.partialUpdate(categoryDto, category);
        return categoryMapper.toDto(categoryRepository.save(updatedCategory));
    }
}
