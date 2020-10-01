import styled, { css } from "styled-components";
import { Section, ContentWrapper } from "../../styles/baseStyles";
import { PropsWithTheme } from "../../styles/theme";

const FAQSection = styled(Section)(
  ({ theme }: PropsWithTheme) => css`
    background: ${theme.ternary};
  `
);

const Content = styled(ContentWrapper)`
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  @media (max-width: 810px) {
  }
`;

export default {
  FAQSection,
  Content,
};
