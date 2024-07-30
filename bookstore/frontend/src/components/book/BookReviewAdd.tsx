import { BookReviewItemWrite } from "@/models/book.model";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Button from "../common/Button";

interface Props {
  onAdd: (data: BookReviewItemWrite) => void;
}

const BookReviewAdd = ({ onAdd }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookReviewItemWrite>();

  const handleAdd = (data: BookReviewItemWrite) => {
    onAdd(data);
  };

  return (
    <BookReviewAddStyle>
      <form onSubmit={handleSubmit(handleAdd)}>
        <fieldset>
          <textarea {...register("content", { required: true })}></textarea>
          {errors.content && (
            <p className="error-text">리뷰 내용을 입력해 주세요</p>
          )}
        </fieldset>
        <fieldset>
          <select {...register("score", { required: true })}>
            <option value="1">1점</option>
            <option value="2">2점</option>
            <option value="3">3점</option>
            <option value="4">4점</option>
            <option value="5">5점</option>
          </select>
          <Button size="medium" scheme="primary">
            작성하기
          </Button>
        </fieldset>
      </form>
    </BookReviewAddStyle>
  );
};

const BookReviewAddStyle = styled.div`
  form {
    display: flex;
    flex-direction: column;
    gap: 6px;

    fieldset {
      border: 0;
      padding: 0;
      margin: 0;
      display: flex;
      gap: 12px;
      justifiy-content: end;

      .error-text {
        color: red;
        padding: 0;
        margin: 0;
      }
    }

    textarea {
      width: 100%;
      hegiht: 100px;
    }
  }
`;

export default BookReviewAdd;
