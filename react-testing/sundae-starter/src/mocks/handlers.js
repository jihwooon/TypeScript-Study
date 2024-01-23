// mocks/handlers.js
import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('http://localhost:3030/scoops', () => {
    return HttpResponse.json([
      { name: "Vanilla", imagePath: "/images/vanilla.png" },
      { name: "Chocolate", imagePath: "/image/chocolate.png" }
    ]);
  }),
];
