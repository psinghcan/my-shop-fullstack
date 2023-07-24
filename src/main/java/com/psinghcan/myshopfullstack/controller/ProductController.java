package com.psinghcan.myshopfullstack.controller;


import com.psinghcan.myshopfullstack.domain.Product;
import com.psinghcan.myshopfullstack.mapper.ProductMapper;
import com.psinghcan.myshopfullstack.model.CategoryDto;
import com.psinghcan.myshopfullstack.model.ProductDto;
import com.psinghcan.myshopfullstack.repository.ProductRepository;
import jakarta.validation.Valid;
import lombok.NonNull;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/product")
public class ProductController {
    private final ProductRepository productRepository;
    private final ProductMapper productMapper;

    public ProductController(ProductRepository productRepository, ProductMapper productMapper) {
        this.productRepository = productRepository;
        this.productMapper = productMapper;
    }

    @GetMapping("")
    public List<ProductDto> getAllProducts() {
        return productRepository.findAll()
                .stream()
                .map(productMapper::toDto)
                .collect(Collectors.toList());
    }

    @GetMapping("/find{name}")
    public List<ProductDto> findByName(@PathVariable String name) {
        return productRepository.findByNameIgnoreCase(name)
                .stream()
                .map(productMapper::toDto)
                .collect(Collectors.toList());
    }

    @GetMapping("/findByCategory{name}")
    public List<ProductDto> findByCategoryName(@PathVariable String name) {
        return productRepository.findByCategory_NameIgnoreCase(name)
                .stream()
                .map(productMapper::toDto)
                .collect(Collectors.toList());
    }

    @PostMapping("/new")
    public ProductDto saveCategory(@RequestBody @NonNull @Valid ProductDto productDto) {
        return productMapper.toDto(productRepository.save(productMapper.toEntity(productDto)));
    }

    @PostMapping("/update")
    public ProductDto updateProduct(@RequestBody @NonNull @Valid ProductDto dto) {
        if (dto.getId() == null) {
            throw new IllegalArgumentException("Product id cannot be null");
        }
        Product product = productRepository.findById(dto.getId())
                .orElseThrow(() -> new IllegalArgumentException("Category with id " + dto.getId() + " not found"));
        Product updatedProduct = productMapper.partialUpdate(dto, product);
        return productMapper.toDto(productRepository.save(updatedProduct));
    }
}

