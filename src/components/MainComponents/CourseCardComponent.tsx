import React from "react";
import styled from "styled-components";
import { ICourse } from "../../types";

const StyledCard = styled.div`
  border-radius: 18px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 13px rgba(0, 0, 0, 0.173);
  overflow: hidden;
`;

const StyledImg = styled.img<{ $bgcolor: string }>`
  max-height: 162px;
  flex-grow: 1;
  flex-shrink: 1;
  object-fit: contain;
  padding: 9px;
  ${({ $bgcolor }) => `background-color: ${$bgcolor};`}
`;

const StyledName = styled.div`
  font-size: 18px;
  line-height: 1;
  color: #39414b;
  padding: 12px 18px 18px;
`;

interface IProps {
  course: ICourse;
}

const CourseCardComponent = React.memo(({ course }: IProps) => {
  return (
    <StyledCard>
      <StyledImg
        src={course.image}
        alt="Course image"
        $bgcolor={course.bgColor}
      />
      <StyledName>{course.name}</StyledName>
    </StyledCard>
  );
});

export default CourseCardComponent;
