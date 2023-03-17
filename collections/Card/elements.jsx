import styled, { css } from "styled-components";
import { SectionParagraph, SectionSubheading } from "../../components";

const brief = css`
  background-color: ${({ theme }) => theme.grayF9};
  border: 2px solid ${({ theme }) => theme.grayF9};
  width: 28rem;
`;
const search = css`
  background-color: ${({ theme }) => theme.grayF4};
  border: 2px solid ${({ theme }) => theme.grayF4};
  width: 30rem;
`;
const pitch = css`
  background-color: ${({ theme }) => theme.grayF1};
  border: 2px solid ${({ theme }) => theme.grayF1};
  width: 32rem;
`;

const cardStyleMapper = {
  Brief: brief,
  Search: search,
  Pitch: pitch,
};

export const StyledTextContainer = styled(({ ...props }) => (
  <div {...props} />
))`
padding: 1rem 3rem 1rem 0;

`;

export const StyledImageContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  padding: 3rem;
`;

export const StyledTitle = styled((props) => <SectionSubheading {...props} />)`
  font-weight: 600;
  margin: 0;
  color: black;
`;

export const StyledDescription = styled((props) => (
  <SectionParagraph {...props} />
))`
margin: 0;
`;

export const StyledBoldText = styled((props) => (
    <SectionParagraph {...props} />
  ))`
  display:inline;
  margin:0;
  font-weight:600;
  `;

export const StyledCard = styled(({ ...props }) => <li {...props} />)`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 5px;
  ${({ title }) => cardStyleMapper[title]}
  &:hover {
    cursor: pointer;
    border: 2px solid ${({ theme }) => theme.main};
  }
  &:hover ${StyledTitle} {
    text-decoration: underline;
    color: ${({ theme }) => theme.main};
  }
`;
