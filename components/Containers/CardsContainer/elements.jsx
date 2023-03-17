import styled from "styled-components";

export const StyledCardsContainer = styled(({ topMargin = 0, bottomMargin = 0, ...props }) => <div {...props} />)`
display: flex;
flex-direction: column;
gap: 1.5rem;
list-style: none;
`;