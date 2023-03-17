import styled from "styled-components";

// Styled elements for the Card go here
export const StyledCard = styled(({...props}) => <li {...props} />)`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 440px;
  padding-right: 40px;
  border-radius: 5px;
`;
