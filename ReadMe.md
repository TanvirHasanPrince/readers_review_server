# Readers Review Website - Server Side

Welcome to the server side code repository of the Readers Review website. This server handles various backend functionalities that enable users to add books to their catalog, provide book reviews, and perform searches based on different criteria.

## Table of Contents
- [Readers Review Website - Server Side](#readers-review-website---server-side)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Getting Started](#getting-started)
  - [API Endpoints](#api-endpoints)
  - [Authentication](#authentication)
  - [Contributing](#contributing)

## Features

- User Registration and Login using Firebase Authentication.
- Adding Books: Users can add books to their personal catalog.
- Book Reviews: Users can provide reviews and ratings for books.
- Filtering: Books can be filtered based on genre and year published.
- Searching: Users can search for books by title or author's name.

## Technologies Used

- Node.js
- Express.js
- Firebase Authentication
- MongoDB 
- React Js
- TypeScript Js

## Getting Started

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Set up your Firebase project and obtain API keys.
4. Configure environment variables (e.g., Firebase config) in a `.env` file.
5. Set up your chosen database (e.g., MongoDB) and update database connection details.
6. Run the server using `npm run dev`.

## API Endpoints

Below are the API endpoints available in the Reader Review website's server-side code:

- **Get All Books**
  - Endpoint: `GET /books`
  - Description: Retrieves a list of all books in the catalog.
  - Response: Returns a JSON array containing book objects.

- **Add Book**
  - Endpoint: `POST /books`
  - Description: Adds a new book to the catalog.
  - Request Body: Book object
  - Response: Returns the result of the database insertion.

- **Get Single Book**
  - Endpoint: `GET /books/:id`
  - Description: Retrieves detailed information about a specific book.
  - Response: Returns a JSON object containing the book details.

- **Add Review**
  - Endpoint: `POST /reviews/:id`
  - Description: Adds a review to a specific book.
  - Request Body: Review object
  - Response: Returns a message indicating the success of the operation.

- **Get Reviews for a Book**
  - Endpoint: `GET /reviews/:id`
  - Description: Retrieves all reviews for a specific book.
  - Response: Returns a JSON object containing an array of reviews.

- **Home**
  - Endpoint: `GET /`
  - Description: A basic endpoint to test if the server is running.
  - Response: Returns a simple "Hello World!" message.

You can explore and interact with these endpoints to perform various actions within the Reader Review website's backend.

## Authentication

This project uses Firebase Authentication for user registration and login. Make sure to set up your Firebase project and obtain the necessary API keys. Update the `.env` file with your Firebase configuration.

## Contributing

Contributions are welcome! If you find any bugs or want to enhance the project, feel free to open an issue or submit a pull request.


---

[Live Server App](https://reader-review-server.vercel.app/books)
[Client Side Repository](https://github.com/TanvirHasanPrince/reader-review.git)
[Live app](https://readers-review.web.app/)
