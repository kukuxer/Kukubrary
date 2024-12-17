package com.kukuxer.kukubrary.dao;

import com.kukuxer.kukubrary.entity.History;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestParam;

@Repository
public interface HistoryRepository extends JpaRepository<History,Long> {
    Page<History> findBooksByUserEmail(@RequestParam("email")String userEmail, Pageable pageable);
}
