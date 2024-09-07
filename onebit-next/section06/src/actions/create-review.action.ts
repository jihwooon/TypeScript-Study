'use server';

import { revalidatePath, revalidateTag } from 'next/cache';

export async function createReviewAction(formData: FormData) {
  const content = formData.get('content')?.toString();
  const author = formData.get('author')?.toString();
  const bookId = formData.get('bookId')?.toString();

  if (!content || !author || !bookId) {
    return;
  }

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/review`, {
      method: 'POST',
      body: JSON.stringify({ bookId, content, author }),
    });
    // revalidatePath(`/book/${bookId}`);
    //
    // revalidatePath('/book/[id]', 'page');
    //
    // revalidatePath('/(with-searchbar)', 'layout');
    //
    // revalidatePath('/', 'layout');

    revalidateTag(`review-${bookId}`);
  } catch (err) {
    console.error(err);
  }
}
