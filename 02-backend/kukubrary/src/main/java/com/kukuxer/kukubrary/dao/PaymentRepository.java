package com.kukuxer.kukubrary.dao;

import com.kukuxer.kukubrary.entity.Payment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PaymentRepository extends JpaRepository<Payment,Long> {

    Payment findByUserEmail(String userEmail);
}
