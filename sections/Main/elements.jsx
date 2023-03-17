import styled from "styled-components";
import {
  SectionContainer,
  SectionBigHeading,
  SectionSubheading,
} from "~/components";

export const StyledContainer = styled(({ height, ...props }) => (
  <SectionContainer {...props} />
))`
  display: block;
  margin: 0 auto;
  margin-top: 4rem;
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
  color: black;
  text-align: center;
  margin: 3rem auto;
  font-family: sans-serif;
`;

export const StyledContentContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  background-image: url("img/background.png");
  max-width: 80%;
  margin: 0 auto;
  background-size: contain;
  background-repeat: no-repeat;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    max-width:100%
  }
`;

export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
  margin: 0;
  color: black;
`;

export const StyledDescription = styled((props) => (
  <SectionSubheading {...props} />
))`
  margin: 1.563rem 0 0;
`;

export const StyledImageContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  min-width: 20rem;
`;
