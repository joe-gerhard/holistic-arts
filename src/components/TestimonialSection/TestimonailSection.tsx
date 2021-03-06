import React, { useState } from "react";
import Styled from "./styles";
import { ContentWrapper } from "../../styles/baseStyles";
import arrow from "../../images/Arrow.png";
import reviews from "./reviews";

const TestimonialSection: React.FC = () => {
  const [reviewIdx, setReviewIdx] = useState<number>(0);
  const [shouldShowFullReview, setShouldShowFullReview] = useState<boolean>(
    false
  );

  const handleClickLeft = () => {
    if (reviewIdx > 0) {
      setReviewIdx((reviewIdx) => reviewIdx - 1);
    } else {
      setReviewIdx(reviews.length - 1);
    }
    setShouldShowFullReview(false);
  };

  const handleClickRight = () => {
    if (reviewIdx < reviews.length - 1) {
      setReviewIdx((reviewIdx) => reviewIdx + 1);
    } else {
      setReviewIdx(0);
    }
    setShouldShowFullReview(false);
  };

  return (
    <Styled.TestimonialSection>
      <Styled.BackgroundImage />
      <ContentWrapper>
        <Styled.Card>
          <Styled.Headline>Testimonials</Styled.Headline>
          <Styled.ReviewGroup>
            <Styled.ReviewText>
              {shouldShowFullReview ? (
                <>{reviews[reviewIdx].full} --{reviews[reviewIdx].author}</>
              ) : (
                <>
                  "{reviews[reviewIdx].short}"
                  <Styled.ReadMoreButton
                    onClick={() =>
                      setShouldShowFullReview(
                        (shouldShowFullReview) => !shouldShowFullReview
                      )
                    }
                  >
                    ...Read More
                  </Styled.ReadMoreButton>
                </>
              )}
            </Styled.ReviewText>
          </Styled.ReviewGroup>
          <Styled.Controls>
            <Styled.ArrowButton onClick={handleClickLeft}>
              <Styled.LeftArrow src={arrow} alt="Left Arrow" />
            </Styled.ArrowButton>
            {reviews.map((review, idx) => (
              <Styled.Indicator key={idx} highlight={reviewIdx === idx} />
            ))}
            <Styled.ArrowButton onClick={handleClickRight}>
              <Styled.RightArrow src={arrow} alt="Right Arrow" />
            </Styled.ArrowButton>
          </Styled.Controls>
        </Styled.Card>
      </ContentWrapper>
    </Styled.TestimonialSection>
  );
};

export default TestimonialSection;
