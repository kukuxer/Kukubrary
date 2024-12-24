package com.kukuxer.kukubrary.service;

import com.kukuxer.kukubrary.dao.BookRepository;
import com.kukuxer.kukubrary.dao.CheckoutRepository;
import com.kukuxer.kukubrary.dao.ReviewRepository;
import com.kukuxer.kukubrary.entity.Book;
import com.kukuxer.kukubrary.requestmodels.AddBookRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
public class AdminService {
    private BookRepository bookRepository;
    private CheckoutRepository checkoutRepository;
    private ReviewRepository reviewRepository;

    @Autowired
    public AdminService(BookRepository bookRepository, ReviewRepository reviewRepository, CheckoutRepository checkoutRepository) {
        this.bookRepository = bookRepository;
        this.reviewRepository = reviewRepository;
        this.checkoutRepository = checkoutRepository;
    }

    public void postBook(AddBookRequest request) {
        Book book = Book.builder()
                .title(request.getTitle())
                .author(request.getAuthor())
                .description(request.getDescription())
                .copies(request.getCopies())
                .copiesAvailable(request.getCopies())
                .category(request.getCategory())
                .img(request.getImg())
                .build();

        bookRepository.save(book);
    }

    public void increaseBookQuantity(Long bookId) throws Exception {
        Optional<Book> book = bookRepository.findById(bookId);
        if (book.isEmpty()) {
            throw new Exception("Book is not found");
        }
        book.get().setCopiesAvailable(book.get().getCopiesAvailable() + 1);
        book.get().setCopies(book.get().getCopies() + 1);


        bookRepository.save(book.get());
    }

    public void decreaseQuantity(Long bookId) throws Exception {
        Optional<Book> optionalBook = bookRepository.findById(bookId);

        if (optionalBook.isEmpty() || optionalBook.get().getCopiesAvailable() <=
                0 || optionalBook.get().getCopies() <= 0) {
            throw new Exception("Book is not found or quantity locked");
        }
        Book book = optionalBook.get();
        book.setCopiesAvailable(book.getCopiesAvailable() - 1);
        book.setCopies(book.getCopies() - 1);

        bookRepository.save(book);
    }

    public void deleteBook(Long bookId) throws Exception {
        Optional<Book> book = bookRepository.findById(bookId);

        if (book.isEmpty()) {
            throw new Exception("book not found");
        }
        bookRepository.delete(book.get());
        checkoutRepository.deleteAllByBookId(bookId);
        reviewRepository.deleteAllByBookId(bookId);
    }
}
