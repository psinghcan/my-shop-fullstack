package com.psinghcan.myshopfullstack.repository;

import com.psinghcan.myshopfullstack.domain.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.lang.NonNull;

import java.util.List;
import java.util.Optional;

public interface ProductRepository extends JpaRepository<Product, Integer> {
    Optional<Product> findByNameIgnoreCase(@NonNull String name);

    List<Product> findByCategory_NameIgnoreCase(@NonNull String name);
}