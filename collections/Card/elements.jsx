import styled, { css } from "styled-components";
import { SectionParagraph, SectionSubheading } from "../../components";

const brief = css`
  background-color: ${({ theme }) => theme.grayF9};
  border: 2px solid ${({ theme }) => theme.grayF9};
  width: 30rem;
`;
const search = css`
  background-color: ${({ theme }) => theme.grayF4};
  border: 2px solid ${({ theme }) => theme.grayF4};
  width: 32rem;
`;
const pitch = css`
  background-color: ${({ theme }) => theme.grayF1};
  border: 2px solid ${({ theme }) => theme.grayF1};
  width: 34rem;
`;

const cardStyleMapper = {
  Brief: brief,
  Search: search,
  Pitch: pitch,
};

export const StyledTextContainer = styled(({ ...props }) => (
  <div {...props} />
))``;

export const StyledImageContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  padding: 2rem;
`;

export const StyledTitle = styled((props) => <SectionSubheading {...props} />)`
  font-weight: 600;
  margin: 0;
  color: black;
`;

export const StyledDescription = styled((props) => (
  <SectionParagraph {...props} />
))`
`;

export const StyledCard = styled(({ ...props }) => <li {...props} />)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem 1rem 0;
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
