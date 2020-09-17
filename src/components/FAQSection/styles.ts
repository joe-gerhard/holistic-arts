import styled, { css } from "styled-components";
import { Section, ContentWrapper } from "../../styles/baseStyles";
import { PropsWithTheme } from "../../styles/theme";

const FAQSection = styled(Section)(
  ({ theme }: PropsWithTheme) => css`
    background: ${theme.highlight};
  `
);

const Content = styled(ContentWrapper)`
  justify-content: space-between;

  @media (max-width: 810px) {
    flex-direction: column;
    align-items: center;
  }
`;

export default {
  FAQSection,
  Content,
};
