import { BookReviewItem } from "@/models/book.model";
import { http, HttpResponse } from "msw";

export const reviewById = http.get(
  "http://localhost:9999/reviews/:bookId",
  () => {
    const data: BookReviewItem[] = [];
    return HttpResponse.json(data, {
      status: 200,
    });
  },
);
