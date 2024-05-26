import React from "react";
import styled from "styled-components";

const StyledTags = styled.div`
  padding: 12px;
  border: 1px solid #cfcfe4;
  border-radius: 18px; 
  width: fit-content;
  position: sticky;
  top: 24px;
  left: 24px;
`;  

const StyledTag = styled.button<{ selected: boolean }>`
  display: block;
  width: 100%;
  font-size: 18px;
  line-height: 1;
  padding: 12px;
  border-radius: 12px;
  min-width: 240px;
  background-color: transparent;
  border: 0;
  color: #39414b;
  font-weight: 800;
  font-family: inherit;
  cursor: pointer;
  ${({ selected }) => selected && "background-color: #5fbf77; color: #fff;"}
`;

interface IProps {
  tags: string[];
  selectedTag: string | null;
  onSelectTag: (t: string | null) => void;
}

export const TagsView = React.memo(
  ({ tags, selectedTag, onSelectTag }: IProps) => {
    return (
      <StyledTags>
        <StyledTag
          selected={selectedTag === null}
          onClick={() => {
            if (selectedTag !== null) onSelectTag(null);
          }}
        >
          Все темы
        </StyledTag>
        {tags.map((t) => (
          <StyledTag
            selected={selectedTag === t}
            onClick={() => {
              if (selectedTag !== t) onSelectTag(t);
            }}
            key={t}
          >
            {t}
          </StyledTag>
        ))}
      </StyledTags>
    );
  }
);
