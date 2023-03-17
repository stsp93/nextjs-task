import styled from "styled-components";

export const StyledCardsContainer = styled(({...props }) => <ul {...props} />)`
display: flex;
flex-direction: column;
gap: 1.5rem;
padding: 0;
list-style: none;
`;