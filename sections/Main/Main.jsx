import Image from "next/image";
import { CardsContainer } from "../../components";

import {
  StyledContainer,
  StyledTextContainer,
  StyledContentContainer,
  StyledDescription,
  StyledImageContainer,
  StyledTitle,
} from "./elements";

export const Main = ({ title, description, image, cards }) => {
  console.log(image);
  return (
    <StyledContainer>
      {/*Section Title */}
      <StyledTextContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
      </StyledTextContainer>
      {/* Section Content */}
      <StyledContentContainer>
        <StyledImageContainer>
          <Image
            layout="responsive"
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
          />
        </StyledImageContainer>
        {/* Cards */}
        <CardsContainer cards={cards} />
      </StyledContentContainer>
    </StyledContainer>
  );
};
