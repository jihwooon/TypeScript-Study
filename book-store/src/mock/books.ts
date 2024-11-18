import { http, HttpResponse } from 'msw';
import { faker } from '@faker-js/faker';
import {Book} from "../models/book.model";

const bestBooksData: Book[] = Array.from({
    length: 10,
}).map((_, index) => ({
    id: index,
    title: faker.lorem.sentence(),
    img: faker.helpers.rangeToNumber({ min: 100, max: 200 }),
    category_id: faker.helpers.rangeToNumber({
        min: 0,
        max: 2,
    }),
    form: '종이책',
    isbn: faker.commerce.isbn(),
    summary: faker.lorem.paragraphs(),
    detail: faker.lorem.paragraphs(),
    author: faker.person.firstName(),
    pages: faker.helpers.rangeToNumber({
        min: 100,
        max: 500,
    }),
    contents: faker.lorem.paragraphs(),
    price: faker.helpers.rangeToNumber({
        min: 10000,
        max: 50000,
    }),
    likes: faker.helpers.rangeToNumber({ min: 0, max: 100 }),
    pubDate: faker.date.past().toISOString(),
}));

export const bestBooks = http.get('http://localhost:9999/books/best', () => {
    return HttpResponse.json(bestBooksData, {
        status: 200,
    });
});
