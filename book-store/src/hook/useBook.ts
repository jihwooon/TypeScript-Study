import {useEffect, useState} from "react";
import {BookDetail} from "../models/book.model";
import {fetchBook, likeBook, unlikeBook} from "../api/books.api";
import {useAuthStore} from "../store/AuthStore";
import {useAlert} from "./useAlert";
import {addCart} from "../api/cart.api";

export const useBook = (bookId: string | undefined) => {
    const [book, setBook] = useState<BookDetail | null>(null)
    const [cartAdded, setCartAdded] = useState(false)

    const { isLoggedIn } = useAuthStore();
    const { showAlert } = useAlert();

    const likeToggle = () => {
        if (!isLoggedIn) {
            showAlert('로그인이 필요합니다.')
            return;
        }

        if (!book) return;

        if (book.liked) {
            unlikeBook(book.id).then(() => {
                setBook({
                    ...book,
                    liked: false,
                    likes: book.likes - 1,
                })
            })
        } else {
            likeBook(book.id).then(() => {
               setBook({
                  ...book,
                  liked: true,
                  likes: book.likes + 1,
               });
            });
        }
    }

    const addToCart = (quantity: number) => {
        if(!book) return

        addCart({bookId: book.id, quantity: quantity}).then(() => {
            showAlert("장바구니에 추가되었습니다.")
            setCartAdded(true)
            setTimeout(() => {
                setCartAdded(false)
            }, 3000)
        })
    }

    useEffect(() => {
        if (!bookId) {
            return
        }

        fetchBook(bookId).then((book) => {
            setBook(book);
        })
    }, [bookId])

    return {book, likeToggle, addToCart, cartAdded};
}
