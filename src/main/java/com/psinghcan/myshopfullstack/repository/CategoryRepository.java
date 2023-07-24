package com.psinghcan.myshopfullstack.repository;

import com.psinghcan.myshopfullstack.domain.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.lang.NonNull;

import java.util.Optional;

public interface CategoryRepository extends JpaRepository<Category, Integer> {
    Optional<Category> findByNameIgnoreCase(@NonNull String name);
}