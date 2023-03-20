import { StyledCardsContainer } from "./elements";
import { Card } from '~/collections';

export const CardsContainer = ({ cards }) => {
  return <StyledCardsContainer  >
    {cards.map(card => <Card key={card.title} {...card} />)}
  </StyledCardsContainer>;
};
