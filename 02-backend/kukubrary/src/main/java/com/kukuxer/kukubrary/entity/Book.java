package com.kukuxer.kukubrary.entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "book")
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "copies")
    private int copies;

    @Column(name = "copies_Available")
    private int copiesAvailable;

    @Column(name = "title")
    private String title;

    @Column(name = "author")
    private String author;

    @Column(name = "description")
    private String description;

    @Column(name = "category")
    private String category;

    @Column(name = "img")
    private String img;
}
