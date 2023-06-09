import styled, { css } from "styled-components";
import { SectionParagraph, SectionSubheading } from "../../components";

const brief = css`
  background-color: ${({ theme }) => theme.grayF9};
  border: 2px solid ${({ theme }) => theme.grayF9};
  width: 90%;
`;
const search = css`
  background-color: ${({ theme }) => theme.grayF4};
  border: 2px solid ${({ theme }) => theme.grayF4};
  width: 95%;
`;
const pitch = css`
  background-color: ${({ theme }) => theme.grayF1};
  border: 2px solid ${({ theme }) => theme.grayF1};
  width: 100%;
`;

const cardStyleMapper = {
  Brief: brief,
  Search: search,
  Pitch: pitch,
};

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
  padding: 1rem 2rem 1rem 0;
`;

export const StyledImageContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  padding: 2rem;
`;

export const StyledTitle = styled(({ ...props }) => (
  <SectionSubheading {...props} />
))`
  font-weight: 600;
  margin: 0;
  color: black;
  transition: color 0.3s;
`;

export const StyledDescription = styled(({ ...props }) => (
  <SectionParagraph {...props} />
))`
  margin: 0;
`;

export const StyledBoldText = styled(({ ...props }) => (
  <SectionParagraph {...props} />
))`
  display: inline;
  margin: 0;
  font-weight: 600;
`;

export const StyledAnchor = styled(({ ...props }) => <a {...props} />)`
  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;
  color: unset;
`;

export const StyledCard = styled(({ ...props }) => <li {...props} />)`
  max-width: 38rem;
  border-radius: 5px;
  transition: border 0.3s;
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
