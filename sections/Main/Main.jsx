import { StyledContainer, StyledDescription, StyledTitle } from "./elements";
import { StyledTextContainer } from './../Main/elements';

export const Main = ({ title, description, image, ...props }) => (
  <StyledContainer>
    <StyledTextContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
    </StyledTextContainer>
  </StyledContainer>
);
