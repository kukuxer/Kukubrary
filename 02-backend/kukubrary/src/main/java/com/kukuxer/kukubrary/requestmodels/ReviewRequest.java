package com.kukuxer.kukubrary.requestmodels;

import lombok.Data;

import java.util.Optional;

@Data
public class ReviewRequest {

    private double rating;
    private Long bookId;
    private Optional<String> reviewDescription;

}
