import { StyledCardsContainer } from "./elements";
import { Card } from '~/collections';

export const CardsContainer = ({ cardsProps }) => {
  return <StyledCardsContainer  >
    {cardsProps.map(card => <Card key={card.title} {...card} />)}
  </StyledCardsContainer>;
};
