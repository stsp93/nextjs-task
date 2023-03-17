// The Card to be exported goes here

import { StyledCard } from "./elements";
import Image from "next/image";
import { SectionParagraph, SectionTinyHeading } from "../../components";

export const Card = ({ image, title, description }) => { 
    console.log({ image, title, description })
    return(
  <StyledCard>
    <Image
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
    />
    <SectionTinyHeading>{title}</SectionTinyHeading>
    <SectionParagraph>{description}</SectionParagraph>
  </StyledCard>
)};
