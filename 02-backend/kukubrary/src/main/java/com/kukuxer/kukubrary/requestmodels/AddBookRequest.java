package com.kukuxer.kukubrary.requestmodels;


import lombok.Data;

@Data
public class AddBookRequest {
    private String title;
    private String description;
    private String author;
    private String category;
    private String img;
    private int copies;
}
