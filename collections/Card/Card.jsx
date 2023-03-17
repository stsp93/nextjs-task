// The Card to be exported goes here
import Image from "next/image";

import {
  StyledDescription,
  StyledTitle,
  StyledCard,
  StyledImageContainer,
  StyledTextContainer,
  StyledBoldText,
} from "./elements";

export const Card = ({ image, title, description }) => {
  const boldTextMapper = {
    Brief: "brief writing or simple guidance",
    Search: "criteria matching",
    Pitch: "pitch management",
  };
  const boldText = boldTextMapper[title];
  const boldTextIndex = description.indexOf(boldText);

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
        <StyledDescription>
          {description.slice(0, boldTextIndex)}
          <StyledBoldText>{boldText}</StyledBoldText>
          {description.slice(boldTextIndex).replace(boldText, "")}
        </StyledDescription>
      </StyledTextContainer>
    </StyledCard>
  );
};
