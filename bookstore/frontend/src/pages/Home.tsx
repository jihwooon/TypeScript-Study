import Title from "@/components/common/Title";
import MainNewBooks from "@/components/home/MainNewBooks";
import MainReview from "@/components/home/MainReview";
import { useMain } from "@/hooks/useMain";
import styled from "styled-components";

const Home = () => {

  const {reviews, newBooks } = useMain()
  
  return (
    <HomeStyle>
      {/* 배너 */}
      <h2>배너</h2>
      
      <section className="section">
        <Title size="large">베스트 셀러</Title>
      </section>
      
      <section className="section">
        <Title size="large">신간 안내</Title> 
        <MainNewBooks books={newBooks}/>
      </section>

      <section className="section">
        <Title size="large">리뷰</Title>
       {reviews && <MainReview reviews={reviews}/>}
      </section> 
    </HomeStyle>
  );
};

const HomeStyle = styled.div``;

export default Home;
