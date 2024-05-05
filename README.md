# NY Times Best Sellers App

This Angular application displays bestsellers lists using the [NY Times Books API](https://developer.nytimes.com/docs/books-product/1/overview). Users can get an overview of the top books from current bestsellers lists or view all books included in a chosen category with more details.


## Features

- Get an overview of top 5 books from each category
- View full bestsellers lists from different categories
- Get details about each book including cover art, title, author and summary


## Installation

1. Clone this repo to your local machine with https://github.com/cariotic/nytimes-bestsellers-app.git
2. Navigate to the project directory:
```bash
cd nytimes-bestsellers-app
```
3. Install dependencies:
```bash
npm install
```
4. Create an account on the [NY Times Developer Portal](https://developer.nytimes.com/) and obtain an API key.

5. Navigate to nytimes-bestsellers-app/src and run:
```bash
ng g environments
```
6. Navigate to /environments and replace the contents of environment.ts with:
```typescript
export const environment = {
    NYT_BASE_URL: 'https://api.nytimes.com/svc/books/v3/lists',
    NYT_API_KEY: <your_api_key>,
};.
```
7. Start the development server:
```bash
ng serve
```
8. Open your browser and navigate to http://localhost:4200.
