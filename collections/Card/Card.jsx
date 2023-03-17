// The Card to be exported goes here
import Image from "next/image";
import { StyledDescription } from "./elements";

import {
  StyledTitle,
  StyledCard,
  StyledImageContainer,
  StyledTextContainer,
} from "./elements";

export const Card = ({ image, title, description }) => {
  return (
    <StyledCard title={title}>
      <StyledImageContainer>
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
        />
      </StyledImageContainer>

      <StyledTextContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
      </StyledTextContainer>
    </StyledCard>
  );
};
