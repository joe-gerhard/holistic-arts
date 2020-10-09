import React from "react";
import Styled from "./styles";

interface QuoteProps {
  quote: string;
  author: string;
}

const Quote: React.FC<QuoteProps> = ({ quote, author }) => {
  return (
    <Styled.QuoteGroup>
      <Styled.Quote>{quote}</Styled.Quote>
      <Styled.QuoteAuthor>{author}</Styled.QuoteAuthor>
    </Styled.QuoteGroup>
  );
};

export default Quote;
