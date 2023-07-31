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
import java.util.Objects;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/product")
public class ProductController {
    private final ProductRepository productRepository;
    private final ProductMapper productMapper;

    public ProductController(ProductRepository productRepository, ProductMapper productMapper) {
        this.productRepository = productRepository;
        this.productMapper = productMapper;
    }

    @GetMapping("/{id}")
    public ProductDto getProductById(@PathVariable Integer id) {
        return productRepository.findById(id)
                .map(productMapper::toDto)
                .orElseThrow(() -> new IllegalArgumentException("Product with id " + id + " not found"));
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

    @PostMapping("")
    public ProductDto saveProduct(@RequestBody @NonNull @Valid ProductDto productDto) {
        return productMapper.toDto(productRepository.save(productMapper.toEntity(productDto)));
    }

    @PutMapping("/{id}")
    public ProductDto updateProduct(
            @PathVariable Integer id,
            @RequestBody @NonNull @Valid ProductDto dto) {
        if (dto.getId() == null) {
            throw new IllegalArgumentException("Product id cannot be null");
        }
        if (!Objects.equals(id, dto.getId())) {
            throw new IllegalArgumentException("Incorrect product id; not matching with the passed product");
        }
        Product product = productRepository.findById(dto.getId())
                .orElseThrow(() -> new IllegalArgumentException("Category with id " + dto.getId() + " not found"));
        Product updatedProduct = productMapper.partialUpdate(dto, product);
        return productMapper.toDto(productRepository.save(updatedProduct));
    }
}

