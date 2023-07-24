package com.psinghcan.myshopfullstack.repository;

import com.psinghcan.myshopfullstack.domain.Invoice;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InvoiceRepository extends JpaRepository<Invoice, Integer> {
}